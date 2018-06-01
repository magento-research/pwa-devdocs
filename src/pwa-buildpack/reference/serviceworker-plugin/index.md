---
title: ServiceWorkerPlugin
---

A webpack plugin for configuring a ServiceWorker for different PWA development scenarios.

This plugin is a wrapper around the [Google Workbox Webpack Plugin].
It generates a caching ServiceWorker based on assets emitted by webpack.

The following phases are available for this plugin:

* **normal development** - the ServiceWorker is disabled
* **service worker debugging** - the ServiceWorker and hot-reloading are enabled.

## API

### `ServiceWorker(options)`

Plugin constructor for the `ServiceWorkerPlugin` class.

**Parameters**

* `options: PluginOptions`
    * `options.env: object` (**required**) - An object that represents the current environment
        * `env.phase: string` (**required**) - Must be **development** or **production**
    * `options.paths:`[`LocalProjectLocation`] (**required**) - Configuration object that describes where the public static assets are located.
    * `options.enableServiceWorkerDebugging: boolean` - When `true`, hot reloading is enabled and the ServiceWorker is active in the document root.
        
        When `false`, the ServiceWorker is disabled to prevent cache interruptions when hot reloading assets.
    * `options.serviceWorkerFileName: string` (**required**) - The name of the ServiceWorker file this theme creates
    * `options.runtimeCacheAssetPath: string` - A path or remote URL that represents the root path to assets the ServiceWorker should cache as requested during runtime.

## Example

In `webpack.config.js`:

``` js
const path = require('path');
const buildpack = require('@magento/pwa-buildpack');
const ServiceWorkerPlugin = buildpack.Webpack.ServiceWorkerPlugin;

module.exports = async env => {
    const config = {
        /* webpack config, i.e. entry, output, etc. */
        plugins: [
            /* other plugins */
            new ServiceWorkerPlugin({
                env: {
                    mode: 'development'
                },

                paths: {
                    output: path.resolve(__dirname, 'web/js'),
                    assets: path.resolve(__dirname, 'web')
                },
                enableServiceWorkerDebugging: true,
                serviceWorkerFileName: 'sw.js',
                runtimeCacheAssetPath: 'https://cdn.url'
            })
        ]
    };

    return config;

};

```

[Google Workbox Webpack Plugin]: https://developers.google.com/web/tools/workbox/guides/generate-service-worker/
[`LocalProjectLocation`]: {{ site.baseurl }}{%link pwa-buildpack/reference/object-types/index.md %}#localprojectlocation