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
      const result = await client.execute(upsertBook,[types.TimeUuid.now(),req.body.title, req.body.author, req.body.category]);
      res.status(201).json(result);
      console.log('Book Added');
    } catch (error) {
        res.status(404).send({ message: error });
        console.log(error)
    }
}

export const deleteBook = async(req,res)=>{
    var delBook = "DELETE FROM db2key.books WHERE id = ?";
    try {
        client.execute(delBook,[req.params.id]);  
    } catch (error) {
        res.status(404).json({ message: "Something went wrong" })
    }
}


