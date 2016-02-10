'use strict';

// comments can begin with an lowercase
// Or an uppercase letter

// We disallowMultipleSpaces, except before line comments
var look = 'at all the silly spaces';        // before this comment

// We disallowMultipleVarDecl exceptUndefined
var a, b, c, d;
var x = 'example';
var y = 'another';

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
finally {
	b = d;
}

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

// We disallowNewlineBeforeBlockStatements
function good() {
	var obj = {
		val: true
	};
	
	return {
		data: obj
	};
}

// Just going to call this example so jshint doesn't complain
good();

// We disallowOperatorBeforeLineBreak ?", "||", "."
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

b = c
	? a
	: b
;

switch (b) {
	case 'one':
		break;
	case 'two':
		break;
}

// We disallowPaddingNewlinesInBlocks
if (true) {
	a();
}

// We disallowQuotedKeysInObjects
x = {
	a: 'example'
};

// We disallowSpacesInNamedFunctionExpression beforeOpeningRoundBrace
x = function d() {
	a();
};

// We disallowSpacesInsideObjectBrackets
x = {
	a: {
		b: 1
	}
};

// We disallowSpacesInsideArrayBrackets
x = [[1]];

// We disallowSpacesInsideParentheses
x = (1 + 2) * 3;

// We disallowSpaceAfterObjectKeys
x = {a: 1};

// We disallowSpaceAfterPrefixUnaryOperators
x = !a;
b = ++c;

// We disallowSpaceBeforeKeywords
if (true) {
	a = 1;
}
else {
	b = 2;
}
if (true && typeof 'str' === 'string') {
	a = 1;
}

// We disallowSpaceBeforePostfixUnaryOperators
x = a++;
b = c--;

// We disallowSpacesInCallExpression
x = a();

// We disallowSpacesInFunctionDeclaration beforeOpeningRoundBrace
// We disallowSpacesInNamedFunctionExpression beforeOpeningRoundBrace
// We requireSpacesInFunctionDeclaration beforeOpeningCurlyBrace
// We requireSpacesInNamedFunctionExpression beforeOpeningCurlyBrace
function a() {}
a();

// We disallowTrailingWhitespace ignoreEmptyLines

// We disallowTrailingComma
x = [
	'first',
	'second'
];

// We disallowYodaConditions
if (a == 1) {
	return;
}

// We requireBlocksOnNewline
if (true) {
	a();
}

// We requireCamelCaseOrUpperCaseIdentifiers ignoreProperties
var camelCase = 0;
var CamelCase = 1;
var _camelCase = 2;
var camelCase_ = 3;
var UPPER_CASE = 4;
var obj = {
	some_id: 100
};

// Use vars so jshint doesn't complain
camelCase = CamelCase = _camelCase = camelCase_ = UPPER_CASE = obj;

// We requireCapitalizedConstructors
var B = function () {};
c = new B();

// We requireCurlyBraces
if (true) {
	b++;
}

// We requireSpaceAfterKeywords
if (true) {
	b++;
}

// We requireSpaceAfterLineComment

// We requireCommaBeforeLineBreak
b = {
	one: 1,
	two: 2
};

// We requireKeywordsOnNewLine
if (c) {
	b++;
}
else {
	b--;
}

// We requireLineBreakAfterVariableAssignment
var a = 8;
var b = 5;

// We requireParenthesesAroundIIFE
b = (function () {
	return 1;
})();

// We requireSpaceBeforeBinaryOperators
b !== c;

// We requireSpaceBeforeBlockStatements
if (true) {
	a();
}
else {
	b = c;
}

// We requireSpaceBeforeObjectValues
b = {
	key: 'value'
};

// We requireSpaceBetweenArguments
a(b, c);

// We requireSpacesInConditionalExpression
a = b ? c : d;

// We requireSpacesInAnonymousFunctionExpression
a = function () {};

// We requireSpacesInForStatement
for (var i = 0; i < b; i++) {
	b++;
}

// We requireSpaceAfterBinaryOperators
d = b + c;

// We safeContextKeyword self or ctrl
a = function () {
	var self = this;
	self.example();
};
a = function () {
	var ctrl = this;
	ctrl.example();
};

// We validateLineBreaks LF

// We validateIndentation \t and includeEmptyLines
if (true) {
	b = c;
	
	c = b;
}

// We validateParameterSeparator ', '
function a(b, c) {
	b = c;
}
a();

// We validateQuoteMarks
b = 'string with "single" quotes only';

// We requireLineFeedAtFileEnd
