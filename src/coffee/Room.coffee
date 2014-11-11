Item = require 'Item'

class Room extends Item

	_ENTER_DESC: 'You have entered the room.'
	_EXIT_DESC: 'You have exited the room.'
	_LOOK_DESC: 'You are looking at the room.'

	constructor: () ->
		@Desc = new Description @
		@Desc.addPersepctive 'enter', @_ENTER_DESC
		@Desc.addPerspective 'exit', @_EXIT_DESC
		@Desc.addPerspective 'look', @_LOOK_DESC

	setDesc: ->


	onEnter: ->
		return @desc 'enter'

	onExit: ->
		return @desc 'exit'