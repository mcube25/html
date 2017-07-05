db = connect("localhost:27017/myDatabase")
//The Mongo() method has the following parameter:

//Parameter	Type	Description
//host	string	Optional. The host, either in the form of <host> or <host><:port>.
//The following example instantiates a new connection to the MongoDB instance running on the localhost interface and returns a reference to "myDatabase":
db = new Mongo().getDB("myDatabase");
//Pass the <host><:port> parameter to the constructor to instantiate a connection to the <host> and the <port>.
db = Mongo();
//connect(url, user, password)
db = connect("localhost:27017/myDatabase");
//db find
var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err, db) {
     if (err) throw err
    // db gives access to the database
  db.collection('parrots').find({
    age: {
      // greater than integer, see resources "Find"
      $gt: parseInt(process.argv[2])
    }
  }).toArray(function(err, documents) {
    // Here is where we decide what to do with the query results
    if (err) throw err
    console.log(documents)
    // Always close the connection after you get what you need
    db.close()
  })
});
//db find documents
var url = 'mongodb://localhost:27017/learnyoumongo'
var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err, db) {
  if (err) throw err
    // db gives access to the database
  db.collection('parrots').find({
    age: {
      $gt: parseInt(process.argv[2])
    }
  }, {
    name: 1,
    age: 1,
    _id: 0

  }).toArray(function(err, documents) {
    // Here is where we decide what to do with the query results
    if (err) throw err
    console.log(documents)
    db.close()
  })
});
//db insert docs
var mongo = require('mongodb').MongoClient

var firstName = process.argv[2]
var lastName = process.argv[3]
var doc = {
  firstName: firstName,
  lastName: lastName
}

var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection('docs')
  collection.insert(doc, function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(doc))
    db.close()
  })
});