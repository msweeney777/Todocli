const {Command} = require('@oclif/command')
const {deleted} = require('../dbremove')
const {completed} = require('../dbcompleted')
const {Todo} = require('../db')

class DeleteLogsCommand extends Command {
  async run() { 
    await Todo.remove({removal_tag: 0}).write();
    await completed.remove({removal_tag: 0}).write();
    await deleted.remove({removal_tag: 0}).write();

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
