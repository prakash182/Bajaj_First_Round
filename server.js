const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bfhlRoutes = require('./routes/bfhlRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/bfhl', bfhlRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
