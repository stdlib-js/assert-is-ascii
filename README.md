<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# isASCII

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether a character belongs to the [ASCII][ascii] character set and whether this is true for all characters in a provided string.



<section class="usage">

## Usage

To use in Observable,

```javascript
isASCII = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ascii@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var isASCII = require( 'path/to/vendor/umd/assert-is-ascii/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ascii@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.isASCII;
})();
</script>
```

#### isASCII( value )

Tests whether a character belongs to the [ASCII][ascii] character set and whether this is true for all characters in a provided string.

```javascript
var bool = isASCII( 'beep' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For non-string values, the function returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ascii@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var out = isASCII( 'beep' );
// returns true

out = isASCII( '' );
// returns false

out = isASCII( 'È' );
// returns false

out = isASCII( 123 );
// returns false

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-string`][@stdlib/assert/is-string]</span><span class="delimiter">: </span><span class="description">test if a value is a string.</span>

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-ascii.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-ascii

[test-image]: https://github.com/stdlib-js/assert-is-ascii/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-ascii/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-ascii/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-ascii?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-ascii.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-ascii/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/assert-is-ascii#cli
[cli-url]: https://github.com/stdlib-js/assert-is-ascii/tree/cli
[@stdlib/assert-is-ascii]: https://github.com/stdlib-js/assert-is-ascii/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-ascii/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-ascii/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-ascii/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-ascii/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-ascii/main/LICENSE

[ascii]: https://en.wikipedia.org/wiki/ASCII

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/assert/is-string]: https://github.com/stdlib-js/assert-is-string/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
