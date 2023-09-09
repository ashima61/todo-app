const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ashimadhiman61:ashima61@cluster0.s5hd1bp.mongodb.net/todo-app');
const db = mongoose.connection;
// error
db.on('error',console.error.bind(console,'error connecting to db'));
// up and running then message
db.once('open',function(){
    console.log('Success fully connected to the database')
})