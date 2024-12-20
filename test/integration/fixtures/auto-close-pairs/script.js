#!/usr/bin/env node

/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var parse = require( 'acorn-loose' ).parse;
var writeFile = require( '@stdlib/fs/write-file' ).sync;


// VARIABLES //

var AOPTS = {
	'ecmaVersion': 'latest'
};
var FOPTS = {
	'encoding': 'utf8'
};


// MAIN //

/**
* Main execution sequence.
*
* @private
*/
function main() {
	var str;
	var ast;
	var out;

	str = 'x = /[/;';
	ast = parse( str, AOPTS );

	out = {
		'expression': str,
		'cursor': str.length-3,
		'ast': ast
	};
	writeFile( resolve( __dirname, 'positive', 'regexp_literal_left_bracket.json' ), JSON.stringify( out, null, '  ' )+'\n', FOPTS );
}

main();
