# Responsible for controlling large, non-gameplay related UI changes.
# Will support player customization of interface.
# Broad interface control methods can be implemented here.
class Component

  $: ->
    $(@node)

  defaults: ->
    @node = {}
    @type = 'div'
    @parent = document.body

  constructor: (@parent, opts) ->
    @parseOpts opts
    @node = document.createElement @type ;
    @applySettings()
    @parent.appendChild @node ;

  append: (opts) ->
    new Component @node, opts
    
  parseOpts: (opts) ->
    if opts.type
      @type = opts.type
    if opts.id
      @id = opts.id;
    if opts.classes
      @classes = opts.classes;
    if opts.name
      @name = opts.name;
    if opts.html
      @html = opts.html
    if opts.placeholder
      @placeholder = opts.placeholder

  applySettings: ->
    if @id
      @node.id = @id;
    if @classes
      el.className = @classes;
    if @name
      el.name = @name;
    if @html
      el.innerHTML = @html
    if @placeholder
      @node.setAttribute('placeholder', @placeholder)

module.exports = Component