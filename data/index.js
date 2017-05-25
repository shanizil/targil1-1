var age        = require('./age'),
    consts     = require('./consts'),
    mongoose   = require('mongoose');

 mongoose.Promise = global.Promise;

mongoose.connect(consts.MLAB_KEY);
const conn = mongoose.connection;//get default connection
conn.on('error',
(err) => {
console.log(`connection error: ${err}`);
});
conn.on('open',
() => console.log('connected'));                  
module.exports = { 
   getAllAges(){
        return age.find();
    },
  cheakAgesId(id) { 
    return age.findOne({id:id});
    },

 

cheakProfileAndMovie(id,movie){
      age.find({}, {"_id": 0},
        (err, age) => {
                for (let i = 0; i < age.length; i++) {
                    if(age[i].id == id){
                        console.log(age[i].id);
                        for (let j = 0; j < age[i].movies.length; j++) {
                            if (age[i].movies[j].name == movie) {
                                console.log(age[i].movies[j].name);

                            }
                        }
                    }
                  return age;
                }
            });
        }

};
