# [@fav/text.pascal-case][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Converts a string into pascal case.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/text.pascal-case
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but even old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/text.pascal-case/` directory manually.*


## Usage

For Node.js:

```js
var pascalCase = require('@fav/text.pascal-case');
pascalCase('foo bar baz');  // => 'FooBarBaz'
pascalCase('--foo-bar-baz--');  // => 'FooBarBaz'
pascalCase('fooBarBaz');  // => 'FooBarBaz'
```

For Web browsers:

```html
<script src="fav.text.pascal-case.min.js"></script>
<script>
var pascalCase = fav.text.pascalCase;
pascalCase('foo bar baz');  // => 'FooBarBaz'
pascalCase('--foo-bar-baz--');  // => 'FooBarBaz'
pascalCase('FooBarBaz');  // => 'FooBarBaz'
</script>
```


## API

### <u>pascalCase(text) : string</u>

Converts a string into pascal case.

This function trys to split *text* into words with non-alphanumeric characters first. If *text* does not contains non-alphanumeric character, this function trys to split *text* into words before capital letters.

After splitting into words, this function joins them and creates a pascal case string.

If *text* is a string which is composed of either lower case characters and numerics only (e.g. `abc123`), or upper case characters and numerics only (e.g. `ABC123`), this function regards *text* as one word.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

#### Parameters:

| Parameter |  Type  | Description                          |
|:----------|:------:|:-------------------------------------|
| *text*    | string | A string to be converted.            |

#### Returns:

A string converted into pascal case.

**Type:** string


#### <u>pascalCase.split(text) : Array</u>

Splits a string into alphanumeric words.

This function trys to split *text* into words with non-alphanumeric characters first. If *text* does not contains non-alphanumeric character, this function trys to split *text* into words before capital letters.

If *text* is a string which is composed of either lower case characters and numerics only (e.g. `abc123`), or upper case characters and numerics only (e.g. `ABC123`), this function regards *text* as one word.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

##### Parameters:

| Parameter |  Type  | Description                          |
|:----------|:------:|:-------------------------------------|
| *text*    | string | A string to be splitted.             |

##### Returns:

An array of splitted words.

**Type:** Array


#### <u>pascalCase.join(words) : string</u>

Joins alphanumeric words and creates a pascal case string.

***NOTE:*** *This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.*

##### Parameters:

| Parameter |  Type  | Description                                     |
|:----------|:------:|:------------------------------------------------|
| *words*   | Array  | An array of an alphanumeric words to be joined. |

##### Returns:

A pascal case string.

**Type:** string


## Checked                                                                      

### Node.js (4〜)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2018 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-text.pascal-case/
[npm-img]: https://img.shields.io/badge/npm-v1.0.2-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/text.pascal-case
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-text.pascal-case.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-text.pascal-case
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-text.pascal-case?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-text-pascal-case
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-text.pascal-case/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-text.pascal-case?branch=master
