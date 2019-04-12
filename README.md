todocli
=======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/todocli.svg)](https://npmjs.org/package/todocli)
[![Downloads/week](https://img.shields.io/npm/dw/todocli.svg)](https://npmjs.org/package/todocli)
[![License](https://img.shields.io/npm/l/todocli.svg)](https://github.com/msweeney777/todocli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g todocli
$ todocli COMMAND
running command...
$ todocli (-v|--version|version)
todocli/0.0.0 darwin-x64 node-v10.13.0
$ todocli --help [COMMAND]
USAGE
  $ todocli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todocli add`](#todocli-add)
* [`todocli completed`](#todocli-completed)
* [`todocli deleted`](#todocli-deleted)
* [`todocli edit`](#todocli-edit)
* [`todocli help [COMMAND]`](#todocli-help-command)
* [`todocli remove`](#todocli-remove)
* [`todocli show`](#todocli-show)
* [`todocli update`](#todocli-update)

## `todocli add`

Adds a new todo

```
USAGE
  $ todocli add

OPTIONS
  -n, --task=task  task

DESCRIPTION
  ...
  Adds a new todo to the existing list
```

_See code: [src/commands/add.js](https://github.com/msweeney777/todocli/blob/v0.0.0/src/commands/add.js)_

## `todocli completed`

Shows completed tasks

```
USAGE
  $ todocli completed

DESCRIPTION
  ...
  Shows all the tasks that have been completed
```

_See code: [src/commands/completed.js](https://github.com/msweeney777/todocli/blob/v0.0.0/src/commands/completed.js)_

## `todocli deleted`

Shows deleted tasks

```
USAGE
  $ todocli deleted

DESCRIPTION
  ...
  Shows all the tasks that have been deleted
```

_See code: [src/commands/deleted.js](https://github.com/msweeney777/todocli/blob/v0.0.0/src/commands/deleted.js)_

## `todocli edit`

Describe the command here

```
USAGE
  $ todocli edit

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/edit.js](https://github.com/msweeney777/todocli/blob/v0.0.0/src/commands/edit.js)_

## `todocli help [COMMAND]`

display help for todocli

```
USAGE
  $ todocli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `todocli remove`

Removes a task by id

```
USAGE
  $ todocli remove

OPTIONS
  -n, --id=id  (required) task id

DESCRIPTION
  ...
  Removes a task permanently from database by id
```

_See code: [src/commands/remove.js](https://github.com/msweeney777/todocli/blob/v0.0.0/src/commands/remove.js)_

## `todocli show`

Shows existing tasks

```
USAGE
  $ todocli show

DESCRIPTION
  ...
  Shows all the tasks sorted by their ids
```

_See code: [src/commands/show.js](https://github.com/msweeney777/todocli/blob/v0.0.0/src/commands/show.js)_

## `todocli update`

Marks a task as done

```
USAGE
  $ todocli update

OPTIONS
  -n, --id=id  task id

DESCRIPTION
  ...
  Marks a task as done
```

_See code: [src/commands/update.js](https://github.com/msweeney777/todocli/blob/v0.0.0/src/commands/update.js)_
<!-- commandsstop -->
