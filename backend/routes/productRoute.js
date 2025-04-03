import express from 'express';
import multer from 'multer';
import { listProducts, addProduct, removeProduct, singleProduct } from '../controllers/productController.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

productRouter.get('/single/:id', singleProduct);
// Configure multer for handling file uploads
const storage = multer.memoryStorage();  // Use `diskStorage()` if saving files to disk
const upload = multer({ storage });

// Define routes
productRouter.post(
    '/add',adminAuth,upload.fields([
        { name: 'image1', maxCount: 1 },
        { name: 'image2', maxCount: 1 },
        { name: 'image3', maxCount: 1 },
        { name: 'image4', maxCount: 1 }
    ]),
    addProduct
);
productRouter.post('/remove',adminAuth, removeProduct);
productRouter.get('/single', singleProduct);  // Fetch a single product (use query params)
productRouter.get('/list', listProducts);     // Fetch list of products

export default productRouter;
