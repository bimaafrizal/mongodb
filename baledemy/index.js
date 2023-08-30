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
const classModel = mongoose.model('class', classSchema);

// const nodejs = new classModel({
//   judul: 'NodeJS',
//   deskripsi: 'Belajar NodeJS',
//   tglPosting: Date.now()
// });

// nodejs.save();

// classModel.create({
//   judul: 'ReactJS',
//   deskripsi: 'Belajar ReactJS',
// });

//metode find
// const cobaFind = classModel.find({judul:'ReactJS'}).then((result) => {
//   console.log(result);
// });

// async function cobaFindOne() {
//   const cobaFind = await classModel.findOne({judul:'NodeJS'});
//   console.log(cobaFind);
// }

// cobaFindOne();

// const cobaFindLike = classModel.find({judul:/JS/}, 'judul deskripsi').then((result) => {
//   console.log(result);
// });

// const cobaFindById = classModel.findById('64eb6acbc24bd566b4b16603').then((result) => {
//   console.log(result);
// });

//pakai builder
// const query = classModel.find({judul:/JS/});
// query.select('judul deskripsi');
// query.exec().then((result) => {
//   console.log(result);
// });

classModel.find({judul:/JS/})
  .select('judul deskripsi')
  .exec()
  .then((result) => {
    console.log(result);
  });

