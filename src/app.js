import express from 'express'
import { __dirname } from './utils.js'
import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
import viewRouter from './routes/view.router.js'
import sessionsRouter from './routes/session.router.js'
import './dbConfig.js'
import handlebars from 'express-handlebars'
import session from 'express-session'
import mongoStore from 'connect-mongo'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))
app.use('/products',productsRouter)
app.use('/carts',cartsRouter)
//session mongo
app.use(session({
    store: new mongoStore({
      mongoUrl: 'mongodb+srv://mauriciobrito7:DqO3lP6lIhXjKTP4@cluster0.r4mumqa.mongodb.net/ecommerce_test?retryWrites=true&w=majority'
    }),
    resave: true,
    saveUninitialized:true,
    secret: 'secretKey',
    cookie: {maxAge: 60000}
  }))

// handlebars
app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')
app.use('/products',viewRouter)
app.use('/session', sessionsRouter)

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})