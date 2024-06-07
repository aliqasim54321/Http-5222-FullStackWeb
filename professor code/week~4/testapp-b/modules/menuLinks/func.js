const { MongoClient, ObjectId } = require("mongodb"); //get the MongoClient class of objects so we can create one

//create a new MongoClient
const dbUrl = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(dbUrl); //create the MongoClient

//MONGODB FUNCTIONS
async function connection() {
  db = client.db("testdb");
  return db; //return the database
}
//Get all links from the menuLinks collection
async function getLinks() {
  db = await connection();
  let results = db.collection("menuLinks").find({});
  return await results.toArray(); //convert results to an array
}
//Insert one document into menuLinks collection
async function addLink(newLink) {
  db = await connection();
  let status = await db.collection("menuLinks").insertOne(newLink);
  //do something with the status to check if ok
  console.log("link added");
}
//Delete one document by id
async function deleteLink(id) {
  db = await connection();
  const deleteIdFilter = { _id: new ObjectId(id) };
  let result = await db.collection("menuLinks").deleteOne(deleteIdFilter);
  if (result.deletedCount == 1)
    console.log("delete successful");
}

module.exports = {
  getLinks,
  addLink,
  deleteLink
}