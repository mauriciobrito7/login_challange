import { Router } from 'express'
import ProductsManager from '../dao/managers/productsManager.js'
import { ProductsModel } from '../dao/models/products.model.js'

const productsRouter = Router()

const productsManager = new ProductsManager()

const productsMock = [
  {
    title: 'Escuadra',
    description: 'Es una herramienta para medir',
    price: 123.45,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',
    code: '123456',
    stock: 10,
  },
  {
    title: 'Calculadora',
    description: 'Es una herramienta para calcular',
    price: 234.56,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
    code: '234567',
    stock: 10,
  },
  {
    title: 'Globo Terráqueo',
    description: 'Es una herramienta para conocer el mundo',
    price: 345.67,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
    code: '345678',
    stock: 10,
  },
]

productsRouter.get('/create', async (req, res) => {
  try {
    await productsManager.addProduct(productsMock)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  }
)

productsRouter.get('/', async (req, res) => {
  const { limit = 10, page = 1, sort, query } = req.query
  let filter
  let sortOption
  if (query) {
    filter = query
  }
  if (sort) {
    sortOption = {
      'price': sort
    };
  }
  console.log(sortOption)
  try {
    const products = await ProductsModel.paginate({ filter }, { limit, page, sort: sortOption })
    res.json({
      status:'success',
      payload:products.docs,
      totalPages:products.totalPages,
      prevPage:products.prevPage,
      nextPage:products.nextPage,
      page:products.page,
      hasPrevPage: products.hasPrevPage,
      hasNextPage: products.hasNextPage,
      prevLink : products.prevLink,
      nextLink : products.nextLink,
      hasPrevPage: products.hasPrevPage,
      hasNextPage: products.hasNextPage,
    })

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 }
)

productsRouter.get('/:id', async (req, res) => {
  try {
    const product = await productsManager.getProductById(req.params.id)
    res.json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 }
)

productsRouter.post('/', async (req, res) => {
  try {
    const product = await productsManager.addProduct(req.body)
    res.json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 }
)

productsRouter.put('/:id', async (req, res) => {
  try {
    const product = await productsManager.updateProduct(req.params.id, req.body)
    res.json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 }
)

productsRouter.delete('/:id', async (req, res) => {
  try {
    const product = await productsManager.deleteProduct(req.params.id)
    res.json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 }
)

export default productsRouter
