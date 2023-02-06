import Joi from "joi";

const reqisterSchema = Joi.object({
  user_firstname: Joi.string().trim().required(),
  user_lastname: Joi.string().trim().required(),

  emailOrMobile: Joi.alternatives().try(
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/)
  ),
  password: Joi.string().alphanum().min(6).required().trim(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().trim(),
  role: Joi.string().required(),
});

const validateRegister = (input) => {
  const { error } = reqisterSchema.validate(input, {
    abortEarly: false,
  });
  return error;
};

export default validateRegister;
