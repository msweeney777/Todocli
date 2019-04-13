const {Command} = require('@oclif/command')
const {deleted} = require('../dbremove')
const {completed} = require('../dbcompleted')
const {Todo} = require('../db')

class DeleteLogsCommand extends Command {
  async run() { 
      await deleted.remove({done: false}).write();
      await deleted.remove({done: true}).write();
      await completed.remove({done: true}).write();
      await Todo.remove({done: true}).write();
      await Todo.remove({done: false}).write();
    //this.log(deleted);
    //this.log(completed);
    //this.log(Todo);
  }
}

DeleteLogsCommand.description = `Erases the entire contents of the 'deleted' 'completed' 'show' logs
...
Erases the contents of the dbremove.json, dbcompleted.json and db.json files 
`

module.exports = DeleteLogsCommand
