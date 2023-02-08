import Joi from "joi";

const profilUserSchema = Joi.object({
  weight: Joi.string().required(),
  height: Joi.string().required(),
  user_gender: Joi.string().required(),
  user_bdate: Joi.string(),
});

const validateProfileUser = (input) => {
  const { error } = profilUserSchema.validate(input, {
    abortEarly: false,
  });
  return error;
};

export default validateProfileUser;
