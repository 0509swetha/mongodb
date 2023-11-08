

const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function fetchStudentsData() {
try {
await client.connect();
console.log("Connected to MongoDB");

const database = client.db("school");
const collection = database.collection("students");

const studentsData = await collection.find({}).toArray();
console.log("Students Data:", studentsData);

return studentsData;
} catch (error) {
console.log("An error occurred:", error);
throw error;
} finally {
await client.close();
console.log("Connection closed");
}
}

fetchStudentsData()
.then(() => {
console.log("Data fetched successfully");
})
.catch((error) => {
console.log("Error:", error);
});