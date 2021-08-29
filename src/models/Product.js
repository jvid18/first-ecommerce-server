import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
		required: true,
		default: 0
	},
	quantity: {
		type: Number,
		required: true,
	},
	images: {
		small: {
			url: String,
			default: '',
		},
		medium: {
			url: String,
			default: '',
		},
		large: {
			url: String,
			default: '',
		}
	}
}, {
	timestamps: true,
	versionKey: false,
})

export default model('Product', ProductSchema)
