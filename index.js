'use strict'

const from = require('from2')
const pick = require('lodash.pick')

const readAsciicast = (asciicast) => {
	let frameI = 0, time = 0, metaSent = false
	const frames = asciicast.stdout.length

	const out = from({objectMode: true}, (size, cb) => {
		if (!metaSent) {
			metaSent = true
			out.emit('meta', pick(asciicast, [
				'version', 'width', 'height', 'duration', 'command', 'title', 'env'
			]))
		}

		if (frameI >= frames) return cb(null, null)
		const data = asciicast.stdout[frameI]
		if (!data) return cb(new Error('missing frame at ' + frameI))
		frameI++

		time += data[0]
		cb(null, {delay: data[0], time, data: data[1]})
	})
	return out
}

module.exports = readAsciicast
