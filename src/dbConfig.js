import mongoose from 'mongoose'

const URI_MONGO =
  'mongodb+srv://mauriciobrito7:DqO3lP6lIhXjKTP4@cluster0.r4mumqa.mongodb.net/ecommerce_test?retryWrites=true&w=majority'
mongoose.connect(URI_MONGO, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Conectado a la base de datos')
  }
})