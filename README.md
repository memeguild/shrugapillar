# Shrugapillar.js

A library for generating shrugapillars.

## Installation

    $ npm install shrugapillar

## Usage

```js
var Shrugapillar = require('shrugapillar');
```

### Static Functions

**`Shrugapillar.getAll() → Array.<Shrugapillar>`**

- Returns the list of registered shrugapillars (as [Shrugapillar instances]()).

**`Shrugapillar.get('name') → Shrugapillar`**

- Returns a single Shrugapillar instance whose `commonName` or `species` matches the provide name.

**`Shrugapillar.register(options, ...) → void`**

- Adds a Shrugapillar to the list of registered shrugapillars.
- See [`src/index.js`]() for examples of `options` objects.

### Constants

**`Shrugapillar.TYPES → Object<string, string>`**

- A list of available output types that can be used when rendering a shrugapillar.
    - `PLAIN` - Optimized for Arial.
    - `TWITTER` - Optimized for Helvetica Neue. Also adds a tiny character at the start of the string to prevent whitespace trimming.
    - `SLACK` - Optimized for Slack-Lato (their desktop font). Also adds a tiny character at the start of the string to prevent whitespace trimming.
    - `MONO` - Optimized for Courier.

### Shrugapillar Instances

Shrugapillar instance should not be instantiated manually. Instead use the static methods `Shrugapillar.getAll()` and `Shrugapillar.get()`.

#### Public methods:

**`shrugapillar.getDefinition() → Object`**

- Returns a copy of the definition used to create the shrugapillar. Includes any properties that were provided when the shrugapillar was registered.

**`shrugapillar.render(options) → string`**

- Renders the shrugapillar to a string.
- `options` include:
    - `type:string` Optional. Defaults to `Shrugapillar.TYPES.PLAIN`.
    - `length:number` Optional. The number of body sections to render. Defaults to `1`.
    - `maxNumCharacters:number` Optional. Caps the number of body sections so that the total length (in characters) of the shrugapillar is less than maxNumberCharacters.

Example:

```js
var result = Shrugapillar.get('marcinekae').render({
    type: Shrugapillar.TYPES.MONO,
    length: 42
});
// Will return a string with:
//    ᕙ ᕗ
// ¯\_(ツ)_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(  )_/¯
// ¯\_(__)_/¯
```
