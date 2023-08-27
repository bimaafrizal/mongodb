const mongoose = require('mongoose');
const {Schema} = mongoose;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`MongoDB connected`);
});

const classSchema = new Schema({
  judul: String,
  deskripsi: String,
  tglPosting: {
    type: Date,
    default: Date.now
  }
});

//nama model, skema
mongoose.model('class', classSchema);