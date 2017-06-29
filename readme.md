# asciicast-read-stream

[![Greenkeeper badge](https://badges.greenkeeper.io/derhuerst/asciicast-read-stream.svg)](https://greenkeeper.io/)

**Read an [Asciicast](https://asciinema.org) as a stream of frames.**

[![npm version](https://img.shields.io/npm/v/asciicast-read-stream.svg)](https://www.npmjs.com/package/asciicast-read-stream)
[![build status](https://img.shields.io/travis/derhuerst/asciicast-read-stream.svg)](https://travis-ci.org/derhuerst/asciicast-read-stream)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/asciicast-read-stream.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install asciicast-read-stream
```


## Usage

```js
const read = require('.')

read(someAsciicast)
.on('meta', console.log)
.on('data', console.log)
.on('error', console.error)
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/asciicast-read-stream/issues).
