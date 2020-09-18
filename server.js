const express = require("express")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3001
const app = express()
const path = require("path")
app.use(express.urlencoded({extended:true}))
app.use(express.json())
//parse the data to json
//middleware parsing creates req.body

const apiRoutes = require("./routes/apiRoutes")

app.use(apiRoutes)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks")

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
      });
  }

app.listen(PORT,function(){
    console.log("app is listening "+PORT)
})
