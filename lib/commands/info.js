/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-underscore-dangle */

'use strict';

// MODULES //

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var alias2info = require( './../../info' );
var indexOf = require( './../index_of.js' );
var findUniqueEntry = require( './../find_unique_entry.js' );
var alias2string = require( './../alias_to_string.js' );
var DOCS = require( './../repl_docs.js' );


// MAIN //

/**
* Returns a callback to be invoked upon calling the `info` command.
*
* @private
* @param {REPL} repl - REPL instance
* @param {ArrayArray} cmds - REPL command list
* @returns {Function} callback
*/
function command( repl, cmds ) {
	return onCommand;

	/**
	* Prints abbreviated help text.
	*
	* @private
	* @param {*} alias - variable alias or value
	* @returns {void}
	*/
	function onCommand( alias ) {
		var aliases;
		var entry;
		var out;
		var N;
		var i;

		aliases = repl._aliases;
		N = aliases.length;

		if ( isString( alias ) ) {
			// Command docs supersede project namespace docs...
			for ( i = 0; i < cmds.length; i++ ) {
				if ( cmds[ i ][ 0 ] === alias ) {
					out = DOCS.info[ cmds[ i ][ 0 ] ];
				}
			}
			if ( !out ) {
				i = indexOf( repl._contextVars.length, repl._contextVars, 2, 0, alias ); // eslint-disable-line max-len
				if ( i >= 0 ) {
					out = DOCS.info[ alias ];
				}
			}
			if ( !out ) {
				out = alias2info( alias );
			}
			// TODO: add support for user-defined documentation
		}
		// If unable to resolve abbreviated help text, check if we were provided a reference to a REPL-specific command...
		if ( !out ) {
			for ( i = 0; i < cmds.length; i++ ) {
				if ( cmds[ i ][ 1 ] === alias ) {
					out = DOCS.info[ cmds[ i ][ 0 ] ];
				}
			}
		}
		// Check if we were provided a reference to a global context variable...
		if ( !out ) {
			// Address the fact that the `global` object is proxied (see https://github.com/nodejs/node/issues/855)
			if (
				alias !== null &&
				typeof alias === 'object' &&
				hasOwnProp( alias, 'global' ) &&
				alias.global === alias
			) {
				i = indexOf( repl._contextVars.length, repl._contextVars, 2, 1, repl._context.global ); // eslint-disable-line max-len
			} else {
				i = indexOf( repl._contextVars.length, repl._contextVars, 2, 1, alias ); // eslint-disable-line max-len
			}
			if ( i >= 0 ) {
				out = DOCS.info[ repl._contextVars[ i-1 ] ];
			}
		}
		// If provided an `alias` which is not a string or we failed to resolve an abbreviated help text based on the provided string value, we try to resolve a string alias (and subsequently a corresponding abbreviated help text) by searching the list of cached references of global variables/properties...
		if ( !out ) {
			i = indexOf( N/2, aliases, 2, 1, alias );
			if ( i >= 0 ) {
				out = alias2info( aliases[ i-1 ] );
			}
		}
		// TODO: add support for user-defined documentation

		// If we failed to resolve abbreviated help text and the provided value is an object, try finding a provided value's constructor (e.g., if provided a `Uint32Array`, try finding the documentation for `Uint32Array`)...
		if ( !out && typeof alias === 'object' && alias !== null && alias.constructor ) {
			i = indexOf( N/2, aliases, 2, 1, alias.constructor );
			if ( i >= 0 ) {
				out = alias2info( aliases[ i-1 ] );
			}
		}
		// If we failed to resolve abbreviated help text and the provided value is a function, try finding method abbreviated documentation...
		if ( !out && isFunction( alias ) ) {
			// Note: the following is an **expensive** look-up!!
			entry = findUniqueEntry( N/2, aliases, 2, 1, alias );
			if ( entry ) {
				out = alias2info( aliases[ entry[2]-1 ]+'.'+entry[ 1 ] );
			}
		}
		if ( out ) {
			repl._ostream.write( out+'\n' );
			return;
		}
		repl._ostream.write( 'Error: no abbreviated help available. Alias: `'+alias2string( alias )+'`.\n' );
	}
}


// EXPORTS //

module.exports = command;
