Component = require './Component'

class Main

  @viewBox = {}
  @view = {}
  @room = {}
  @roomText = {}
  @inventory = {}
  @inventoryText = {}
  @feedback = {}
  @feedbackText = {}

  @socket = {}
  @input = {}
  @inputBox = {}

  constructor: (parent, opts) ->
    @createInterface()
    @addEventListener()
    @startServer()

  startServer: ->
    @socket = io();
    @socket.on 'chat message', (msg) =>
      @feedbackText.append
        type: 'p'
        html: msg
      @feedback.node.scrollTop = @feedback.node.scrollHeight

  createInterface: ->
    @viewBox = new Component document.body,
      id: 'view-container'
    @view = @viewBox.append
      id: 'view'
    @room = @view.append
      classes: 'view-box'
      id: 'room'
    @roomText = @room.append
      classes: 'text-view'
    @inventory = @view.append
      classes: 'view-box'
      id: 'inventory'
    @inventoryText = @inventory.append
      classes: 'text-view'
    @feedback = @view.append
      classes: 'view-box'
      id: 'feedback'
    @feedbackText = @feedback.append
      classes: 'text-view'
    @inputBox = new Component document.body,
      id: 'input-container'
    @input = @inputBox.append
      id: 'text-input'
      element: 'textarea'
      placeholder: 'Type commands here - enter to submit - shift + enter for newline'

  addEnterListener: ->
    active = false

    window.onkeydown = (event) ->
      if not active
        active = true
        key = event.keyCode || event.which
        if key is 13  and not event.shiftKey
          val = @input.node.value
          @socket.emit('chat message', val)
          @input.node.value = ''
          event.preventDefault()
          return false

    window.onkeyup = (event) ->
      active = false

module.exports = Main