const express = require('express');
const path = require('path'); // ✅ Add this
const app = express();
require('dotenv').config();

console.log('JWT_SECRET (debug):', process.env.JWT_SECRET);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));


const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const loanRoutes = require('./routes/loanRoutes');
const adminRoutes = require('./routes/adminRoutes');


app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/loans', loanRoutes);
app.use('/api/admin', adminRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




