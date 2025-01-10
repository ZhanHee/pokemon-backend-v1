const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const pokemonRoutes = require('./routes/pokemon');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

// 中间件
app.use(bodyParser.json());
app.use(cors());

// 路由
app.use('/api/pokemons', pokemonRoutes);

// 启动服务器
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});