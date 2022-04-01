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

```javascript
import arraybuffer2buffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-arraybuffer@deno/mod.js';
```

#### arraybuffer2buffer( buf\[, byteOffset\[, length]] )

Allocates a [buffer][@stdlib/buffer/ctor] from an [`ArrayBuffer`][@stdlib/array/buffer].

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@deno/mod.js';
var ab = new ArrayBuffer( 10 );

var buf = arraybuffer2buffer( ab );
// returns <Buffer>
```

By default, the function allocates a [buffer][@stdlib/buffer/ctor] starting from the first byte of the provided [`ArrayBuffer`][@stdlib/array/buffer]. To specify an alternative starting index, provide a `byteOffset`.

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@deno/mod.js';
var ab = new ArrayBuffer( 10 );

var buf = arraybuffer2buffer( ab, 2 );
// returns <Buffer>

var len = buf.length;
// returns 8
```

By default, the function allocates a [buffer][@stdlib/buffer/ctor] until the end of the provided [`ArrayBuffer`][@stdlib/array/buffer]. To allocate a specified number of [`ArrayBuffer`][@stdlib/array/buffer] bytes, provide a `length`.

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@deno/mod.js';
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

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@deno/mod.js';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import IS_LITTLE_ENDIAN from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@deno/mod.js';
import arraybuffer2buffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-arraybuffer@deno/mod.js';

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

-   <span class="package-name">[`@stdlib/buffer/ctor`][@stdlib/buffer/ctor]</span><span class="delimiter">: </span><span class="description">Buffer.</span>
-   <span class="package-name">[`@stdlib/buffer/from-array`][@stdlib/buffer/from-array]</span><span class="delimiter">: </span><span class="description">allocate a buffer using an octet array.</span>
-   <span class="package-name">[`@stdlib/buffer/from-buffer`][@stdlib/buffer/from-buffer]</span><span class="delimiter">: </span><span class="description">copy buffer data to a new Buffer instance.</span>
-   <span class="package-name">[`@stdlib/buffer/from-string`][@stdlib/buffer/from-string]</span><span class="delimiter">: </span><span class="description">allocate a buffer containing a provided string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/buffer-from-arraybuffer/tree/deno
[umd-url]: https://github.com/stdlib-js/buffer-from-arraybuffer/tree/umd
[esm-url]: https://github.com/stdlib-js/buffer-from-arraybuffer/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/buffer-from-arraybuffer/main/LICENSE

[@stdlib/array/buffer]: https://github.com/stdlib-js/array-buffer/tree/deno

<!-- <related-links> -->

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer-ctor/tree/deno

[@stdlib/buffer/from-array]: https://github.com/stdlib-js/buffer-from-array/tree/deno

[@stdlib/buffer/from-buffer]: https://github.com/stdlib-js/buffer-from-buffer/tree/deno

[@stdlib/buffer/from-string]: https://github.com/stdlib-js/buffer-from-string/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
