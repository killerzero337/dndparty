"use client";
import { useFormStatus } from "react-dom";

function Button({ title }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-red-600 bg-center text-[1.5vh] text-white bg-no-repeat h-16 md:rounded-xl sm:rounded-[50%] md:w-28 sm:w-[5rem] cursor-pointer"
    >
      {title}
    </button>
  );
}

export default Button;
