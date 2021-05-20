# build-coffee

[![apm](https://flat.badgen.net/apm/license/build-coffee)](https://atom.io/packages/build-coffee)
[![apm](https://flat.badgen.net/apm/v/build-coffee)](https://atom.io/packages/build-coffee)
[![apm](https://flat.badgen.net/apm/dl/build-coffee)](https://atom.io/packages/build-coffee)
[![CircleCI](https://flat.badgen.net/circleci/github/idleberg/atom-build-coffee)](https://circleci.com/gh/idleberg/atom-build-coffee)
[![David](https://flat.badgen.net/david/dev/idleberg/atom-build-coffee)](https://david-dm.org/idleberg/atom-build-coffee?type=dev)

[Atom Build](https://atombuild.github.io/) provider for `coffee`, compiles CoffeeScript into JavaScript. Supports the [linter](https://atom.io/packages/linter) package for error highlighting.

![Screenshot](https://raw.githubusercontent.com/idleberg/atom-build-coffee/master/screenshot.png)

*See the linter in action*

## Installation

### apm

Install `build-coffee` from Atom's [Package Manager](http://flight-manual.atom.io/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ apm install build-coffee`

### Using Git

Change to your Atom packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.atom\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.atom\packages
```

**Linux & macOS**

```bash
$ cd ~/.atom/packages/
```

Clone repository as `build-coffee`:

```bash
$ git clone https://github.com/idleberg/atom-build-coffee build-coffee
```

Inside the cloned directory, install Node dependencies:

```bash
$ yarn || npm install
```

## Usage

### Build

Before you can build, select an active target with your preferred build option.

Available targets:

* `CoffeeScript` — compile script (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd>)
* `CoffeeScript --map` — compile script and create a map (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Cmd</kbd>+<kbd>B</kbd>)
* `CoffeeScript --bare` — compile script without the top-level function safety wrapper (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>)
* `CoffeeScript (user)` — compile script with arguments specified in the package settings

### Shortcuts

Here's a reminder of the default shortcuts you can use with this package:

**Select active target**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd> or <kbd>F7</kbd>

**Build script**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>B</kbd> or <kbd>F9</kbd>

**Jump to error**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>G</kbd> or <kbd>F4</kbd>

**Toggle build panel**

<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> or <kbd>F8</kbd>

## License

This work is licensed under the [The MIT License](LICENSE).
