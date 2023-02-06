import RegisterForm from "./RegisterForm";
import { useState } from "react";
import Modal from "../../components/Modal";
export default function RegisterContainer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-6">
      <button
        className="font-medium text-purple-600 hover:underline"
        onClick={() => {
          setOpen(true);
        }}
      >
        Create New Account
      </button>

      <Modal
        open={open}
        doClose={() => {
          setOpen(false);
        }}
      >
        <RegisterForm
          doClose={() => {
            setOpen(false);
          }}
        />
      </Modal>
    </div>
  );
}
