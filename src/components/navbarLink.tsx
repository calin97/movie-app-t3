import Link from "next/link";
import { string } from "zod";
import { HeaderLinkInfo } from "~/frontendRouts";
interface NavbarLinkPropType {
  headerLinkInfo: HeaderLinkInfo;
  isActive: boolean;
  setActiveHeaderLinkId: (newState: string) => void;
}

function NavbarLink(props: NavbarLinkPropType) {
  const navBarLinkHandler = () => {
    props.setActiveHeaderLinkId(props.headerLinkInfo.id);
    console.log(props.headerLinkInfo.id);
  };

  return (
    <Link
      className={`transition-all ${
        props.isActive ? " text-context-orange" : ""
      } duration-300 hover:text-context-orange`}
      href={props.headerLinkInfo.href}
      onClick={navBarLinkHandler}
    >
      {props.headerLinkInfo.text}
    </Link>
  );
}

export default NavbarLink;
