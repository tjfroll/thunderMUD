class Inventory

	list: []

	constructor: (parent, opts) ->
		

	add: (item) ->
		@list.push item

	remove: (item) ->
		if @list[item]
			@list.delete item

	view: (viewer) ->
		return @list