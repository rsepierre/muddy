# muddy

**DEAD:** I'm too lazy to work on this anymore. Plus, I'm kinda toying with the idea of making my own little browser MUD instead.

A MUD client in your browser usin' node.js & websockets.

This has only been tested with [Aardwolf](http://aardwolf.com),
so if you notice anything wrong in a different MUD let me know via
[Issues](http://github.com/dannytatom/muddy/issues).

![Screnshot!](https://github.com/dannytatom/muddy/raw/master/screenshot.png)

## Features

- Command History
- Aliases
- Triggers

## Installation & Usage

### Installation

    $ git clone git://github.com/dannytatom/muddy.git
    $ cd muddy
    $ npm install
    $ vim config/config.json
    $ node init.js &
    $ open http://localhost

### Aliases

    ;alias add {go home} {invoke stone} # Add an alias
    ;alias rm {go home}                 # Remove an alias
    ;alias ls                           # List aliases

### Triggers

    ;trigger add {Your Selection:} {1} # Add a trigger
    ;trigger rm {Your Selection:}      # Remove a trigger
    ;trigger ls                        # List triggers

## Copyright

Copyright (c) 2011 Danny Tatom. See LICENSE for details.
