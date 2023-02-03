export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <>
      <input
        type={type || "text"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="block  w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400  focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </>
  );
}
