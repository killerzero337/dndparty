import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-[8vh]">
      <div className="text-center  text-stone-500 container  items-center border-2 border-red-700 p-8 rounded-md bg-amber-50/80">
        <h1>Error 404</h1>
        <Link href="/" className="transition animate-pulse duration-500 hover:text-red-700">
          Click aqui para volver
        </Link>
      </div>
    </div>
  );
}
