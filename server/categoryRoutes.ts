import * as express from 'express';
import * as categoryBl from "./BL/category-bl";

export const categoryRoutes = express.Router();

categoryRoutes.get('/', async (req, res) => {
    try {
        let categories = await categoryBl.getAllCategories();
        res.status(200).send(categories);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

