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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# arraybuffer2buffer

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Allocate a [buffer][@stdlib/buffer/ctor] from an [ArrayBuffer][@stdlib/array/buffer].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
arraybuffer2buffer = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-arraybuffer@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var arraybuffer2buffer = require( 'path/to/vendor/umd/buffer-from-arraybuffer/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-arraybuffer@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.arraybuffer2buffer;
})();
</script>
```

#### arraybuffer2buffer( buf\[, byteOffset\[, length]] )

Allocates a [buffer][@stdlib/buffer/ctor] from an [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
var ArrayBuffer = require( '@stdlib/array-buffer' );
var ab = new ArrayBuffer( 10 );

var buf = arraybuffer2buffer( ab );
// returns <Buffer>
```

By default, the function allocates a [buffer][@stdlib/buffer/ctor] starting from the first byte of the provided [`ArrayBuffer`][@stdlib/array/buffer]. To specify an alternative starting index, provide a `byteOffset`.

```javascript
var ArrayBuffer = require( '@stdlib/array-buffer' );
var ab = new ArrayBuffer( 10 );

var buf = arraybuffer2buffer( ab, 2 );
// returns <Buffer>

var len = buf.length;
// returns 8
```

By default, the function allocates a [buffer][@stdlib/buffer/ctor] until the end of the provided [`ArrayBuffer`][@stdlib/array/buffer]. To allocate a specified number of [`ArrayBuffer`][@stdlib/array/buffer] bytes, provide a `length`.

```javascript
var ArrayBuffer = require( '@stdlib/array-buffer' );
var ab = new ArrayBuffer( 10 );

var buf = arraybuffer2buffer( ab, 2, 4 );
// returns <Buffer>

var len = buf.length;
// returns 4
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

The behavior of this function varies across Node.js versions due to changes in the underlying Node.js APIs:

-   `<3.0.0`: the function copies [`ArrayBuffer`][@stdlib/array/buffer] bytes to a new [`Buffer`][@stdlib/buffer/ctor] instance.
-   `>=3.0.0` and `<5.10.0`: if provided a `byteOffset`, the function copies [`ArrayBuffer`][@stdlib/array/buffer] bytes to a new [`Buffer`][@stdlib/buffer/ctor] instance; otherwise, the function returns a view of an [`ArrayBuffer`][@stdlib/array/buffer] without copying the underlying memory.
-   `<6.0.0`: if provided an empty [`ArrayBuffer`][@stdlib/array/buffer], the function returns an empty [`Buffer`][@stdlib/buffer/ctor] which is **not** an [`ArrayBuffer`][@stdlib/array/buffer] view.
-   `>=6.0.0`: the function returns a view of an [`ArrayBuffer`][@stdlib/array/buffer] without copying the underlying memory.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-arraybuffer@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var high;
var view;
var low;
var buf;
var ab;
var i;

// Allocate an ArrayBuffer:
ab = new ArrayBuffer( 64 );

// Create a Float64 view and set random values:
view = new Float64Array( ab );
for ( i = 0; i < view.length; i++ ) {
    view[ i ] = randu();
}

// Create a new buffer from the ArrayBuffer:
buf = arraybuffer2buffer( ab );

// Read the high and low words for each double:
for ( i = 0; i < view.length; i++ ) {
    if ( IS_LITTLE_ENDIAN ) {
        high = buf.readUInt32LE( (8*i)+4 );
        low = buf.readUInt32LE( 8*i );
    } else {
        high = buf.readUInt32BE( 8*i );
        low = buf.readUInt32BE( (8*i)+4 );
    }
    console.log( 'Value: %d. High: %d. Low: %d.', view[ i ], high, low );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/buffer-ctor`][@stdlib/buffer/ctor]</span><span class="delimiter">: </span><span class="description">Buffer.</span>
-   <span class="package-name">[`@stdlib/buffer-from-array`][@stdlib/buffer/from-array]</span><span class="delimiter">: </span><span class="description">allocate a buffer using an octet array.</span>
-   <span class="package-name">[`@stdlib/buffer-from-buffer`][@stdlib/buffer/from-buffer]</span><span class="delimiter">: </span><span class="description">copy buffer data to a new Buffer instance.</span>
-   <span class="package-name">[`@stdlib/buffer-from-string`][@stdlib/buffer/from-string]</span><span class="delimiter">: </span><span class="description">allocate a buffer containing a provided string.</span>

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/buffer-from-arraybuffer.svg
[npm-url]: https://npmjs.org/package/@stdlib/buffer-from-arraybuffer

[test-image]: https://github.com/stdlib-js/buffer-from-arraybuffer/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/buffer-from-arraybuffer/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/buffer-from-arraybuffer/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/buffer-from-arraybuffer?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/buffer-from-arraybuffer.svg
[dependencies-url]: https://david-dm.org/stdlib-js/buffer-from-arraybuffer/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/buffer-from-arraybuffer/tree/deno
[deno-readme]: https://github.com/stdlib-js/buffer-from-arraybuffer/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/buffer-from-arraybuffer/tree/umd
[umd-readme]: https://github.com/stdlib-js/buffer-from-arraybuffer/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/buffer-from-arraybuffer/tree/esm
[esm-readme]: https://github.com/stdlib-js/buffer-from-arraybuffer/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/buffer-from-arraybuffer/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/buffer-from-arraybuffer/main/LICENSE

[@stdlib/array/buffer]: https://github.com/stdlib-js/array-buffer/tree/umd

<!-- <related-links> -->

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer-ctor/tree/umd

[@stdlib/buffer/from-array]: https://github.com/stdlib-js/buffer-from-array/tree/umd

[@stdlib/buffer/from-buffer]: https://github.com/stdlib-js/buffer-from-buffer/tree/umd

[@stdlib/buffer/from-string]: https://github.com/stdlib-js/buffer-from-string/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
