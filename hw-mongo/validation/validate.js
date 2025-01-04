import Joi from 'joi';

const Schema = Joi.object().keys({


  date: Joi.date().required(),
  source: Joi.string().min(3).required,
  updatedBy: Joi.string().min(3).required(),

  currencies: Joi.array().items(Joi.object().keys({

      name :Joi.string().min(3).required,
      exchangeRate: Joi.number().min(0).required(),
      foundIn: Joi.number().min(0).required(),

  })).required()



}).required()


// const validatedResult = Schema.validate()


