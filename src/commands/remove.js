const {Command, flags} = require('@oclif/command')
const {Todo} = require('../db')
const {deleted} = require('../dbremove');

class RemoveCommand extends Command {
  async run() {
    const {
      flags : {id},
    } = this.parse(RemoveCommand)
    const del = await deleted.push(Todo.find({id: parseInt(id, 10)}).assign({Deleted_date: Date()}))
      .write();
    const res = await Todo.remove({id: parseInt(id, 10)}).write();
    this.log(res);
  }
}

RemoveCommand.description = `Removes a task by id
...
Removes a task permanently from database by id
`

RemoveCommand.flags = {
  id: flags.string({char: 'n', description: 'task id', required: true}),
}

module.exports = RemoveCommand
