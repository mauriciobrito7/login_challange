import { Router } from 'express'
import ProductsManager from '../dao/managers/productsManager.js'

const router = Router()

const productsManager = new ProductsManager()

router.get('/', async (req, res) => {
  try {
   const products = await productsManager.getProducts()
   res.render('products', {products})
  } catch (error) {
   console.log(error)
   res.status(500).json(error)
 }
})

export default router