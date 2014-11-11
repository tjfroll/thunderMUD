# It all starts here, baby.
# 
class Main
	
	constructor: (parent, opts) ->
		@wrapper = parent.createElement 'div'
		@wrapper.id = 'full-wrapper'
		@Input = @_makeInput opts
		@Viewport = @_makeViewport opts

	_makeInput: (opts) ->
		new Input @wrapper, opts

	_makeViewport: (opts) ->
		new Viewport @wrapper, opts