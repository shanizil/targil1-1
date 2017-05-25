var mongoose = require('mongoose'),

    schema = mongoose.Schema,

movies = new schema({
name: {type:String, index:1, required:true, unique:true},
profile: Number,
length: {type:String,required:true}
});


ages = new schema({
type: {type:String, index:1, required:true, unique:true},
id: Number,
ageRange: {type:String,required:true},
movies:[movies]
},{collection: 'ages'});

console.log(`required paths: ${ages.requiredPaths()}`);
console.log(`indexes: ${JSON.stringify(ages.indexes())}`);

var Ages = mongoose.model('Ages',ages);

module.exports = Ages;


  