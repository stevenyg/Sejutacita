const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URI
const client = new MongoClient(url)

const dbName = "sejutacita"
let db

async function connect() {
    await client.connect()
    console.log('Connect succesful', url);
    db = client.db(dbName)
    return db
}

function getDB() {
    return db
}

module.exports = { connect, getDB }