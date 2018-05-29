---
title: MagentoResolver
---

An adapter that configures Webpack to resolve assets using Magento PWA conventions.

This module generates a configuration object used in the [`resolve`] property of a Webpack config.
The configuration object tells Webpack how to traverse the filesystem structure for assets required in source files.

Currently, MagentoResolver does very little, but it's likely that the Magento development environment will require custom resolution rules in the future; this utility sets the precedent of the API for delivering those rules.

## API

### `configure(options)`

**Parameters:**

* `options: ResolverOptions`
    * `options.path: object`(**required**) - Local absolute paths to theme folders
    * `options.root` - Absolute path to the root directory of the theme

**Return**

[Promise] configuration type for Webpack

{: .bs-callout .bs-callout-info}
**Note:**
`MagentoResolver.configure()` is asynchronous.

## Example

In `webpack.config.js`:

``` js
const buildpack = require('@magento/pwa-buildpack');
const MagentoResolver = buildpack.Webpack.MagentoResolver;

module.exports = async env => {
    const config {
        /* webpack entry, output, rules, etc */


        resolve: await MagentoResolver.configure({
            paths: {
                root: __dirname
            }
        })

    };

    return config;
}
```


{: .bs-callout .bs-callout-info}
**Note:**
The example provided uses the newer, cleaner `asynch/await` syntax instead of using Promises directly 


[`resolve`]: https://webpack.js.org/configuration/resolve/
[Promise]: https://webpack.js.org/configuration/configuration-types/#exporting-a-promise