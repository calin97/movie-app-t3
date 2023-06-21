import { useMemo, useState } from "react";
import NavbarLink from "./navbarLink";
import { HeaderLinkInfos } from "~/frontendRouts";
// import { cx } from "~/utils/cx";
import { api } from "~/utils/api";
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar() {
  const [activeHeaderLinkId, setActiveHeaderLinkId] = useState("home");
  const { data: sessionData } = useSession();
  console.log(HeaderLinkInfos);
  const {
    data: user,
    isLoading,
    isFetched,
  } = api.user.getMe.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  const isLoggedIn = useMemo(
    () => !isLoading && isFetched,
    [isFetched, isLoading]
  );

  return (
    <>
      <div className="flex h-16 w-full justify-between bg-black px-48">
        <div className=" hover:border-1 flex items-center gap-x-10 space-x-4 text-white-main">
          <div className="h-full w-16">
            <img
              className=" rounded-lg object-scale-down p-1"
              src="https://png.pngtree.com/png-vector/20190816/ourmid/pngtree-film-logo-design-template-vector-isolated-illustration-png-image_1693431.jpg"
            />
          </div>
          {HeaderLinkInfos.map((headerLinkInfo) => (
            <NavbarLink
              key={headerLinkInfo.text}
              headerLinkInfo={headerLinkInfo}
              isActive={activeHeaderLinkId === headerLinkInfo.id}
              setActiveHeaderLinkId={setActiveHeaderLinkId}
            />
          ))}
        </div>
        <div className=" flex items-center gap-x-5 text-white-main ">
          <p className="text-white text-center text-2xl">
            {isLoggedIn && <span>Logged in as {user?.name}</span>}
          </p>
          {/* <div>
            <button className="header-button">Log In</button>
          </div> */}
          <div>
            <button
              className="header-button"
              onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
              {isLoggedIn ? "Sign Out" : "Sign In"}
            </button>
          </div>
          <div className="">
            <img src={user?.image}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
