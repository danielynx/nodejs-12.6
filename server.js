const os = require('os');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan(app.get('env') === 'production' ? 'combined' : 'dev'));
app.use(helmet());
app.use(compression());

app.get('/', (req, res) => {
  res.json({
    ...req.headers,
    hostname: os.hostname(),
    date: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log('Server is listening on port', PORT);
});

process.on('uncaughtException', err => {
  console.error(err.stack);
  process.exit(1);
});