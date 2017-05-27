'use strict'

const test = require('tape')
const isStream = require('is-stream')
const pick = require('lodash.pick')

const read = require('.')

const asciicast = {
	version: 1,
	width: 81,
	height: 20,
	duration: .6,
	command: 'bash',
	title: '',
	env: {
		TERM: 'xterm-256color',
		SHELL: '/bin/bash'
	},
	stdout: [
		[.01, 'H'],
		[.02, 'e'],
		[.03, 'l'],
		[.04, 'l'],
		[.05, 'l'],
		[.06, 'o'],
		[.07, ' '],
		[.11, 'W'],
		[.12, 'o'],
		[.13, 'r'],
		[.14, 'l'],
		[.15, 'd'],
		[.16, '!']
	]
}

test('readAsciicast', (t) => {
	t.plan(1 + 1 + 3)
	const s = read(asciicast)

	t.ok(isStream(s))
	s.once('meta', (meta) => {
		t.deepEqual(meta, pick(asciicast, [
			'version', 'width', 'height', 'duration', 'command', 'title', 'env'
		]))
	})
	s.once('data', (frame) => {
		t.deepEqual(frame.delay, .01)
		t.deepEqual(frame.time, .01)
		t.deepEqual(frame.data, 'H')
	})
})
