import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center sm:h-[88vh] py-5 md:h-[80vh] p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-10 md:gap-10">
        <div className="text-center text-stone-500 container items-center border-2 border-red-700 p-8 rounded-md bg-amber-50/80 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div
              className="bg-[url('/world.svg')] bg-contain bg-no-repeat bg-center sm:w-16 sm:h-12
           md:w-[4rem] md:h-[4rem]"
            ></div>
          </div>
          <p>
            ¡Únete a la aventura y forja tu propio destino en el reino de la
            fantasía! ¿Estás listo para sumergirte en emocionantes campañas de
            juego de rol? Únete a una partida y descubre un mundo lleno de
            misterios, monstruos, tesoros y decisiones que darán forma a tu
            historia.
          </p>
        </div>

        <div className="text-center text-stone-500 container items-center border-2 border-red-700 p-8 rounded-md bg-amber-50/80 relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div
              className="bg-[url('/book.svg')] bg-contain bg-no-repeat bg-center sm:w-16 sm:h-12
           md:w-[4rem] md:h-[4rem]"
            ></div>
          </div>
          <p>
            ¡Bienvenido, maestro de mazmorras! Prepara tus dados y adéntrate en
            un mundo lleno de magia y aventuras. Únete como Dungeon Master y
            desata tu creatividad en la forja de historias épicas. Domina el
            arte de la narración.
          </p>
          <button className="md:p-5 lg:p-2 rounded-lg md:w-28 bg-red-600 sm: w-56 sm:p-1 transition duration-500 hover:bg-red-800 hover:shadow- text-stone-100 ">
            <Link href="/api/auth/signin">Iniciar como DM</Link>
          </button>
        </div>

        <div className="text-center text-stone-500 container items-center border-2 border-red-700 p-8 rounded-md bg-amber-50/80 lg:col-auto md:col-span-full relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div
              className="bg-[url('/user.svg')] bg-contain bg-no-repeat bg-center sm:w-16 sm:h-12
           md:w-[4rem] md:h-[4rem]
          "
            ></div>
          </div>
          <p>
            ¡Explora mundos mágicos y emprende tu viaje épico como aventurero
            intrépido! Bienvenido, jugador, a la tierra de la fantasía donde los
            destinos están entrelazados por la trama que tú mismo forjarás.
          </p>
          <button className="md:p-5 lg:p-2 rounded-lg md:w-28 bg-red-600 sm: w-56 sm:p-1 transition duration-500 hover:bg-red-800 hover:shadow- text-stone-100 ">
            <Link href="/api/auth/signin">Iniciar como jugador</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
