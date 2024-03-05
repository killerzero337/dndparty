import Log from "@/components/botonLog";
import Menu from "@/components/Menu";
import { auth } from "@/auth";

async function Nav() {
  const sesion = await auth();

  return (
    <header
      className={`bg-amber-50  flex md:flex-row justify-around items-center md:justify-around md:px-5 font-Rounded font-bold `}
    >
      <Menu sesion={sesion} />
      <div>
        <Log sesion={sesion}/>
      </div>
    </header>
  );
}

export default Nav;
