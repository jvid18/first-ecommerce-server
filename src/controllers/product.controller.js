import Product from '../models/Product'

export const getProducts = async (req, res) => {
	const products = await Product.find()
	res.json(products)
}

export const getProductById = async (req, res) => {
}

export const createProduct = async (req, res) => {
	const {
		name,
		price,
		description,
		quantity,
	} = req.body

	const newProduct = new Product({ name, description, price, quantity })
	await newProduct.save()

	res.json(newProduct)
}


export const updateProductById = (req, res) => {
  
}

export const deleteProductById = (req, res) => {
  
}
