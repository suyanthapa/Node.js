import Joi from 'joi'

const booksValidation = {

  body: Joi.object().keys({

    author: Joi.string().min(3).required(),
    title : Joi.string().min(3).required(),
    genre: Joi.string().min(3).required(),
    publishedYear: Joi.number().min(4).required(),
    rating: Joi.number().required(),

  })
}

export { booksValidation} 