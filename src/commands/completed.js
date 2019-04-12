const {Command, flags} = require('@oclif/command')
const chalk = require('chalk');
const {completed} = require('../dbcompleted');

class CompletedCommand extends Command {
  async run() {
    const res = await completed.sortBy('id').value();
    res.forEach(({id, task, done}) => {
      this.log(
        `${chalk.magenta(id)} ${
          done ? chalk.green('DONE') : chalk.yellowBright('NOT DONE')
        } : ${task}` 
      );
    })
  }
}

CompletedCommand.description = `Shows completed tasks
...
Shows all the tasks that have been completed
`

module.exports = CompletedCommand
