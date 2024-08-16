import express from 'express'
import { getProperties, getPropertyById } from '../Controllers/propertyController.js';

const propertyRouter = express.Router();

propertyRouter.get('/', getProperties);
propertyRouter.get('/:id', getPropertyById);

export default propertyRouter