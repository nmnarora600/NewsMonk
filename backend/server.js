const express = require('express')
const axios=require('axios')
const cors=require('cors')
const app = express()
const port = 8080


app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/api', async (req, res) => {

  try {
    
  let url="https://newsapi.org/v2/top-headlines?" +req._parsedUrl.query
  let r=await axios(url)
  let a= r.data
  res.json(a);
  } catch (error) {
    res.status(500).send("Internal Server Error")
  }
  
  
})



app.listen(port, () => {
  console.log(`NewsMonk Backend running on port ${port}`)
})