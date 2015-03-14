'use strict';

// All comments must begin with a capital (requireCapitalizedComments)

// We disallowMultipleVarDecl exceptUndefined
var a, b, c, d;
var x = 'example';
var y = 'another';
/* BAD
var
	x = 1,
	y = 2
;
var x, y = 2, z;
*/

// Just going to call this example so jshint doesn't complain
a();

// We disallowEmptyBlocks except for catch blocks
if (a == b) {
	c = d;
}
try {
	a = b;
}
catch (err) {
	
}
/* BAD
if (a == b) {
	
}
else {
	c = d;
}
*/

// We disallowKeyword with

// We disallowMixedSpacesAndTabs

// We disallowMultipleLineBreaks

/*
 * We disallowMultipleLineStrings, instead it should be handled like the
 * following
 */
x =
	'multi' +
	'line'
;
y = 'single line';
/* BAD
var x =
	"multi \
	line"
;
*/

// We disallowNewlineBeforeBlockStatements
function good() {
	var obj = {
		val: true
	};
	
	return {
		data: obj
	};
}
/* BAD
function good() {
	
	var obj = {
		val: true
	};
	
	return {
		data: obj
	};
	
}
*/

// Just going to call this example so jshint doesn't complain
good();

// We disallowOperatorBeforeLineBreak
var chainable = {
	example: function () {
		return {
			chained: function () {
				
			}
		};
	}
};
chainable
	.example()
	.chained()
;
/* BAD
chainable.
	example().
	chained()
;
*/

// We disallowPaddingNewlinesInBlocks
if (true) {
	a();
}
/* BAD
if (true) {
	
	doSomething();
	
}
*/

// We disallowQuotedKeysInObjects
x = {
	a: 'example'
};
/* BAD
var x = {'a': 1};
*/

// We disallowSpacesInNamedFunctionExpression beforeOpeningRoundBrace
x = function d() {
	a();
};
/* BAD
var x = function a (){};
*/

// We disallowSpacesInsideObjectBrackets
x = {
	a: {
		b: 1
	}
};
/* BAD
var x = { a: { b: 1 } };
*/

// We disallowSpacesInsideArrayBrackets
x = [[1]];

// We disallowSpacesInsideParentheses
x = (1 + 2) * 3;
/* BAD
var x = ( 1 + 2 );
var x = foo( {} );
*/

// We disallowSpaceAfterPrefixUnaryOperators
x = !a;
b = ++c;
/* BAD
x = ! a;
b = ++ c;
*/

// We disallowSpaceBeforeKeywords
if (true) {
	a = 1;
}
else {
	b = 2;
}
/* BAD
if (true) {
	a = 1;
}else {
	b = 2;
}
*/

// We disallowSpaceBeforePostfixUnaryOperators
x = a++;
b = c--;
/* BAD
x = a ++;
b = c --;
*/

// We disallowSpacesInCallExpression
x = a();
/* BAD
x = a ();
*/

// We disallowSpacesInFunctionDeclaration beforeOpeningRoundBrace
// We disallowSpacesInNamedFunctionExpression beforeOpeningRoundBrace
// We requireSpacesInFunctionDeclaration beforeOpeningCurlyBrace
// We requireSpacesInNamedFunctionExpression beforeOpeningCurlyBrace
function a() {}
a();
/* BAD
function a (){}
*/

// We disallowTrailingWhitespace ignoreEmptyLines

// We disallowTrailingComma
x = [
	'first',
	'second'
];
/* BAD
x = [
	'first',
	'second',
];
*/

// We disallowYodaConditions
if (a == 1) {
	return;
}
/* BAD
if (1 == a) {
	return;
}
*/

// We requireBlocksOnNewline
if (true) {
	a();
}
/* BAD
if (true) {a();}
*/

// We requireCamelCaseOrUpperCaseIdentifiers
var camelCase = 0;
var CamelCase = 1;
var _camelCase = 2;
var camelCase_ = 3;
var UPPER_CASE = 4;
/* BAD
var lower_case = 1;
var Mixed_case = 2;
var mixed_Case = 3;
*/

// Use vars so jshint doesn't complain
camelCase = CamelCase = _camelCase = camelCase_ = UPPER_CASE;

// We requireCapitalizedConstructors
var B = function () {};
c = new B();
/* BAD
var b = function ();
c = new b();
*/

// We requireCurlyBraces
if (true) {
	b++;
}
/* BAD
if (true) b++;
*/

// We requireSpaceAfterKeywords
if (true) {
	b++;
}
/* BAD
if(true) {
	b++;
}
*/

// We requireSpaceAfterLineComment

// We requireCommaBeforeLineBreak
b = {
	one: 1,
	two: 2
};
/* BAD
b = {
	one: 1
	, two: 2
};
*/

// We requireKeywordsOnNewLine
if (c) {
	b++;
}
else {
	b--;
}
/* BAD
if (c) {
	b++;
} else {
	b--;
}
*/

// We requireLineBreakAfterVariableAssignment
var a = 8;
var b = 5;
/* BAD
var a = 8; var b = 5;
*/

// We requirePaddingNewLinesInObjects
a = {
	a: 1
};
/* BAD
a = { a: 1 };
*/

// We requireParenthesesAroundIIFE
b = (function () {
	return 1;
})();
/* BAD
b = function () {
	return 1;
}();
*/

// We requireSpaceBeforeBinaryOperators
b !== c;
/* BAD
b!== c;
*/

// We requireSpaceBeforeBlockStatements
if (true) {
	a();
}
else {
	b = c;
}
/* BAD
if (true){
	a();
}
else{
	b = c;
}
*/

// We requireSpaceBetweenArguments
a(b, c);
/* BAD
a(b,c);
*/

// We requireSpacesInConditionalExpression
a = b ? c : d;
/* BAD
a = b? c :d;
*/

// We requireSpacesInAnonymousFunctionExpression
a = function () {};
/* BAD
a = function(){};
*/

// We requireSpacesInForStatement
for (var i = 0; i < b; i++) {
	b++;
}
/* BAD
for (var i = 0;i < b;i++) {
	b++;
}
*/

// We requireSpaceAfterBinaryOperators
d = b + c;
/* BAD
d = b +c;
*/

// We safeContextKeyword self
a = function () {
	var self = this;
	self.example();
};
/* BAD
a = function () {
	var that = this;
	that.example();
};
*/

// We validateLineBreaks LF

// We validateIndentation \t and includeEmptyLines
if (true) {
	b = c;
	
	c = b;
}
/* BAD
if (true) {
	b = c;

	c = b;
}
*/

// We validateParameterSeparator ', '
function a(b, c) {
	b = c;
}
a();
/* BAD
function a(b , c) {
	b = c;
}
a();
*/

// We validateQuoteMarks
b = 'string with "single" quotes only';
/* BAD
b = "string with \"single\" quotes only";
*/

// We requireLineFeedAtFileEnd
