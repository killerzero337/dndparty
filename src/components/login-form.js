  "use client";
  import { useState } from "react";
  import { login } from "@/lib/actions";
  import Button from "@/components/button-form";
  import Link from "next/link";
  function LoginForm() {
    const [resultado, setResultado] = useState("");
    const [tipo, setTipo] = useState("");

    async function wrapper(data) {
      const message = await login(data); 
      if (message?.success) {
        setTipo("success");
        setResultado(message.success);
      }
      if (message?.error) {
        setTipo("error");
        setResultado(message.error);
      }
    }
    return (
      <form
        action={wrapper}
        className="credentials flex flex-col items-center text-stone-500"
      >
        <div className="flex flex-col items-center mb-4 ">
          <label className="mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="nombre@gmail.com"
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col items-center mb-4">
          <label className="mb-2">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="******"
            className="border p-2 rounded"
          />
        </div>
        <div className="flex justify-around gap-5">
          <p className={`info ${tipo} mb-4`}> {resultado} </p>
          <Button title="Iniciar sesion" />
          <Link
            href="/auth/register"
            className="bg-red-600 flex items-center justify-center text-[1.5vh] text-white bg-no-repeat h-16 md:rounded-xl sm:rounded-[20%] sm:p-5 md:w-28 sm:w-[5rem] md:p-0 cursor-pointer"
          >
            Crear cuenta
          </Link>
        </div>
      </form>
    );
  }

  export default LoginForm;
