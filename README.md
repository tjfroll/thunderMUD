thunderMUD

A text-based interactive platform for a fantasy-style RPG with combat, exploration, and puzzle-solving.

World - the game as a whole

  - A main network will contain the bulk of the content, and should maintain thematic consistency
  - Vignette-style one-offs should be possible without altering the primary game world

Interface

  - Two primary components: viewport and text input box
  - Viewport represents the world in text, but has access to multiple font families, colors, sizes, weights, and transforms
  - Multiple viewports should be supported (e.g. dedicated viewport for player inventory)
  - Most commands are executed through the text input box
  - Clickable links should exist, either executing special commands (click on doorway to enter) or to provide contextual information (hover text)

Players - individual users

  - Players will have skills, spells, and equipment, per traditional RPG structure
  - Players can exist across multiple locations simultaneously (though not necessarily in the same state)
  - Player perspective is subjective, and can be strongly influenced by other players, the properties of the room or area

Rooms - locations that can host players

  - Rooms should be able to function as items or equipment, as well as vice versa.
  - Rooms should not necessarily be fixed or permanent
  - Rooms can be grouped as areas, to allow for area-wide properties

Items - objects that players can interact with, control, or possess

  - Includes armor, weapons, accessories, and rooms (e.g. a genie's lamp can contain a room inside of it, or a king's crown can contain a city)
  - All items have descriptions, but descriptions are subjective based on player status (blindness) and attributes (attention to detail), room conditions (foggy), or area properties (time of day)
  - Item properties such as stat modifiers and description are open to modification by players under specific circumstances

Characters - the process of creating and defining a player’s abilities and attributes

  - Characters should be defined through actions rather than selected from a list
  - Standard attributes may exist (strength, willpower, agility, etc), but character performance should not be defined primarily through one stat

Combat

  - Combat is turn-based in the form of rounds-per-minute
  - The pace of combat is contextual and can be altered by players or rooms (time dilation)
  - Crowd control should be low in duration relative to the length of combat
  - Crowd control should generally be skill-based (requires good timing and strategy)
  - Wherever possible, RNG and percentage-based damage should be limited and predictable
  - Avoid diminishing returns wherever possible (this is a crutch)
  - Combat should incorporate movement and positioning as much as possible (though this will be difficult to represent textually)
  - May be best to have combat play out in completely separate arenas (since players can exist in multiple locations simultaneously, combat could occur inside JRPG-style sub-zones)

Death - one of many possible character states

  - Players are not necessarily dead at 0 HP - this can be contextual to the player abilities or the situation
  - Death is not necessarilly death, per se - it could just be a change of location
  - Death should have strong interaction with different player states and altered perspectives

Abilities
