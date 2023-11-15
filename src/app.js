import express from 'express'
import __dirname from './utils.js'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.routes.js'
import  productsRouter from './routes/products.routes.js'
import { Server } from 'socket.io'

const PORT = 8080
const app = express()
const httpServer = app.listen(PORT,() => { console.log(`Escuchando puerto ${PORT}`) })

const io = new Server(httpServer)

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

app.use('/', viewsRouter)
app.use('/api/products/', productsRouter)


io.on('connection', socket => {
    console.log(`Cliente conectado`)
})

export { io }  