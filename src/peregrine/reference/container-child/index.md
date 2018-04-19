---
title: ContainerChild
---

The `ContainerChild` component is the only child allowed within a `Container` in PWA Studio.

## Props

| Name     | Required                                      | Description                                               |
| -------- | :-------------------------------------------: | --------------------------------------------------------- |
| `id`     | <i class="material-icons green">check_box</i> | A unique string identifier                                |
| `render` | <i class="material-icons green">check_box</i> | A [render prop] that should return the children to render |

## Example

``` jsx
import { ContainerChild } from '@magento/peregrine';

<div data-mid="some.container.identifier">
    <ContainerChild
        id="another.unique.id"
        render={() => <div>Used just like a normal render() method</div>}
    />
    <ContainerChild
        id="one.more.unique.id"
        render={() => (
            <div>Can render anything a normal component can render</div>
        )}
    />
</div>;
```

[render prop]: https://reactjs.org/docs/render-props.html