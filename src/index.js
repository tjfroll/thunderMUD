(function() {
  var Component, exports;

  Component = (function() {
    Component.prototype.$ = function() {
      return $(this.node);
    };

    Component.prototype.defaults = function() {
      this.node = {};
      this.type = 'div';
      return this.parent = document.body;
    };

    function Component(parent, opts) {
      this.parent = parent;
      this.parseOpts(opts);
      this.node = document.createElement(this.type);
      this.applySettings();
      this.parent.appendChild(this.node);
    }

    Component.prototype.append = function(opts) {
      return new Component(this.node, opts);
    };

    Component.prototype.parseOpts = function(opts) {
      if (opts.type) {
        this.type = opts.type;
      }
      if (opts.id) {
        this.id = opts.id;
      }
      if (opts.classes) {
        this.classes = opts.classes;
      }
      if (opts.name) {
        this.name = opts.name;
      }
      if (opts.html) {
        this.html = opts.html;
      }
      if (opts.placeholder) {
        return this.placeholder = opts.placeholder;
      }
    };

    Component.prototype.applySettings = function() {
      if (this.id) {
        this.node.id = this.id;
      }
      if (this.classes) {
        el.className = this.classes;
      }
      if (this.name) {
        el.name = this.name;
      }
      if (this.html) {
        el.innerHTML = this.html;
      }
      if (this.placeholder) {
        return this.node.setAttribute('placeholder', this.placeholder);
      }
    };

    return Component;

  })();

  exports = Component;

}).call(this);

(function() {
  var Component, Main, exports;

  Component = require('./Component');

  Main = (function() {
    Main.viewBox = {};

    Main.view = {};

    Main.room = {};

    Main.roomText = {};

    Main.inventory = {};

    Main.inventoryText = {};

    Main.feedback = {};

    Main.feedbackText = {};

    Main.socket = {};

    Main.input = {};

    Main.inputBox = {};

    function Main(parent, opts) {
      this.createInterface();
      this.addEventListener();
      this.startServer();
    }

    Main.prototype.startServer = function() {
      this.socket = io();
      return this.socket.on('chat message', (function(_this) {
        return function(msg) {
          _this.feedbackText.append({
            type: 'p',
            html: msg
          });
          return _this.feedback.node.scrollTop = _this.feedback.node.scrollHeight;
        };
      })(this));
    };

    Main.prototype.createInterface = function() {
      this.viewBox = new Component(document.body, {
        id: 'view-container'
      });
      this.view = this.viewBox.append({
        id: 'view'
      });
      this.room = this.view.append({
        classes: 'view-box',
        id: 'room'
      });
      this.roomText = this.room.append({
        classes: 'text-view'
      });
      this.inventory = this.view.append({
        classes: 'view-box',
        id: 'inventory'
      });
      this.inventoryText = this.inventory.append({
        classes: 'text-view'
      });
      this.feedback = this.view.append({
        classes: 'view-box',
        id: 'feedback'
      });
      this.feedbackText = this.feedback.append({
        classes: 'text-view'
      });
      this.inputBox = new Component(document.body, {
        id: 'input-container'
      });
      return this.input = this.inputBox.append({
        id: 'text-input',
        element: 'textarea',
        placeholder: 'Type commands here - enter to submit - shift + enter for newline'
      });
    };

    Main.prototype.addEnterListener = function() {
      var active;
      active = false;
      window.onkeydown = function(event) {
        var key, val;
        if (!active) {
          active = true;
          key = event.keyCode || event.which;
          if (key === 13 && !event.shiftKey) {
            val = this.input.node.value;
            this.socket.emit('chat message', val);
            this.input.node.value = '';
            event.preventDefault();
            return false;
          }
        }
      };
      return window.onkeyup = function(event) {
        return active = false;
      };
    };

    return Main;

  })();

  exports = Main;

}).call(this);
