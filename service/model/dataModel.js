const { getDB } = require('../config/mongodb');

class dataModel {

    static async insertOneMusic(data) {
        try {
            const db = getDB()
            const music = await db
                .collection("musics")
                .insertOne(data)
            return music
        } catch (error) {
            throw error
        }
    }

    static async deleteOneMusic(data) {
        try {
            const db = getDB()
            const music = await db
                .collection("musics")
                .deleteOne(data)
            return music
        } catch (error) {
            throw error
        }
    }

    static async updateOneMusic(filter, data) {
        try {
            const db = getDB()
            const music = await db
                .collection("musics")
                .updateOne(filter, { $set: data })
            return music
        } catch (error) {
            throw error
        }
    }

    static async deleteOneMusic(data) {
        try {
            const db = getDB()
            const music = await db
                .collection("musics")
                .deleteOne(data)
            return music
        } catch (error) {
            throw error
        }
    }

    static async findOneMusic(data) {
        try {
            const db = getDB()
            const musics = await db
                .collection("musics")
                .findOne(data)
            return musics
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    static async findAllMusic() {
        try {
            const db = getDB()
            const musics = await db
                .collection("musics")
                .find().toArray()
            return musics
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    static async insertOneUser(data) {
        try {
            const db = getDB()
            const users = await db
                .collection("users")
                .insertOne(data)
            return users
        } catch (error) {
            throw error
        }
    }


    static async findOneUser(data) {
        try {
            const db = getDB()
            const user = await db
                .collection("users")
                .findOne(data)
            return user
        } catch (error) {
            throw error
        }
    }


}

module.exports = dataModel

