# bad-templates [![npm version](https://badge.fury.io/js/bad-templates.svg)](https://badge.fury.io/js/bad-templates)

A not-very-good HTML templating system. Not versatile, probably has lots of bugs, critical features missing, pollutes the global namespace -- just terrible stuff. But it kind of works.

### Installation

```
npm i bad-templates -S
```

### Usage

```html
<!-- ./templates/index.html -->
<h1>Hello, ${who}!</h1>
${date}
<p>some text here</p>
```

```html
<!-- ./templates/who.html -->
World
```

```html
<!-- ./templates/date.html -->
<h2>${new Date().toDateString()}</h2>
```

```js
// index.js
const compile = require('bad-templates')

compile('./templates')

console.log(who)
// World

console.log(date)
// <h2>Sat Apr 08 2017</h2>

console.log(index)
// <h1>Hello, World!</h1>
// <h2>Sat Apr 08 2017</h2>
// <p>some text here</p>
```

### Assumptions/Considerations

1. the provided function should be given a path to a directory containing `.html` files (any files not ending with `.html` are ignored)

2. each `<file>.html` will be compiled and the resulting output stored in a global named `<file>` (the name of the original `.html` file, minus the extension)

3. since the name of the `.html` file will ultimately also become the name of the global variable, your files should only be named something that could be used as a valid and unique JavaScript variable (ie, no `-` characters, no spaces, don't start with a number, etc.)

4. error and warning messages will probably be unhelpful

5. try not to declare a circular dependency, it probably won't end well

### Why?

Why not? Also...

I like the idea of just using template literals as an HTML templating system, but I don't like having to write my HTML within strings. This was just an idea to let me write my HTML like normal, but where I could still utilize the features of template literals. Also as a way to provide easy access to other templates via just using their names.

I may or may not expand on this idea later on.