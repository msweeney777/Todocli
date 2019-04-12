const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('dbcompleted.json');
const dbcompleted = low(adapter);
// Defaults (in case JSON file is empty);
dbcompleted.defaults({completed: []}).write();
const completed = dbcompleted.get('completed');
module.exports = {
  dbcompleted,
  completed,
}
