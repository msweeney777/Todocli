const {Command} = require('@oclif/command')
const chalk = require('chalk');
const {deleted} = require('../dbremove');

class DeletedCommand extends Command {
  async run() {
    const res = await deleted.sortBy('id').value();
    res.forEach(({id, task, done}) => {
      this.log(
        `${chalk.magenta(id)} ${
          done ? chalk.green('DONE') : chalk.yellowBright('NOT DONE')
        } : ${task}` 
      );
    })
  }
}

DeletedCommand.description = `Shows deleted tasks
...
Shows all the tasks that have been deleted
`

module.exports = DeletedCommand;
