---
title: PWADevServer
---

A utility for configuring a development OS and a `webpack-dev-server` for PWA development.

A typical webpack local development environment uses the [`devServer`] settings in `webpack.config.js` to create a temporary, local HTTP server to show edits in real time.

PWA development requires the following:

* A *secure* and *trusted* host for ServiceWorker operations
* A *unique* host to prevent ServiceWorker collisions
* A customize-able way to proxy backend request to a Magento 2 backing store

PWADevServer performs the following during setup:

* Creates and caches a custom local hostname for the current theme
* Adds the custom local hostname to `/etc/hosts`   
  *(requires elevated permissions, so you may be asked for a password)*
* Creates and caches an SSL certificate for the custom local hostname
* Adds the certificate to the OS-level keychain for browser trust  
  *(requires elevated permissions, so you may be asked for a password)*
* Customizes the `webpack-dev-server` instance to:
    * Proxy all asset requests not managed by webpack to the Magento store
    * Emulate the public path settings of the Magento store
    * Automatically switch domain names in HTML attributes
    * Debug or disable ServiceWorkers

## API

### `configure(options)`

**Parameters:**

* `options: PWADevServerOptions`
    * `id: string` (**required**) - A unique ID for this project used to create the dev domain name.
      We recommend using the theme name for this value, but you can use any domain-name-safe string.

      If you are developing several copies of a theme simultaneously, use this ID to distinguish them in the internal tooling.
    * `publicPath: string` (**required**) - The public path to the theme assets in the backend server.
      
      Example:
      `/pub/static/frontend/Vendor/themename/en_US`
    * `backendDomain: string` (**required**) - The URL of the backing store.
    * `paths:`[`LocalProjectLocation`] (**required**) - Configuration object that describes where to deploy JavaScript files and the public static assets directory.
    * `serviceWorkerFileName: string` (**required**) - The name of the ServiceWorker file this theme creates, such as `sw.js`.
    * `changeOrigin: boolean` (**experimental**) - Try to parse an HTML responses from the proxied Magento backend and replace its domain name with the dev server domain name.

      The default value is `false`.

**Return:**

A [Promise] configuration type for webpack.

{: .bs-callout .bs-callout-info}
**Note:**
`PWADevServer.configure()` is asynchronous.


## Example

In `webpack.config.js`:

``` js
const path = require('path');
const buildpack = require('@magento/pwa-buildpack');
const PWADevServer = buildpack.Webpack.PWADevServer;

module.exports = async env => {
    const config {
        /* webpack entry, output, rules, etc */

        devServer: await PWADevServer.configure({
            publicPath: '/pub/static/frontend/Vendor/theme/en_US/',
            backendDomain: 'https://magento2.localdomain',
            serviceWorkerFileName: 'sw.js',
            paths: {
                output: path.resolve(__dirname, 'web/js'),
                assets: path.resolve(__dirname, 'web')
            },
            id: 'magento-venia'
        })
    };

    config.output.publicPath = config.devServer.publicPath;

    return config;
}
```

{: .bs-callout .bs-callout-info}
**Note:**
The example provided uses the newer, cleaner `async/await` syntax instead of using Promises directly 

{: .bs-callout .bs-callout-info}
**Note:**
The emitted `devServer` object may have a custom `publicPath`.
To get the best performance from the ServiceWorker, set `config.output.publicpath` to the `publicPath` value once the `devServer` is created but before creating a ServiceWorker plugin.



[`devServer`]: https://webpack.js.org/configuration/dev-server/
[Promise]: https://webpack.js.org/configuration/configuration-types/#exporting-a-promise
[`LocalProjectLocation`]: {{ site.baseurl }}{%link pwa-buildpack/reference/object-types/index.md %}#localprojectlocation