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

'use strict';

// MAIN //

/**
* Returns a regular expression to match a relative require/import literal.
*
* @private
* @returns {RegExp} regular expression
*/
function createRegExp() {
	/*
	* Regular expression to match a relative require/import literal.
	*
	* ## Examples
	*
	* -   `'..'`
	* -   `'../'`
	* -   `'.'`
	* -   `'./'`
	* -   `'/'`
	* -   `'C:\'`
	* -   `'c:/'`
	*
	* Regular expression: `/^(?:\.\.?(?:[\\\/]|$)|\/|(?:[A-Za-z]:)?[\\\/])/`
	*
	* -   `^`
	*     -   match anything which begins with
	*
	* -   `(?:`
	*     -   begin capture but do not remember (1)
	*
	* -   `\.\.?`
	*     -   match a `.` literal possibly followed by another `.` literal
	*
	* -   `(?:[\\\/]|$)`
	*     -   capture but do not remember a `\\` or `/` literal OR end of string (2)
	*
	* -   `|`
	*     -   OR
	*
	* -   `\/`
	*     -   match a `/` literal
	*
	* -   `|`
	*     -   OR
	*
	* -   `(?:`
	*     -   begin capture but do not remember (3)
	*
	* -   `[A-Za-z]:`
	*     -   a drive letter followed by a `:` literal
	*
	* -   `)`
	*     -   end of capture (3)
	*
	* -   `?`
	*     -   match 0 or 1 time
	*
	* -   `[\\/\]`
	*     -   match a `\\` or `/` literal
	*
	* -   `)`
	*     -   end of capture (1)
	*/
	return /^(?:\.\.?(?:[\\/]|$)|\/|(?:[A-Za-z]:)?[\\/])/;
}


// EXPORTS //

module.exports = createRegExp;
