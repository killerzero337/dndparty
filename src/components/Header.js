"use client";
import Link from "next/link";
import { useState } from "react";
import Log from "@/components/botonLog";
function Header() {
  const [navAbierta, setNavAbierta] = useState(false);

  const toggleNav = () => {
    setNavAbierta(!navAbierta);
  };

  return (
    <header
      className={`bg-amber-50  flex md:flex-row justify-around items-center md:justify-around md:px-5 font-Rounded font-bold h-${
        navAbierta ? "md:h-16" : "md:h-40"
      }`}
    >
      <div className="container bg-cover bg-no-repeat bg-center lg:h-28 lg:w-32 bg-[url('/dnd-logo.svg')] sm:w-auto sm:h-14 sm:aspect-square "></div>
      <div className="hidden lg:flex">
        <ul className="flex space-x-5 text-stone-500 md:space-x-32 text-[2vh]">
          <li className="transition duration-500 hover:text-red-700">
            <Link href="/">Inicio</Link>
          </li>
          <li className="transition duration-500 hover:text-red-700">
            <Link href="/">Partida</Link>
          </li>
          <li className="transition duration-500 hover:text-red-700">
            <Link href="/about">Sobre nosotros</Link>
          </li>
        </ul>
      </div>
      <div className="lg:hidden">
        <div
          className={`space-y-2 bg-[url('/ham.svg')] block h-9 w-8 bg-no-repeat bg-contain cursor-pointer ${
            navAbierta ? "hidden" : ""
          }`}
          onClick={toggleNav}
        ></div>
        <div
          className={`space-y-2 bg-[url('/close.svg')] block h-9 w-8 bg-no-repeat bg-contain cursor-pointer ${
            !navAbierta ? "hidden" : ""
          }`}
          onClick={toggleNav}
        ></div>
      </div>
      {navAbierta && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-amber-50 z-10 transition duration-500">
          <ul className="transition duration-500 flex flex-col space-y-2 text-stone-500 text-sm p-4 justify-center items-center">
            <li>
              <Link
                href="/"
                className="transition duration-500 hover:text-red-700"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="transition duration-500 hover:text-red-700"
              >
                Partida
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="transition duration-500 hover:text-red-700"
              >
                Sobre nosotros
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div>
        <Log />
      </div>
    </header>
  );
}

export default Header;
