import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// Initialize Express App
const app = express();
const port = process.env.PORT || 4000;

// Connect to Database & Cloudinary
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Admin Login Route (Directly in `server.js`)
app.post('/api/user/admin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required!" });
    }

    // Dummy admin credentials (Replace with actual database validation)
    if (email === "admin@example.com" && password === "admin123") {
        return res.json({ success: true, token: "fake-token-123" });
    } else {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
});

// Root Route (To Check API is Running)
app.get('/', (req, res) => {
    res.send("API Working");
});

// Start the Server
app.listen(port, () => console.log(`🚀 Server started on PORT: ${port}`));
