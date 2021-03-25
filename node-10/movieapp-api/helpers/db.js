const mongoose = require("mongoose");


module.exports = () => {
  mongoose.connect(
    'mongodb+srv://Gul:Tazedatabase@cluster0.aqxwp.mongodb.net/newDatabase',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  mongoose.connection.on("open", () => {
    console.log("MongoDB: Connected Success!");
  });
  mongoose.connection.on("error", (err) => {
    console.log("MongoDB: Connection Failed:", err);
  });
};





//ZErrin
// const mongoose = require('mongoose');

// module.exports = () => {
// mongoose.connect('mongodb+srv://elifzer:Zerrin2180@cluster0.x9mlw.mongodb.net/movieappdb',
//  {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connection.on("open", ()=>{console.log('Mongodb:Connected database!')})
// mongoose.connection.on("err", ()=>{onsole.log("MongoDB: Connection Failed:",err)
//    });
// };