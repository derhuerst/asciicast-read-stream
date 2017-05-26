'use strict'

const read = require('.')
const asciicast = require('./example.json')

read(asciicast)
.on('data', console.log)
.on('error', (err) => {
	console.error(err)
	process.exit(1)
})
