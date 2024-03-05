"use client";
import Link from "next/link";

async function botonLog({sesion}) {
  
  if (sesion == null) {
    return (
      <Link href="/auth/login">
        <button className="md:p-2 lg:p-2 rounded-lg md:w-28 bg-red-700 sm:w-16 sm:p-1 transition duration-500 hover:bg-red-800 hover:shadow-xl">
          Login
        </button>
      </Link>
    );
  } else {
    return (
      //   <button className="flex flex-col items-center md:p-2 lg:p-2 rounded-lg md:w-28 bg-red-700 sm:w-16 sm:p-1 transition duration-500 hover:bg-red-800 hover:shadow-xl">
      <div className="flex justify-center items-center bg-red-700 h-24 w-24 bg-center rounded-[16px] ">
        <button
          className={`w-16 h-26 p-1 rounded-full bg-[${sesion?.user.image}]`}
        >
          <img src={sesion?.user.image} className="rounded-full mb-2" />
          <Link href="/auth/logout">Logout</Link>
        </button>
      </div>
    );
  }
}

export default botonLog;
