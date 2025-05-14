const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/Company';
mongoose.connect(dbURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB successfully');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

module.exports = mongoose;
