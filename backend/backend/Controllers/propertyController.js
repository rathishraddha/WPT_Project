import { PROPERTY_TABLE_NAME } from "../constants/DBConstants.js";
import { connection } from "../utility/DBUtills.js";


export const getProperties = (req, res) => {
    const qry = `select * from ${PROPERTY_TABLE_NAME}`;
    connection.query(qry, (error, result) => {
        if(error){
            res.status(500).send({message: 'something went wrong', error: error});

        }
        else{
            res.status(200).send({result});
        }
    })
}

export const getPropertyById = (req, res) => {
    const qry = `select * from ${PROPERTY_TABLE_NAME} where No=${req.params.id}`
    connection.query(qry, (error, result) => {
        if(error){
            res.status(500).send({message: 'somethign went wrong', error: error});
        }
        else{
            res.status(200).send(result);
        }
    })
}