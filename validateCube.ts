import { NextFunction, Response } from "express"
import Joi from "joi"
let schema = Joi.object({
    panjang: Joi.number().required().min(1),
    lebar: Joi.number().required().min(1),
    tinggi: Joi.number().required().min(1,)
})

let validateCube = (request:Request, response:Response, next:NextFunction) => {
    let {error} = schema.validate (request.body)
    if(error){
        /** status 400 is bad request */
        return response.status(400).json({
            message: error.details
        })
    }
    next()
}

export {validateCube}