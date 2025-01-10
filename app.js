const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const pokemonRoutes = require('./routes/pokemon');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();


app.use(bodyParser.json());
app.use(cors());


app.use('/api/pokemons', pokemonRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});