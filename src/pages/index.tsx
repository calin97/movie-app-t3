/* eslint-disable @next/next/no-img-element */
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { api } from "~/utils/api";
import { Text } from "~/components/text";

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

      <div className=" my-10 h-full w-full px-48">
        <div className="bg-transparent darkglassgradient flex h-full w-full  justify-center gap-40 space-x-10 rounded-md p-10">
          <div className=" flex h-1/2 w-1/2 items-center justify-center text-center text-white-main">
            <Text variant="h1">Escape in the movie verse with MovieApp</Text>
          </div>
          <div className="h-1/2 w-1/2 text-white-main">
            <Text variant="description" className="text-center">
              This movie application enables you to explore your favorite
              movies, actively contribute by rating them, leaving comments, and
              adding upcoming movies to your watchlist. To access these
              features, simply register with your Gmail account. Rest assured,
              all your data is protected under GDPR.
            </Text>
            <div className="mt-10 flex justify-between p-10">
              <button className="generic-button">GO TO MOVIELIST</button>
              <button className="generic-button">REGISTER NOW</button>
              {/* <AuthShowcase /> */}
            </div>
          </div>
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
