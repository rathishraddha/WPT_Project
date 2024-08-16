import express from 'express';
import { deleteCustomer, loginCustomer, registerCustomer, updateCustomer } from '../Controllers/customerController.js';

const customerRouter = express.Router();

customerRouter.post('/', registerCustomer);
customerRouter.post('/login', loginCustomer);
customerRouter.post('/update', updateCustomer);
customerRouter.delete('/delete/:id', deleteCustomer);
export default customerRouter;