import { USER_TABLE_NAME } from "../constants/DBConstants.js";
import { connection } from "../utility/DBUtills.js";
import { hashSync, compareSync } from "bcrypt";

export function registerCustomer(req, res){
    const {username, email, password, first_name, last_name} = req.body;
    const encryptedpassword = hashSync(password, 10);
    const qry = `INSERT INTO ${USER_TABLE_NAME} (username, email, password, first_name, last_name)
    VALUES ('${username}', '${email}', '${encryptedpassword}', '${first_name}', '${last_name}')`;

    connection.query(qry, (error, result) => {
        if(error){
            res.status(500).send({message: 'something went wrong', error: error});

        }
        else{
            res.status(200).send({message:'login successful'});
        }
    })
}
export function loginCustomer(req, res) {
    const { username, password } = req.body;
    
    const qry = `SELECT * FROM ${USER_TABLE_NAME} WHERE username = ?`;
    
    connection.query(qry, [username], (error, result) => {
        if (error) {
            res.status(500).send({ message: 'Something went wrong', error: error });
        } else {
            if (result.length === 0) {
                res.status(400).send({ message: 'Invalid username' });
            } else {
                const encryptedpassword = result[0].password;  
                if (compareSync(password, encryptedpassword)) {
                    res.status(200).send({ message: 'Login successful', result: result });
                } else {
                    res.status(400).send({ message: 'Invalid password' });
                }
            }
        }
    });
}

export const updateCustomer = (req, res) => {
    const {id, username, email, password, first_name, last_name} = req.body;
    const qry = `UPDATE users
                SET username = '${username}',
                    email = '${email}',
                   first_name = '${first_name}',
                    last_name = '${last_name}'
                WHERE id = ${id};`

    connection.query(qry, (error, result) => {
        if(error){
            res.status(500).send({message: 'somethign went wrong'});
        }
        else{
            res.status(200).send({message:'update successfull'});
        }
    })
}

export const deleteCustomer = (req, res) => {
    const qry = `DELETE FROM ${USER_TABLE_NAME} WHERE id=${req.params.id}`;
    
    connection.query(qry, (error, result) => {
        if(error) {
            res.status(500).send({message: 'something went wrong', error: error})
        }
        else{
            res.status(200).send({message: 'account deleted successfully'});
        }
    }) 
    
}
