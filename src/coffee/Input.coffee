UI = require 'UI'

class Input extends UI

	constructor: (parent, opts) ->
		@input = parent.getElementById 'primary-input'

	_makeListeners: ->
		@input.on 'keyPress', 'enter', => @parseInput()


	parseInput: ->
		@execute @input.val()

	execute: (command) ->
		@input