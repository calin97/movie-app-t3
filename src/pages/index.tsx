import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data: movies } = api.movies.getAll.useQuery();
  console.log(movies);

  return (
    <>
      <img
        className="background-img"
        src="https://wallpapers.com/images/featured/9pvmdtvz4cb0xl37.jpg"
        alt=""
      />

      <div className="my-10 px-48">
        <div className="h-full min-h-screen w-full flex-col bg-white-main">
          <div>HomePage</div>
        </div>
      </div>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-white text-center text-2xl">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="bg-white/10 text-white hover:bg-white/20 rounded-full px-10 py-3 font-semibold no-underline transition"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
