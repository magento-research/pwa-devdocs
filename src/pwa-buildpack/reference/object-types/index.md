---
title: Object types
---

This is a list of common object types shared between the PWA-Buildpack modules.

## `LocalProjectLocation`

* `root: string` - The absolute path of the project's root directory on the working filesystem.
* `output: string` - The directory where webpack should output any built assets.
    If the value is relative, the location is resolved from the value of `root`.
* `assets: string` - The directory where any assets not explicity built by webpack is found.