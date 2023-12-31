const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();
const { connectionDB } = require('./config/db.js');



const faviconPath = path.join(__dirname, 'public', 'statue.ico');
app.use(favicon(faviconPath));

const sculpturesRouter = require('./routes/sculptures');

app.use(express.json());

app.use('/api', sculpturesRouter);



app.use('*', (req, res, next) => {
  res.status(404).json({ data: 'Error 404: Page not found' });
});


app.use((error, req, res, next) => {
  res.status(500).json({ data: 'Internal Server Error' });
});

connectionDB();

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
