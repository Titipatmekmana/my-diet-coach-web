import Joi from "joi";

const reqisterSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),

  emailOrMobile: Joi.alternatives().try(
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/)
  ),
  password: Joi.string().alphanum().min(6).required().trim(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().trim(),
});

const validateRegister = (input) => {
  const { error } = reqisterSchema.validate(input, {
    abortEarly: false,
  });
  return error;
};

export default validateRegister;
