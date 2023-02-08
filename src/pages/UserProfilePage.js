import Joi from "joi";

const initialInput = {
  weight: "",
  height: "",
  user_gender: "",
  user_bdate: "",
};

const profilUserSchema = Joi.object({
  weight: Joi.string().required(),
  height: Joi.string().required(),
  user_gender: Joi.string().required(),
  user_bdate: Joi.string(),
});

const validateProfileUser = (input) => {
  return profilUserSchema.validate(input, {
    abortEarly: false,
  });
};

export default function UserForm() {
  const handleSubmitForm = async (e) => {
    try {
    } catch (err) {}
  };
  return (
    <form>
      <div class="relative z-0 w-full mb-6 group">
        <input />
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
