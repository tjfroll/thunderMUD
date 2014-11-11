
class Inventory

	list: []

	add: (item) ->
		@list.push item

	remove: (item) ->
		if @list[item]
			@list.delete item

	view: (viewer) ->
		if @isViewable viewer
			return @list

class Player

	Description: {}

class Item

	Location: {}

	Description: {}

	constructor: (parent, opts) ->
		parent.addItem

class Equipment extends Item

class Room extends Item

	_ENTER_DESC: 'You have entered the room.'
	_EXIT_DESC: 'You have exited the room.'
	_LOOK_DESC: 'You are looking at the room.'

	defaults:
		desc: {}

	constructor: () ->
		@desc = new Description @
		@desc.addType 'enter', @_ENTER_DESC
		@desc.addType 'exit', @_EXIT_DESC
		@desc.addtype 'look', @_LOOK_DESC

	desc: (action) ->
		if @

	onEnter: ->
		return @desc 'enter'

	onExit: ->
		return @desc 'exit'


class Description extends Perspective

	defaults:
		types: []

	constructor: (attachment) ->
		@

	addType: (type, desc) ->
		@types[type] = desc

	getType: (type) ->
		@types[type]
