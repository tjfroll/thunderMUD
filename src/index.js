(function() {
  var Description;

  Description = (function() {
    function Description(parent, opts) {
      this.parent = parent;
    }

    Description.prototype.text = function() {
      return this.text;
    };

    Description.prototype.addType = function(type, desc) {
      return this.types[type] = desc;
    };

    Description.prototype.getType = function(type) {
      return this.types[type];
    };

    return Description;

  })();

}).call(this);

(function() {
  var Equipment, Item,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Item = require('Item');

  Equipment = (function(_super) {
    __extends(Equipment, _super);

    function Equipment(parent, opts) {
      this.Desc = new Description;
    }

    return Equipment;

  })(Item);

}).call(this);

(function() {
  var Input, UI,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  UI = require('UI');

  Input = (function(_super) {
    __extends(Input, _super);

    function Input(parent, opts) {
      this.input = parent.getElementById('primary-input');
    }

    Input.prototype._makeListeners = function() {
      return this.input.on('keyPress', 'enter', (function(_this) {
        return function() {
          return _this.parseInput();
        };
      })(this));
    };

    Input.prototype.parseInput = function() {
      return this.execute(this.input.val());
    };

    Input.prototype.execute = function(command) {
      return this.input;
    };

    return Input;

  })(UI);

}).call(this);

(function() {
  var Inventory;

  Inventory = (function() {
    Inventory.prototype.list = [];

    function Inventory(parent, opts) {}

    Inventory.prototype.add = function(item) {
      return this.list.push(item);
    };

    Inventory.prototype.remove = function(item) {
      if (this.list[item]) {
        return this.list["delete"](item);
      }
    };

    Inventory.prototype.view = function(viewer) {
      return this.list;
    };

    return Inventory;

  })();

}).call(this);

(function() {
  var Item;

  Item = (function() {
    function Item(opts) {
      this.Desc = new Description;
      this.Loc = new Location;
    }

    return Item;

  })();

}).call(this);

(function() {
  var Location;

  Location = (function() {
    function Location(parent, opts) {}

    return Location;

  })();

}).call(this);

(function() {
  var Input, Main, Viewport;

  require('jquery');

  require('velocity');

  Input = require('Input');

  Viewport = require('Viewport');

  Main = (function() {
    function Main(parent, opts) {
      this.wrapper = parent.createElement('div');
      this.wrapper.id = 'full-wrapper';
      this.Input = this._makeInput(opts);
      this.Viewport = this._makeViewport(opts);
    }

    Main.prototype._makeInput = function(opts) {
      return new Input(this.wrapper, opts);
    };

    Main.prototype._makeViewport = function(opts) {
      return new Viewport(this.wrapper, opts);
    };

    return Main;

  })();

}).call(this);

(function() {
  var Player;

  Player = (function() {
    function Player(opts) {
      this.Loc = new Location;
      this.Desc = new Description;
      this.Inv = new Inventory;
    }

    return Player;

  })();

}).call(this);

(function() {
  var Item, Room,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Item = require('Item');

  Room = (function(_super) {
    __extends(Room, _super);

    Room.prototype._ENTER_DESC = 'You have entered the room.';

    Room.prototype._EXIT_DESC = 'You have exited the room.';

    Room.prototype._LOOK_DESC = 'You are looking at the room.';

    function Room() {
      this.Desc = new Description(this);
      this.Desc.addPersepctive('enter', this._ENTER_DESC);
      this.Desc.addPerspective('exit', this._EXIT_DESC);
      this.Desc.addPerspective('look', this._LOOK_DESC);
    }

    Room.prototype.setDesc = function() {};

    Room.prototype.onEnter = function() {
      return this.desc('enter');
    };

    Room.prototype.onExit = function() {
      return this.desc('exit');
    };

    return Room;

  })(Item);

}).call(this);

(function() {
  var UI;

  UI = (function() {
    function UI(parent, opts) {}

    UI.prototype.hide = function() {};

    UI.prototype.show = function() {};

    UI.prototype.update = function() {};

    return UI;

  })();

}).call(this);

(function() {
  var UI, Viewport,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  UI = requre('UI');

  Viewport = (function(_super) {
    __extends(Viewport, _super);

    function Viewport(parent, opts) {
      this.container = parent.createElement('div');
      this.container.id = 'primary-viewport';
    }

    return Viewport;

  })(UI);

}).call(this);
