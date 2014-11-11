class Room extends Item

	_ENTER_DESC: 'You have entered the room.'
	_EXIT_DESC: 'You have exited the room.'
	_LOOK_DESC: 'You are looking at the room.'

	Desc: {}

	constructor: () ->
		@desc = new Description @
		@desc.addType 'enter', @_ENTER_DESC
		@desc.addType 'exit', @_EXIT_DESC
		@desc.addtype 'look', @_LOOK_DESC

	onEnter: ->
		return @desc 'enter'

	onExit: ->
		return @desc 'exit'