const {Command, flags} = require('@oclif/command')
const {Todo} = require('../db');

class EditCommand extends Command {
  async run() {
    const {
      flags: {id},
      flags: {task},
    } = this.parse(EditCommand)
    const res = await Todo.find({id: parseInt(id, 10)})
    .assign({task: task})
    .assign({Edited_date: Date()})
    .write() 
    this.log(res)
  }
}

EditCommand.description = `Edits a pre-existing task
...
Overwrites the pre-existing task and adds a new time stamp
`

EditCommand.flags = {
  id: flags.string({char: 'n', description: 'task id'}),
  task: flags.string({char: 'n', description: 'task'}),
}

module.exports = EditCommand
