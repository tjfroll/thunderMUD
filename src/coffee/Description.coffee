class Description

	constructor: (@parent, opts) ->
		

	text: ->
		return @text

	addType: (type, desc) ->
		@types[type] = desc

	getType: (type) ->
		@types[type]