/** Array.js */
Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(a){if(null==this)throw new TypeError('"this" is null or not defined');var b=Object(this),c=b.length>>>0;if("function"!=typeof a)throw new TypeError("predicate must be a function");for(var d=arguments[1],e=0;e<c;){var f=b[e];if(a.call(d,f,e,b))return f;e++}}});
