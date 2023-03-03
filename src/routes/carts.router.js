import { Router } from 'express'
import CartsManager from '../dao/managers/cartsManager.js'

const cartsRouter = Router()

const cartsManager = new CartsManager()

cartsRouter.get('/', async (req, res) => {
  try {
    const cart = await cartsManager.getCart()
    res.json(cart)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 }
)

cartsRouter.post('/', async (req, res) => {
  try {
    const product = await cartsManager.addProductToCart(req.body)
    res.json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 }
)

cartsRouter.delete('/:id', async (req, res) => {
  try {
    const product = await cartsManager.deleteProductFromCart(req.params.id)
    res.json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 }
)

cartsRouter.delete('/', async (req, res) => {
  try {
    const product = await cartsManager.deleteAllProductsFromCart()
    res.json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 }
)

export default cartsRouter
