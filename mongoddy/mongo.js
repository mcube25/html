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
//db complete update
var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/' + process.argv[2]
mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection('users')
  collection.update({
    username: 'tinatime'
  }, {
    $set: {
      age: 40
    }
  }, function(err) {
    if (err) throw err
    db.close()
  })
})
//db complete remove
var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/' + process.argv[2];
mongo.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection(process.argv[3]);
  collection.remove({
    _id: process.argv[4]
  }, function(err) {
    if (err) throw err;
    db.close();
  })
})
//db complete count
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection('parrots');
  collection.count({
    age: {
      // greater than integer
      $gt: parseInt(process.argv[2])
    }
  }, function(err, count) {
    if (err) throw err;
    console.log(count);
    db.close();
  })
})
//db aggregate
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) throw err;
// [
//  { status: 'A', value: 1 },
//  { status: 'B', value: 2 },
//  { status: 'A', value: 10 }
// ]

var collection=collection.aggregate([
  { $match: { status: 'A' }}
, { $group: {
    _id: 'total' // This can be an arbitrary string in this case
  , total: {
      // $sum is the operator used here
      $sum: '$value'
    }
  }}
]).toArray(function(err, results) {
  // handle error
  console.log(results)
  // => [
  // =>   { _id: 'total', total: 11 }
  // => ]
})
})
//db rounding
var mongo = require('mongodb').MongoClient
var size = process.argv[2]

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
  if (err) throw err
  var prices = db.collection('prices')
  prices.aggregate([{
    $match: {
      size: size
    }
  }, {
    $group: {
      _id: 'total',
      total: {
        $avg: '$price'
      }
    }
  }]).toArray(function(err, results) {
    if (err) throw err
    if (!results.length) {
      throw new Error('No results found')
    }
    var o = results[0]
    console.log(Number(o.total).toFixed(2))
    db.close()
  })
})