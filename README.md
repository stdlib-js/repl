<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# REPL

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Read-Eval-Print Loop (REPL) environment.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

A Read-Eval-Print Loop (REPL) environment is an interactive programming environment which takes individual user inputs (e.g., single expressions), evaluates those inputs, and returns the result. Accordingly, a program written in a REPL environment is executed piecewise and sequentially.

REPL environments find common use in exploratory programming, prototyping, and debugging.

The REPL environment exposed here is available both as a standalone application and as a library which is embeddable in other libraries and applications.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/repl
```

</section>

<section class="usage">

## Usage

```javascript
var REPL = require( '@stdlib/repl' );
```

#### REPL( \[options] )

Returns a `REPL` instance.

```javascript
// Create a new REPL:
var repl = new REPL();

// ...

// Close the REPL:
repl.close();
```

The function accepts the following `options`:

-   **input**: input (readable) stream. Default: [`stdin`][@stdlib/streams/node/stdin].
-   **output**: output (writable) stream. Default: [`stdout`][@stdlib/streams/node/stdout].
-   **sandbox**: boolean indicating whether to run a REPL in a sandboxed context. Default: `false`.
-   **timeout**: number of milliseconds to execute a command before terminating execution. Default: `4294967295`.
-   **isTTY**: boolean indicating whether the input and output streams should be treated like a TTY (terminal) and whether the REPL should use ANSI/VT100 escape codes when writing to the output stream.
-   **inputPrompt**: input prompt. If the input prompt includes the character sequence `%d`, the input prompt includes line numbers. Default: `'In [%d]: '`.
-   **outputPrompt**: output prompt. If the output prompt includes the character sequence `%d`, the output prompt includes line numbers. Default: `'Out[%d]: '`.
-   **welcome**: welcome message.
-   **padding**: number of empty lines between consecutive commands. Default: `1`.
-   **themes**: table containing color themes for syntax highlighting.
-   **load**: file path specifying a JavaScript file to load and evaluate line-by-line (e.g., a previous REPL history file).
-   **save**: file path specifying where to save REPL command history.
-   **log**: file path specifying where to save REPL commands and printed output.
-   **quiet**: boolean indicating whether log information, confirmation messages, and other possible REPL diagnostics should be silenced. Default: `false`.
-   **settings**: object specifying REPL settings.

The function supports specifying the following settings:

-   **autoClosePairs**: boolean indicating whether to automatically insert matching brackets, parentheses, and quotes. Default: `true`.
-   **autoDeletePairs**: boolean indicating whether to automatically delete adjacent matching brackets, parentheses, and quotes. Default: `true`.
-   **autoPage**: boolean indicating whether to automatically page return values having a display size exceeding the visible screen. When streams are TTY, the default is `true`; otherwise, the default is `false`.
-   **bracketedPaste**: boolean indicating whether to enable bracketed-paste mode. When streams are TTY, the default is `true`; otherwise, the default is `false`.
-   **autoDisableBracketedPasteOnExit**: boolean indicating whether to automatically disable bracketed-paste upon exiting the REPL. When streams are TTY and bracketed paste is enabled, the default is `true`; otherwise, the default is `false`.
-   **completionPreviews**: boolean indicating whether to display completion previews for auto-completion. When streams are TTY, the default is `true`; otherwise, the default is `false`.
-   **syntaxHighlighting**: boolean indicating whether to enable syntax highlighting of entered input expressions. When streams are TTY, the default is `true`; otherwise, the default is `false`.
-   **theme**: initial color theme for syntax highlighting. Default: `stdlib-ansi-basic`.

#### REPL.prototype.viewport()

Returns the REPL viewport.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// Query the REPL viewport:
var v = repl.viewport();

// Close the REPL:
repl.close();
```

#### REPL.prototype.createContext()

Returns a REPL context.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Return a new REPL context:
var ctx = repl.createContext();

// ...

// Close the REPL:
repl.close();
```

#### REPL.prototype.resetContext()

Resets a REPL's execution context.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Reset the REPL context:
repl.resetContext();

// ...

// Close the REPL:
repl.close();
```

#### REPL.prototype.clearHistory()

Clears a REPL's history.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Clear the REPL history:
repl.clearHistory();

// ...

// Close the REPL:
repl.close();
```

#### REPL.prototype.clearUserDocs()

Clears user-defined documentation.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Clear user-defined documentation:
repl.clearUserDocs();

// ...

// Close the REPL:
repl.close();
```

#### REPL.prototype.themes()

Returns a list of all available themes for syntax highlighting.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Fetch all available themes:
var themes = repl.themes();
// returns [...]

// ...

// Close the REPL:
repl.close();
```

#### REPL.prototype.getTheme( name )

Returns a theme's color palette for syntax highlighting.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Add a user-defined theme:
repl.addTheme( 'myTheme', {
    'keyword': 'red'
});

// Get a theme's color palette:
var theme = repl.getTheme( 'myTheme' );
// returns { 'keyword': 'red' }

// ...

// Close the REPL:
repl.close();
```

#### REPL.prototype.addTheme( name, theme )

Adds a syntax highlighting theme.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Add a user-defined theme:
repl.addTheme( 'myTheme', {
    'keyword': 'red',
    'variable': 'green'

    // ...
});

// ...

// Close the REPL:
repl.close();
```

The syntax-highlighter supports the following tokens and associated theme fields:

-   **keyword**: keywords (e.g., `var`, `function`, `let`, `const`, `in`, and `class`).
-   **control**: control flow keywords (e.g., `if`, `else`, `try`, `catch`, and `return`).
-   **specialIdentifier**: special identifiers (e.g., `this` and `super`).
-   **string**: string and template literals.
-   **number**: numeric literals.
-   **literal**: reserved literals (e.g., `true`, `false`, `null`, and `undefined`).
-   **regexp**: regular expressions.
-   **command**: built-in REPL commands.
-   **function**: function identifiers.
-   **object**: object identifiers.
-   **variable**: literal identifiers.
-   **name**: variable names.
-   **comment**: line comments.
-   **punctuation**: punctuation symbols (e.g., `;`, `[`, `{`, `,`, and `?`).
-   **operator**: operator symbols (e.g., `+`, `-`, `*`, `=`, `++`, `>=`, and `&&`).

#### REPL.prototype.deleteTheme( name )

Deletes a specified theme from the syntax-highlighter.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Add a user-defined theme:
repl.addTheme( 'myTheme', {
    'keyword': 'red',
    'variable': 'green'

    // ...
});

// Delete the added theme:
repl.deleteTheme( 'myTheme' );

// ...

// Close the REPL:
repl.close();
```

#### REPL.prototype.renameTheme( oldName, newName )

Renames a specified theme in the syntax-highlighter.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Add a user-defined theme:
repl.addTheme( 'myTheme', {
    'keyword': 'red',
    'variable': 'green'

    // ...
});

// Rename the added theme:
repl.renameTheme( 'myTheme', 'yourTheme' );

// ...

// Close the REPL:
repl.close();
```

#### REPL.prototype.load( fpath, clbk )

Loads and evaluates a JavaScript file line-by-line.

<!-- run-disable -->

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Load and evaluate a file line-by-line:
repl.load( './path/to/file.js', done );

function done() {
    // Close the REPL:
    repl.close();
}
```

#### REPL.prototype.reset()

Resets a REPL.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Reset the REPL:
repl.reset();

// ...

// Close the REPL:
repl.close();
```

#### REPL.prototype.clear()

Clears the entire REPL screen and scrollback history.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Clear the REPL:
repl.clear();

// ...

// Close the REPL:
repl.close();
```

This method is **only** applicable for TTY REPLs. In non-TTY REPLs, this method is a non-operation.

#### REPL.prototype.clearLine()

Clears the current line.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Clear the current line:
repl.clearLine();

// ...

// Close the REPL:
repl.close();
```

This method is **only** applicable for TTY REPLs. In non-TTY REPLs, this method is a non-operation.

#### REPL.prototype.clearCommand()

Clears the current REPL command buffer (i.e., clear any command which has been buffered but not yet executed).

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Clear the command buffer:
repl.clearCommand();

// ...

// Close the REPL:
repl.close();
```

#### REPL.prototype.settings( \[name\[, value]] )

Returns REPL settings.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Retrieve REPL settings:
var o = repl.settings();

// ...

// Close the REPL:
repl.close();
```

To retrieve the current value for a specific setting, provide a `name` argument.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Retrieve current setting value:
var v = repl.settings( 'autoClosePairs' );

// ...

// Close the REPL:
repl.close();
```

To update a specific setting, provide a `value` argument.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Update setting value:
repl.settings( 'autoClosePairs', false );

// ...

// Close the REPL:
repl.close();
```

#### REPL.prototype.close()

Closes a REPL.

```javascript
var debug = require( '@stdlib/streams/node/debug-sink' );

// Create a new REPL:
var repl = new REPL({
    'output': debug()
});

// ...

// Close the REPL:
repl.close();
```

* * *

### Commands

REPL instances support the following commands...

#### addTheme( name, theme )

Adds a syntax highlighting color theme.

```text
// Add color theme:
In [1]: addTheme( 'myTheme', { 'keyword': 'red' } )

// Check updated list of themes:
In [2]: themes()
Out[2]: [ 'stdlib-ansi-basic', 'myTheme' ]
```

#### alias2pkg( arg )

Returns the package name associated with a provided alias or class instance.

```text
In [1]: var v = alias2pkg( 'base.sin' )
Out[1]: '@stdlib/math/base/special/sin'
```

**Note**: only direct instances of documented built-in constructors are supported.

#### alias2related( arg )

Returns aliases related to a specified alias or class instance.

```text
In [1]: var v = alias2related( 'base.sin' )
Out[1]: [...]
```

**Note**: only direct instances of documented built-in constructors are supported.

#### ans

Result of the last successfully executed command.

```text
In [1]: identity( 3.14 )
Out[1]: 3.14

In [2]: ans
Out[2]: 3.14
```

#### assignfrom( workspace, variable )

Reads a value from a specified `workspace`.

```text
In [1]: workspace( 'foobar' );

In [2]: var x = 3.14;

In [3]: workspace( 'barfoo' );

In [4]: var y = assignfrom( 'foobar', 'x' )
Out[4]: 3.14
```

#### assignin( workspace, variable, value )

Assigns a `value` to a `variable` in a specified `workspace`.

```text
In [1]: assignin( 'base', 'x', 3.14 );

In [2]: x
Out[2]: 3.14
```

#### citation()

Prints how to cite stdlib in publications.

```text
In [1]: citation()
```

#### clear()

Clears the entire REPL screen and scrollback history.

```text
In [1]: clear()
```

**Note**: this function is only applicable for TTY REPLs. In non-TTY REPLs, this function is a non-operation.

#### clearHistory()

Clears the REPL history.

```text
In [1]: clearHistory()
```

#### clearUserDocs( \[options] )

Deletes user-defined documentation.

```text
In [1]: clearUserDocs()
```

The function supports the following `options`:

-   **include**: inclusion filter. May be either an array-like `object` or a regular expression.

-   **exclude**: exclusion filter. May be either an array-like `object` or a regular expression.

-   **filter**: filter type. This option is only applicable for array-like `object` filters. Must be one of the following values:

    -   `'alias'`: filter based on documentation alias. If a filter matches a documentation alias, the user-defined documentation is removed.
    -   `'value'`: filter based on object reference. If a filter matches an associated object reference, the user-defined documentation is removed.
    -   `'*'`: filter based on both documentation alias and object reference. If a filter matches either a documentation alias or an associated object reference, the user-defined documentation is removed.

    Default: `'*'`.

```text
In [1]: clearUserDocs( { 'include': /^foo/ } )
```

#### clearvars( \[options] )

Deletes user-defined variables in the current workspace.

```text
In [1]: clearvars()
```

The function supports the following `options`:

-   **include**: variable name inclusion filter. May be either an array-like `object` or a regular expression.
-   **exclude**: variable name exclusion filter. May be either an array-like `object` or a regular expression.

```text
In [1]: clearvars( { 'include': /^foo/ } )
```

#### clearWorkspace( \[name, ]\[options] )

Deletes user-defined variables in a specified workspace.

```text
In [1]: clearWorkspace()
```

By default, the function clears user-defined variables in the current workspace. To clear user-defined variables in a different workspace, provide a workspace `name`.

```text
// Create a new workspace:
In [1]: workspace( 'foobar' );

In [2]: var x = 3.14;

// Switch to another workspace:
In [3]: workspace( 'barfoo' );

In [4]: typeof x
Out[4]: 'undefined'

// List the variables in the previous workspace:
In [5]: varsWorkspace( 'foobar' )
Out[5]: [ 'x' ]

// Delete the variables in the previous workspace:
In [6]: clearWorkspace( 'foobar' );

In [7]: varsWorkspace( 'foobar' )
Out[7]: []

// Navigate to the previous workspace:
In [8]: workspace( 'foobar' );

// Confirm that the variables were deleted:
In [9]: x
Error: x is not defined
```

The function supports the following `options`:

-   **include**: variable name inclusion filter. May be either an array-like `object` or a regular expression.
-   **exclude**: variable name exclusion filter. May be either an array-like `object` or a regular expression.

```text
In [1]: clearWorkspace( 'foobar', { 'include': /^x/ } );
```

#### contributors()

Prints a list of stdlib contributors.

```text
In [1]: contributors()
```

#### copyright()

Prints copyright information.

```text
In [1]: copyright()
```

#### credits()

Prints credits.

```text
In [1]: credits()
```

#### currentWorkspace

Returns the name of the current workspace.

```text
In [1]: currentWorkspace
Out[1]: 'base'
```

#### deleteTheme( name )

Deletes a syntax highlighting color theme.

```text
// Add a color theme:
In [1]: addTheme( 'myTheme', { 'keyword': 'red' } )

// Check list of themes:
In [2]: themes()
Out[2]: [ 'stdlib-ansi-basic', 'myTheme' ]

// Delete the added theme:
In [3]: deleteTheme( 'myTheme' )

// Check updated list of themes:
In [4]: themes()
Out[4]: [ 'stdlib-ansi-basic' ]
```

#### deeprerequire( id )

Re-imports a module, JSON, or local file and all of its associated module dependencies.

```text
In [1]: var foo = require( './foo.js' );

// Modify `./foo.js` and/or its module dependencies...

// Re-import the module:
In [2]: foo = deeprerequire( './foo.js' );
```

Modules can be imported from `node_modules`. Local modules and JSON files can be imported using a relative path (e.g., `'./foo.js'`, `'./../bar.json'`, etc) that will be resolved against the current working directory.

#### deleteWorkspace( \[name] )

Deletes a workspace.

```text
In [1]: workspace( 'foobar' );

In [2]: var x = 3.14;

In [3]: workspace( 'barfoo' );

In [4]: workspaces()
Out[4]: [ 'base', 'foobar', 'barfoo' ]

In [5]: deleteWorkspace( 'foobar' );

In [6]: workspaces()
Out[6]: [ 'base', 'barfoo' ]
```

If not provided an argument, the REPL deletes the current workspace and switches to the `'base'` workspace.

```text
In [1]: workspace( 'foobar' );

In [2]: currentWorkspace
Out[2]: 'foobar'

In [3]: deleteWorkspace();

In [4]: workspaces()
Out[4]: [ 'base' ]

In [5]: currentWorkspace
Out[5]: 'base'
```

**Note**: the `'base'` workspace **cannot** be deleted.

#### donate()

Prints donation information.

```text
In [1]: donate()
```

#### evalin( workspace, expression )

Evaluates an `expression` in a specified `workspace`.

```text
// Create a workspace:
In [1]: workspace( 'foobar' );

// Create and switch to another workspace:
In [2]: workspace( 'barfoo' );

// Attempt to evaluate an expression in the first workspace:
In [3]: evalin( 'foobar', 'var x = 3.14;' );

// Check that nothing has changed in the current workspace:
In [4]: x
Error: x is not defined

// Switch to the first workspace:
In [5]: workspace( 'foobar' );

// Check that the expression was successfully evaluated:
In [6]: x
Out[6]: 3.14
```

#### example( arg )

Runs examples for a specified alias, property, or class instance.

```text
In [1]: example( base.sin )
```

**Note**: only direct instances of documented built-in constructors are supported.

#### getTheme( \[name] )

Returns a syntax highlighting color theme.

```text
// Add a color theme:
In [1]: addTheme( 'myTheme', { 'keyword': 'red' } )

// Get the color theme:
In [2]: getTheme( 'myTheme' )
Out[2]: { 'keyword': 'red' }
```

**Note**: if no theme name is provided, the current theme is returned.

#### help( \[arg] )

Prints help text.

```text
In [1]: help()
```

To print help text for an alias,

```text
In [1]: help( 'base.sin' )

In [2]: help( base.sin )
```

To print help text for a property,

```text
In [1]: help( random.streams.randu.factory )
```

To print help text for a class instance,

```text
In [1]: var x = new Float64Array( 10 );

In [2]: help( x )
```

**Note**: only direct instances of documented built-in constructors are supported.

#### info( arg )

Prints abbreviated help text for a provided alias, property, or class instance.

```text
In [1]: info( base.sin )

In [2]: info( 'base.sin' )
```

**Note**: only direct instances of documented built-in constructors are supported.

#### isKeyword( keyword )

Returns a `boolean` indicating whether a string is a reserved keyword in the REPL environment.

```text
In [1]: isKeyword( 'base.sin' )
Out[1]: true
```

#### license()

Prints license information.

```text
In [1]: license()
```

#### load( fpath )

Loads and evaluates a JavaScript file, such as a REPL history file, line-by-line.

```text
In [1]: load( './path/to/file.js' )
```

#### loadWorkspace( name\[, options] )

Loads variables from a specified workspace into the current workspace.

```text
In [1]: workspace( 'foobar' );

In [2]: var x = 3.14;

In [3]: workspace( 'barfoo' );

In [4]: typeof x
Out[4]: 'undefined'

In [5]: loadWorkspace( 'foobar' );

In [6]: x
Out[6]: 3.14
```

The function supports the following `options`:

-   **include**: variable name inclusion filter. May be either an array-like `object` or a regular expression.
-   **exclude**: variable name exclusion filter. May be either an array-like `object` or a regular expression.
-   **override**: `boolean` indicating whether to override existing workspace variables. Default: `true`.

```text
In [1]: workspace( 'foobar' );

In [2]: var x = 3.14, y = 6.28;

In [3]: workspace( 'barfoo' );

In [4]: typeof x
Out[4]: 'undefined'

In [5]: loadWorkspace( 'foobar', { 'include': /^x/ } );

In [6]: x
Out[6]: 3.14

In [7]: typeof y
Out[7]: 'undefined'
```

#### logStart( fpath )

Starts logging commands and printed output to a specified file path.

```text
// TODO
```

#### logStop( id )

Stops logging commands and printed output to a file path associated with a specified record identifier.

```text
// TODO
```

#### presentationStart( \[text, ]\[options] )

Starts a REPL [presentation][@stdlib/repl/presentation].

```text
In [1]: var id = presentationStart( 'beep\n---\nboop\n' );
```

The function accepts the following `options`:

-   **borderTop**: top border character sequence. Default: `'*'`.
-   **borderBottom**: bottom border character sequence. Default: `'*'`.
-   **borderLeft**: left border character sequence. Default: `'* '`.
-   **borderRight**: right border character sequence. Default: `' *'`.
-   **counter**: slide counter. Can either be `true`, `false`, or `'progress'`. Default: `false`.
-   **width**: [presentation][@stdlib/repl/presentation] width. If `null`, the [presentation][@stdlib/repl/presentation] width is either computed based on the screen size (if a REPL output stream is TTY) or set to `80` characters. Default: `null`.
-   **height**: [presentation][@stdlib/repl/presentation] height. If `null`, the [presentation][@stdlib/repl/presentation] height is either computed based on the screen size (if a REPL output stream is TTY) or set to `25` rows. Default: `null`.
-   **workspace**: REPL workspace name. A [presentation][@stdlib/repl/presentation] adds commands to the specified workspace, thus allowing [presentation][@stdlib/repl/presentation] navigation and interaction. Default: `'presentation-<n>'`, where `n` is an assigned [presentation][@stdlib/repl/presentation] identifier.
-   **load**: file path specifying a [presentation][@stdlib/repl/presentation] file to load. If presentation `text` is provided, this option is **ignored**. Otherwise, this option is **required**.
-   **watch**: `boolean` indicating whether to watch a [presentation][@stdlib/repl/presentation] source file for changes. This option is only applicable if not provided presentation `text` and the `options` object specifies a presentation file to load. Default: `false`.
-   **autoClear**: `boolean` indicating whether to automatically clear the screen before writing a rendered slide to the REPL. Default: `true`.
-   **loop**: `boolean` indicating whether to "loop" a presentation. Default: `false`.

A few notes:

-   When not provided presentation `text`, an options argument **must** specify a presentation file to load.
-   If a specified workspace already exists, the workspace is silently cleared and a new [presentation][@stdlib/repl/presentation] bound. In order to preserve an existing workspace, specify an alternative presentation workspace name.

#### presentationStop( \[id] )

Stops a REPL [presentation][@stdlib/repl/presentation].

```text
In [1]: var id = presentationStart( 'beep\n---\nboop\n' );

In [2]: presentationStop();
```

A few notes:

-   If provided a presentation identifier, the corresponding [presentation][@stdlib/repl/presentation] is stopped. Otherwise, assuming the function is invoked in a presentation workspace, the current [presentation][@stdlib/repl/presentation] is stopped.
-   When stopping a REPL [presentation][@stdlib/repl/presentation], the presentation's REPL workspace is both **cleared** and **deleted**.

#### quit()

Exits the REPL.

```text
In [1]: quit()
```

#### renameTheme( oldName, newName )

Renames a syntax highlighting color theme.

```text
// Add a color theme:
In [1]: addTheme( 'myTheme', { 'keyword': 'red' } )

// Check list of themes:
In [2]: themes()
Out[2]: [ 'stdlib-ansi-basic', 'myTheme' ]

// Rename the added theme:
In [3]: getTheme( 'myTheme', 'yourTheme' )

// Check updated list of themes:
In [4]: themes()
Out[4]: [ 'stdlib-ansi-basic', 'yourTheme' ]
```

#### renameWorkspace( oldName, newName )

Renames a workspace.

```text
// Create a new workspace:
In [1]: workspace( 'foobar' );

In [2]: var x = 3.14;

// List current workspaces:
In [3]: workspaces()
Out[3]: [ 'base', 'foobar' ]

// Switch to another workspace:
In [4]: workspace( 'barfoo' );

// List current workspaces:
In [5]: workspaces()
Out[5]: [ 'base', 'foobar', 'barfoo' ]

// Rename the first workspace:
In [6]: renameWorkspace( 'foobar', 'beepboop' );

// Check the updated list of workspaces:
In [7]: workspaces()
Out[7]: [ 'base', 'barfoo', 'beepboop' ]

// Switch to the renamed workspace:
In [8]: workspace( 'beepboop' );

// Confirm that workspace contains previously defined variables:
In [9]: x
Out[9]: 3.14
```

**Note**: the new workspace name must **not** already exist. The only exception is when the old name and the new name are the same; in which case, invoking this command is a non-operation.

**Note**: as a `'base'` workspace must **always** exist, when renaming the `'base'` workspace, variables from the `'base'` workspace are simply copied to a new workspace and the `'base'` workspace cleared of user-defined variables.

#### require( id )

Imports a module, JSON, or local file.

```text
In [1]: var crypto = require( 'crypto' );
```

Modules can be imported from `node_modules`. Local modules and JSON files can be imported using a relative path (e.g., `'./foo.js'`, `'./../bar.json'`, etc) that will be resolved against the current working directory.

#### rerequire( id )

Re-imports a module, JSON, or local file.

```text
In [1]: var foo = require( './foo.js' );

// Modify `./foo.js`...

// Re-import the module:
In [2]: foo = rerequire( './foo.js' );
```

Modules can be imported from `node_modules`. Local modules and JSON files can be imported using a relative path (e.g., `'./foo.js'`, `'./../bar.json'`, etc) that will be resolved against the current working directory.

#### rerun( \[arg] )

Reruns previous commands.

```text
In [1]: 1+1
Out[1]: 2

In [2]: rerun()
```

By default, the command re-executes the previous command. If provided an `integer`, the previous `n` commands are re-executed.

```text
In [1]: 1+1
Out[1]: 2

In [2]: 2+2
Out[2]: 4

In [3]: rerun( 2 )
```

If provided a regular expression, the most recent command matching the regular expression is rerun.

```text
In [1]: var x = base.sin( 3.14 );

In [2]: 1+1
Out[2]: 2

In [3]: rerun( /base\.sin/ )
```

If provided an `array` of command identifiers, the command corresponding to each identifier is rerun.

```text
In [1]: 1+1
Out[1]: 2

In [2]: 2+2
Out[2]: 4

In [3]: 3+3
Out[3]: 6

In [4]: rerun( [ 1, 3 ] )
```

If provided a subsequence `string`, the command corresponding to each resolved command identifier is rerun.

```text
In [1]: 1+1
Out[1]: 2

In [2]: 2+2
Out[2]: 4

In [3]: 3+3
Out[3]: 6

In [4]: rerun( '1:3:2' )
```

**WARNING**: be careful when re-evaluating previously executed `rerun` commands, as this can lead to infinite execution loops.

#### reset()

Resets the REPL.

```text
In [1]: reset()
```

#### save( fpath )

Saves previous commands to a specified file path.

```text
// TODO
```

#### saveStart( fpath )

Starts saving commands to a specified file path.

```text
// TODO
```

#### saveStop( id )

Stops saving commands to a file path associated with a specified record identifier.

```text
// TODO
```

#### settings( \[name\[, value]] )

Displays REPL settings.

```text
In [1]: settings()
```

To retrieve the current value for a specific setting, provide a `name` argument.

```text
In [1]: settings( 'autoClosePairs' )
```

To update a specific setting, provide a `value` argument.

```text
In [1]: settings( 'autoClosePairs', false )
```

#### themes()

Returns a list of all available syntax highlighting color themes.

```text
// Add a color theme:
In [1]: addTheme( 'myTheme', { 'keyword': 'red' } )

// Check list of themes:
In [2]: themes()
Out[2]: [ 'stdlib-ansi-basic', 'myTheme' ]
```

#### tutorial( \[name, \[options]] )

Starts a tutorial.

```text
In [1]: var id = tutorial( 'repl' );
```

The function accepts the following `options`:

-   **borderTop**: top border character sequence. Default: `'*'`.
-   **borderBottom**: bottom border character sequence. Default: `'*'`.
-   **borderLeft**: left border character sequence. Default: `'* '`.
-   **borderRight**: right border character sequence. Default: `' *'`.
-   **counter**: slide counter. Can either be `true`, `false`, or `'progress'`. Default: `progress`.
-   **workspace**: REPL workspace name. A tutorial [presentation][@stdlib/repl/presentation] adds commands to the specified workspace, thus allowing tutorial navigation and interaction. Default: `'tutorial-<name>-<n>'`, where `name` is the tutorial `name` and `n` is an assigned tutorial [presentation][@stdlib/repl/presentation] identifier.
-   **autoClear**: `boolean` indicating whether to automatically clear the screen before writing a rendered tutorial slide to the REPL. Default: `true`.

A few notes:

-   When not provided a tutorial `name`, the function prints a list of available tutorials.
-   If a specified workspace already exists, the workspace is silently cleared and a new tutorial [presentation][@stdlib/repl/presentation] bound. In order to preserve an existing workspace, specify an alternative tutorial workspace name.

#### userDoc( alias, \[ref,] doc )

Adds user-defined documentation.

```text
In [1]: function foo() {};

In [2]: userDoc( 'foo', foo, '\nfoo()\n    Foo bar.\n' );

In [3]: help( foo )
```

If user-defined documentation already exists for the provided alias, the current documentation is overwritten.

```text
In [1]: function foo() {};

In [2]: userDoc( 'foo', foo, '\nfoo()\n    Foo bar.\n' );

In [3]: help( foo )

foo()
    Foo bar.


In [4]: userDoc( 'foo', foo, '\nfoo()\n    Beep boop.\n' );

In [5]: help( foo )

foo()
    Beep boop.


```

#### vars( \[options] )

Returns a list of variable names in the current workspace.

```text
In [1]: var x = 3.14;

In [2]: vars()
Out[2]: [ 'x' ]
```

The function supports the following `options`:

-   **include**: regular expression variable name inclusion filter.
-   **exclude**: regular expression variable name exclusion filter.
-   **types**: array-like `object` containing variable type inclusion filter(s).
-   **details**: `boolean` indicating whether to include additional variable details, such as variable type, contents, etc. Default: `false`.

```text
In [1]: var x = 3.14;

In [2]: vars( { 'details': true } )
```

#### varsWorkspace( \[name, ]\[options] )

Returns a list of variable names in a specified workspace.

```text
In [1]: var x = 3.14;

// List variable names in the current workspace:
In [2]: varsWorkspace()
Out[2]: [ 'x' ]

In [3]: workspace( 'foo' );

In [4]: varsWorkspace( 'base' )
Out[4]: [ 'x' ]
```

The function supports the following `options`:

-   **include**: regular expression variable name inclusion filter.
-   **exclude**: regular expression variable name exclusion filter.
-   **types**: array-like `object` containing variable type inclusion filter(s).
-   **details**: `boolean` indicating whether to include additional variable details, such as variable type, contents, etc. Default: `false`.

```text
In [1]: var x = 3.14;

In [2]: workspace( 'foo' );

In [3]: varsWorkspace( 'base', { 'details': true } )
```

#### workspace( name )

Switches to a specified workspace.

```text
In [1]: workspace( 'foobar' );

In [2]: var x = 3.14;

In [3]: workspace( 'beepboop' );

In [4]: x
Error: x is not defined

In [5]: workspace( 'foobar' );

In [6]: x
Out[6]: 3.14
```

If a workspace with the specified `name` does not exist, the workspace is created.

#### workspaces( \[options] )

Returns a list of workspace names.

```text
In [1]: workspaces()
Out[1]: [ 'base' ]
```

The function supports the following `options`:

-   **include**: regular expression workspace name inclusion filter.
-   **exclude**: regular expression workspace name exclusion filter.
-   **details**: `boolean` indicating whether to include additional workspace details, such as variable names, types, contents, etc. Default: `false`.

```text
In [1]: workspaces( { 'details': true  } )
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var REPL = require( '@stdlib/repl' );

function onExit() {
    console.log( '' );
    console.log( 'REPL closed.' );
}

// Create a new REPL:
var repl = new REPL();
repl.on( 'exit', onExit );

// Load a history file:
repl.load( join( __dirname, 'examples', 'history.txt' ), done );

function done() {
    // Close the REPL:
    repl.close();
}
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/repl-cli
```

</section>
<!-- CLI usage documentation. -->


<section class="usage">

### Usage

```text
Usage: stdlib-repl [options]

Options:

  -h, --help                    Print this message.
  -V, --version                 Print the package version.
      --welcome <message>       Welcome message.
      --input-prompt <prompt>   Input prompt. Default: 'In [%d]: '.
      --output-prompt <prompt>  Output prompt. Default: 'Out[%d]: '.
      --padding <padding>       Empty lines between commands. Default: 1.
      --load <filepath>         JavaScript file to evaluate line-by-line.
      --save <filepath>         File to save REPL command history.
      --logfile <filepath>      File to log REPL commands and printed output.
      --timeout <timeout>       Milliseconds before terminating a command.
      --quiet                   Disable printing of REPL logs and diagnostics.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- CLI usage examples. -->

<section class="examples">

### Examples

```bash
$ stdlib-repl
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/repl.svg
[npm-url]: https://npmjs.org/package/@stdlib/repl

[test-image]: https://github.com/stdlib-js/repl/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/repl/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/repl/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/repl?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/repl.svg
[dependencies-url]: https://david-dm.org/stdlib-js/repl/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/repl/main/LICENSE

[@stdlib/streams/node/stdin]: https://github.com/stdlib-js/streams-node-stdin

[@stdlib/streams/node/stdout]: https://github.com/stdlib-js/streams-node-stdout

[@stdlib/repl/presentation]: https://github.com/stdlib-js/repl/tree/main/presentation

</section>

<!-- /.links -->
