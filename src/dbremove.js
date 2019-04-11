const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('dbremove.json');
const dbremove = low(adapter);
// Defaults (in case JSON file is empty);
dbremove.defaults({deleted: []}).write();
const deleted = dbremove.get('deleted');
module.exports = {
  dbremove,
  deleted,
}
