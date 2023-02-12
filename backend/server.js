require('dotenv').config()

const cors = require('cors');
const express = require('express')
const Routes = require('./routes/routes')


// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use(cors({
  origin: '*'
}));

// routes
app.use('/api/', Routes)

app.get("/", (req, res) => {
  res.send("Server is running!");
});


const port = parseInt(process.env.PORT, 10) || 5001;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}).on('error', (error) => {
  console.error(`Failed to start server: ${error.message}`);
});
  