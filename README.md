thunderMUD
==========

A text-based interactive platform for a fantasy-style RPG with combat, exploration, and puzzle-solving.

World - the game as a whole

 - A main network will contain the bulk of the content, and maintain thematic consistency
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
 - All items haave descriptions, but descriptions are subjective based on player status and attributes, room conditions, or area properties
 - Item properties such as stat modifiers and description are open to modification by players (under special circumstances)
 
Combat

 - Combat is turn-based in the form of rounds-per-minute
 - The pace of combat is contextual and can be altered by players or rooms
 
Death

 - Players are not necessarily dead at 0 HP - this can be contextual to the class or the situation
 - Death is not necessarilly death, per se - it could just be a change of location
 - Death should have strong interaction with different player states and altered perspectives
