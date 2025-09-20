const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// In-memory storage for sales data
let salesData = [];
let nextId = 1;

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/sales', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sales.html'));
});

app.get('/sold', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sold.html'));
});

// API Routes
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'sarhang' && password === '1212') {
    res.json({ success: true, message: 'سەرکەوتوو بویت' });
  } else {
    res.json({ success: false, message: 'پاسسۆردەکە خەلەتە' });
  }
});

app.post('/api/sales', (req, res) => {
  try {
    const sale = {
      _id: nextId.toString(),
      ...req.body,
      createdAt: new Date()
    };
    salesData.push(sale);
    nextId++;
    res.json({ success: true, message: 'فرۆشتن سەرکەوتووانە زیادکرا' });
  } catch (error) {
    res.json({ success: false, message: 'هەڵەیەک ڕوویدا' });
  }
});

app.get('/api/sales', (req, res) => {
  try {
    const sortedSales = salesData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.json(sortedSales);
  } catch (error) {
    res.json({ error: 'هەڵەیەک ڕوویدا' });
  }
});

app.put('/api/sales/:id', (req, res) => {
  try {
    const index = salesData.findIndex(sale => sale._id === req.params.id);
    if (index !== -1) {
      salesData[index] = { ...salesData[index], ...req.body };
      res.json({ success: true, message: 'گۆڕانکاری سەرکەوتووانە کرا' });
    } else {
      res.json({ success: false, message: 'فرۆشتنەکە نەدۆزرایەوە' });
    }
  } catch (error) {
    res.json({ success: false, message: 'هەڵەیەک ڕوویدا' });
  }
});

app.delete('/api/sales/:id', (req, res) => {
  try {
    const index = salesData.findIndex(sale => sale._id === req.params.id);
    if (index !== -1) {
      salesData.splice(index, 1);
      res.json({ success: true, message: 'سەرکەوتووانە سڕایەوە' });
    } else {
      res.json({ success: false, message: 'فرۆشتنەکە نەدۆزرایەوە' });
    }
  } catch (error) {
    res.json({ success: false, message: 'هەڵەیەک ڕوویدا' });
  }
});

// Delete all sales
app.delete('/api/sales', (req, res) => {
  salesData.length = 0; // Clear the array
  nextId = 1; // Reset ID counter
  res.json({ success: true, message: 'گشت فرۆشتنەکان سڕانەوە' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});