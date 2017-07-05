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