const mongoose = require('mongoose');
const Post = require('./Post');

mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
    console.log('Connected to MongoDB');
    const posts = await Post.find();
    console.log('Blog Posts:', posts);
    mongoose.connection.close();
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});
