import { logout } from "@/lib/actions";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

async function page() {
  const sesion = await auth();

  if (sesion) {
    const { user } = sesion;
    console.log(sesion);

    return (
      <>
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <h1 className="text-2xl mb-4">Cerrar sesión</h1>

          <form className="container flex flex-col items-center gap-4 border-2 border-red-700 p-8 rounded-md bg-amber-50/80">
            <label className="text-black">
              Nombre:
              <input
                type="text"
                name="name"
                value={user.name}
                readOnly
                className="w-full text-black bg-amber-100"
              />
            </label>
            <label className="text-black">
              Email:
              <input
                type="email"
                name="email"
                value={user.email}
                readOnly
                className="w-full text-black bg-amber-100"
              />
            </label>
            {user.image ? (
              <img
                src={user.image}
                alt={`Imagen de ${user.name}`}
                className="rounded-full w-20 h-20"
              />
            ) : (
              <img
                src="/user.svg"
                alt={`Imagen de ${user.name}`}
                className="rounded-full w-20 h-20"
              />
            )}
            <button
              formAction={logout}
              className="bg-red-600 bg-center bg-[url('/door.png')] bg-no-repeat h-20 md:rounded-xl sm:rounded-[50%] md:w-28 sm:w-[5rem] cursor-pointer"
            ></button>
          </form>
        </div>
      </>
    );
  } else {
    redirect("/auth/login");
  }
}

export default page;
