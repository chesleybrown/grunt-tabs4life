'use strict';

// We disallowMultipleSpaces, except before line comments
/* BAD
var x = { omg:       'I\'m floating awaaaay...' };
*/

// We disallowMultipleVarDecl exceptUndefined
/* BAD
var
	x = 1,
	y = 2
;
var x, y = 2, z;
*/

// We disallowEmptyBlocks except for catch blocks
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

// We disallowMultipleLineStrings, instead it should be handled like the
// following
/* BAD
var x =
	"multi \
	line"
;
*/

// We disallowNewlineBeforeBlockStatements
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

// We disallowOperatorBeforeLineBreak ?", "||", "."
/* BAD
chainable.
	example().
	chained()
;
*/

/* BAD
b = c ?
	a :
	b
;
*/

// We disallowPaddingNewlinesInBlocks
/* BAD
if (true) {
	
	doSomething();
	
}
*/

// We disallowQuotedKeysInObjects
/* BAD
var x = {'a': 1};
*/

// We disallowSpacesInNamedFunctionExpression beforeOpeningRoundBrace
/* BAD
var x = function a (){};
*/

// We disallowSpacesInsideObjectBrackets
/* BAD
var x = { a: { b: 1 } };
*/

// We disallowSpacesInsideArrayBrackets
/* BAD
x = [ [ 1 ] ];
*/

// We disallowSpacesInsideParentheses
/* BAD
var x = ( 1 + 2 );
var x = foo( {} );
*/

// We disallowSpaceAfterObjectKeys
/* BAD
var x = {a : 1};
*/

// We disallowSpaceAfterPrefixUnaryOperators
/* BAD
x = ! a;
b = ++ c;
*/

// We disallowSpaceBeforeKeywords
/* BAD
if (true) {
	a = 1;
}else {
	b = 2;
}
*/

// We disallowSpaceBeforePostfixUnaryOperators
/* BAD
x = a ++;
b = c --;
*/

// We disallowSpacesInCallExpression
/* BAD
x = a ();
*/

// We disallowSpacesInFunctionDeclaration beforeOpeningRoundBrace
// We disallowSpacesInNamedFunctionExpression beforeOpeningRoundBrace
// We requireSpacesInFunctionDeclaration beforeOpeningCurlyBrace
// We requireSpacesInNamedFunctionExpression beforeOpeningCurlyBrace
/* BAD
function a (){}
*/

// We disallowTrailingWhitespace ignoreEmptyLines

// We disallowTrailingComma
/* BAD
x = [
	'first',
	'second',
];
*/

// We disallowYodaConditions
/* BAD
if (1 == a) {
	return;
}
*/

// We requireBlocksOnNewline
/* BAD
if (true) {a();}
*/

// We requireCamelCaseOrUpperCaseIdentifiers ignoreProperties
/* BAD
var lower_case = 1;
var Mixed_case = 2;
var mixed_Case = 3;
*/

// We requireCapitalizedConstructors
/* BAD
var b = function ();
c = new b();
*/

// We requireCurlyBraces
/* BAD
if (true) b++;
*/

// We requireSpaceAfterKeywords
/* BAD
if(true) {
	b++;
}
*/

// We requireSpaceAfterLineComment

// We requireCommaBeforeLineBreak
/* BAD
b = {
	one: 1
	, two: 2
};
*/

// We requireKeywordsOnNewLine
/* BAD
if (c) {
	b++;
} else {
	b--;
}
*/

// We requireLineBreakAfterVariableAssignment
/* BAD
var a = 8; var b = 5;
*/

// We requireParenthesesAroundIIFE
/* BAD
b = function () {
	return 1;
}();
*/

// We requireSpaceBeforeBinaryOperators
/* BAD
b!== c;
*/

// We requireSpaceBeforeBlockStatements
/* BAD
if (true){
	a();
}
else{
	b = c;
}
*/

/* We requireSpaceBeforeObjectValues
b = {
	key:'value'
};
*/

// We requireSpaceBetweenArguments
/* BAD
a(b,c);
*/

// We requireSpacesInConditionalExpression
/* BAD
a = b? c :d;
*/

// We requireSpacesInAnonymousFunctionExpression
/* BAD
a = function(){};
*/

// We requireSpacesInForStatement
/* BAD
for (var i = 0;i < b;i++) {
	b++;
}
*/

// We requireSpaceAfterBinaryOperators
/* BAD
d = b +c;
*/

// We safeContextKeyword self or ctrl
/* BAD
a = function () {
	var that = this;
	that.example();
};
*/

// We validateLineBreaks LF

// We validateIndentation \t and includeEmptyLines
/* BAD
if (true) {
	b = c;

	c = b;
}
*/

// We validateParameterSeparator ', '
/* BAD
function a(b , c) {
	b = c;
}
a();
*/

// We validateQuoteMarks
/* BAD
b = "string with \"single\" quotes only";
*/

// We requireLineFeedAtFileEnd
