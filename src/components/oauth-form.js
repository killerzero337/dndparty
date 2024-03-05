import {
  loginGoogle,
  loginGithub,
  loginTwitch,
  loginSpotify,
} from "@/lib/actions";

function OAuthForm() {
  return (
    <form className="container flex flex-col items-center gap-4  p-8 rounded-md ">
      <div className="flex flex-row gap-10 mt-4">
        <button
          formAction={loginGoogle}
          className="bg-red-600 bg-center bg-[url('/google.svg')] bg-no-repeat h-20 md:rounded-xl sm:rounded-[50%] md:w-28 sm:w-[5rem] cursor-pointer"
        ></button>
        <button
          formAction={loginGithub}
          className="bg-red-600 bg-center bg-[url('/github.svg')] bg-no-repeat h-20 md:rounded-xl sm:rounded-[50%] md:w-28 sm:w-[5rem] cursor-pointer"
        ></button>
        <button
          formAction={loginTwitch}
          className="bg-red-600 bg-center bg-[url('/twitch.svg')] bg-no-repeat h-20 md:rounded-xl sm:rounded-[50%] md:w-28 sm:w-[5rem] cursor-pointer"
        ></button>
        <button
          formAction={loginSpotify}
          className="bg-red-600 bg-center bg-[url('/spotify.svg')] bg-no-repeat h-20 md:rounded-xl sm:rounded-[50%] md:w-28 sm:w-[5rem] cursor-pointer"
        ></button>
      </div>
    </form>
  );
}

export default OAuthForm;
