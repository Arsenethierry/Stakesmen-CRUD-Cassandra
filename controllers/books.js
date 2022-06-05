import { client } from "../connection.js";
import { types } from "cassandra-driver";

var getAllBooks = "select * from db2key.books";

export const getBooks = async(req,res)=>{
    try {
        const results = await client.execute(getAllBooks)
        console.log(results)
        res.status(200).json(results);
    } catch (error) {
       console.log(error) 
    }
}

export const postBook = async(req,res)=>{
    var upsertBook = 'INSERT INTO db2key.books(id,title,author,category) VALUES (?,?,?,?)';
    try {
      client.execute(upsertBook,[types.TimeUuid.now(),req.body.title, req.body.author, req.body.category]);
      console.log('Book Added');
    } catch (error) {
        res.status(404).send({msg: error});
        console.log(error)
    }
}

