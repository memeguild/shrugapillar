Usage:

```js

import * as Shrugapillar from 'shrugapillar';

// Render every shrugapillar.
Shrugapillar.getAll().forEach(shrugapillar => {
    console.log(shrugapillar.render({
        length: 10,
    }));
});

// Render one specific shrugapillar.
Shrugapillar.get('marcinekae').render({length: 5});

```