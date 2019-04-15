const {Command, flags} = require('@oclif/command')
const {Todo} = require('../db');

class AddCommand extends Command {
  async run() {
    const {
      flags: {task},
    } = this.parse(AddCommand)
    const res = await Todo.push({
      task,
      id: Todo.value().length,
      done: false,
      Created_date: Date(),
      removal_tag: 0,
    }).write();
    this.log(res)
  }
}

AddCommand.description = `Adds a new todo
...
Adds a new todo to the existing list
`

AddCommand.flags = {
  task: flags.string({char: 'n', description: 'task'}),
}

module.exports = AddCommand
