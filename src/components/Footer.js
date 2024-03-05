import React from "react";

function Footer() {
  return (
    <footer className="bg-amber-50 flex flex-col md:flex-row justify-around items-center font-Rounded font-bold rounded-sm fixed bottom-0 w-full h-20">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between sm:justify-center">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2023{" "}
            <a
              href="https://dnd.wizards.com/"
              className="transition duration-500 hover:text-red-700 inline-block"
            >
              Dungeons and Dragons™
            </a>
            . Todos los derechos reservados.
          </p>
        </div>
        <hr className="border-gray-200 sm:mx-4 dark:border-red-700 lg:my-4 w-full sm:w-auto" />
        <div className="flex items-center justify-center text-bold">
          <ul className="flex flex-wrap mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 space-x-5 sm:justify-center sm:items-center">
            <li>
              <a
                href="#"
                className="transition duration-500 hover:text-red-700"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition duration-500 hover:text-red-700"
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition duration-500 hover:text-red-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
