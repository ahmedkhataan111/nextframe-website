const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Serve static images from portfolio_images directory
const portfolioDir = path.join(__dirname, 'portfolio_images');

// Ensure directory exists
if (!fs.existsSync(portfolioDir)) {
    fs.mkdirSync(portfolioDir);
}

app.use('/images', express.static(portfolioDir));

app.get('/api/portfolio', (req, res) => {
    fs.readdir(portfolioDir, (err, files) => {
        if (err) {
            console.error('Error reading portfolio directory', err);
            return res.status(500).json({ error: 'Failed to load portfolio' });
        }
        
        // Filter out non-image files
        const images = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return ['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext);
        }).map(file => `http://localhost:${PORT}/images/${file}`); // Return full URLs for simplicity in local dev

        res.json(images);
    });
});

app.listen(PORT, () => {
    console.log(`Backend Server running on http://localhost:${PORT}`);
});
