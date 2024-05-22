const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');
const blogPostRoutes = require('./routes/blogRoutes');
const commentRoutes = require('./routes/commentRoutes');
// const authRoute = require("./routes/authRoute");
const { ErrorHandler } = require('./middlewares/errorHandler');
const cookieParser = require('cookie-parser');
const logger = require('./utils/winstonLogger');
const PORT = 8000;

const app = express();
// app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use (cookieParser())
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


// Use the routes
app.use("/api/auth", authRoute);
app.use('/api/users', userRoutes);
app.use('/api/blogposts', blogPostRoutes);
app.use('/api/comments', commentRoutes);

// Error handling middleware
app.use(ErrorHandler);

app.listen(PORT, (err) => {
  if (err) {
    logger.error(err);
  }
  logger.info(`Server is Running on PORT: ${PORT}`);
});