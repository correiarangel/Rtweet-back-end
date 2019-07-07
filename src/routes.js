const express = require('express')

const routes = express.Router();

const TweetController = require('./controller/TweetController')
const LikeController = require('./controller/LikeController')
routes.get('/tweets',TweetController.index)
routes.post('/tweets',TweetController.store)

//curtidas
routes.post('/likes/:id',LikeController.store)
routes.post('/dislikes/:id',LikeController.revertStore)

module.exports = routes