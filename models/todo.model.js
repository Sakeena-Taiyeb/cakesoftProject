// todo.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Todo
let Todo = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
    status: {
    type: String
  },
  date: {
    type: Date
  }

// },{
//     collection: 'todos'
// }
});

module.exports = mongoose.model('Todo', Todo,'todos');
