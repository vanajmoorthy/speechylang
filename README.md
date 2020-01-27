# Speechy

#### Speechy is a small LISP style programming language what uses Babel as an AST and transpiles to JavaScript.

### *Installation*

You can install Speech from npm using the command

`npm install speechylang` or `npm install speechylang -g`

You can start the REPL by using the command `speechy` and run speechy files using `speechy run path/to/file/example.spy`

(Keep in mind that speechy files use the .spy extension).


### *Basic Overview*

The syntax is **super** simple. 

Speechy uses a prefix based LISP style syntax in the following manner: 

`(add 2 3 (multiply 4 5))`

This code will multiple 4 and 5 and add the result of that operation (20) to 2 and 3, ultimately evaluating to 25.

Speechy also supports defining variables using the keyword "let".

`(let x 2)`

This is the same as saying let x = 2 in Javascript.

### *Standard Library*

The Speechy standard library is incredibly small at the moment and consist of the following functions.

* add: `(add 2 3 4)`
* subtract: `(subtract 2 3 4)`
* multiply: `(multiple 2 3 4)`
* modulo: `(modulo 2 10)`
* log: `(log "hello, world!")`
* pi: `(pi)`
* max: `(max 2 3 4)`
* min: `min(2 3 4)`
* percentage: `(percentage 5 100)`

