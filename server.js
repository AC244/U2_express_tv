const express = require('express')
// const cors = require('cors')
const showsController = require('./controllers/ShowsControllers.js')
const PORT = process.env.PORT || 30075

const app = express()
// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
console.log(`Express server running on port localhost:${PORT}`)
})



app.get('/', (req, res) => {
    res.send('Welcome to my TV Show Server :)')
})

app.get('/shows', showsController.getShows)
app.get('/animations', showsController.getAnimations)
app.get('/animations/:id', showsController.getAnimationsById)
app.get('/dramas', showsController.getDramas)
app.get('/dramas/:id', showsController.getDramasById)
app.get('/reality', showsController.getReality)
app.get('/reality/:id', showsController.getRealityById)