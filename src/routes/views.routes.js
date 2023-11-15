import express from 'express'
import ProductManager from '../../ProductManager.js'

const productManager = new ProductManager()
const router = express.Router()

const products = productManager.getProducts()

router.get('/', (req, res) => {
    res.render('index', {products})
})

router.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts', {products})
})

export default router
