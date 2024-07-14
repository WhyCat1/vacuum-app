import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface Props {
  children?: string;
  href: Url;
}
const LinkNavButton: React.FC<Props> = ({ children, href }) => {
  return (
    <Link
      className="font-nunito font-size-24 text-regular hover:text-textNav transition duration-400"
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkNavButton;
