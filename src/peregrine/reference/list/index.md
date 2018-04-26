---
title: List
---

The `List` component maps a collection of data objects into an array of elements.
It also manages the selection and focus of those elements.

## Props

| Name                | Required                                      | Description                                                      |
| ------------------- | :-------------------------------------------: | ---------------------------------------------------------------- |
| `classes`           |                                               | A classname hash                                                 |
| `items`             | <i class="material-icons green">check_box</i> | A keyed collection of data object (an ES2015 [Map] if possible ) |
| `render`            | <i class="material-icons green">check_box</i> | A [render prop]. A tagname string is also valid.                 |
| `renderItem`        |                                               | A [render prop]. A tagname string is also valid.                 |
| `onSelectionChange` |                                               | A callback that fires when the selection state changes.          |
| `selectionModel`    |                                               | An enum string corresponding to a selection model.               |

### Selection models

{% include peregrine/reference/list-selection-models.md %}

## Example

``` jsx
{% raw %}
import { List } from '@magento/peregrine';

const basicItems = new Map()
    .set('s', 'Small')
    .set('m', 'Medium')
    .set('l', 'Large')

<List
    classes={{ root: 'foo' }}
    items={basicItems}
    render="select"
    renderItem="option"
/>

const complexItems = new Map()
    .set('s', { id: 's', value: 'Small' })
    .set('m', { id: 'm', value: 'Medium' })
    .set('l', { id: 'l', value: 'Large' })

// let `Select` and `Option` be React components
<List
    classes={{ root: 'bar' }}
    items={complexItems}
    render={Select}
    renderItem={Option}
    onSelectionChange={selection => { console.log(selection); }}
/>
{% endraw %}
```

[render prop]: https://reactjs.org/docs/render-props.html