import NavbarLink from "./navbarLink";
import { HeaderLinkInfos } from "~/frontendRouts";

function Navbar() {
  console.log(HeaderLinkInfos);
  return (
    <>
      <div className="flex w-full justify-between">
        <div className="flex gap-x-10 space-x-4">
          <img src="https://png.pngtree.com/png-vector/20190816/ourmid/pngtree-film-logo-design-template-vector-isolated-illustration-png-image_1693431.jpg"></img>
          {HeaderLinkInfos.map((headerLinkInfo) => (
            <NavbarLink
              key={headerLinkInfo.text}
              headerLinkInfo={headerLinkInfo}
            />
          ))}
        </div>
        <div className="flex gap-x-10">
          <div>
            <button>Log In</button>
          </div>
          <div>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
