import { MongoClient } from 'mongodb'

const mongoClient = new MongoClient(process.env.MONGODB_URI)
const clientPromise = mongoClient.connect()

const handler = async(e) => {
    try {
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE)
        const collection = database.collection(process.env.MONGODB_ARTICLES)
        const results = await collection.find({}).limit(10).toArray()

        return Response.json({
            statusCode: 200,
            headers: { "content-type": "application/json" },
            body: results
        })
    } catch (error) {
        return { statusCode: 300, body: error }
    }
}

export default handler