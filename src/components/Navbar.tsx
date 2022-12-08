import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Navbar: NextPage = () => {
  return (
    <nav className="flex h-36 items-center justify-between py-4 px-10 text-2xl font-medium">
      <div className="flex h-full items-center gap-20 pl-11">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Solo Leveling"
            width={100}
            height={100}
            className="mr-6"
          />
        </Link>
        <Link href="/">Home</Link>
        <Link href="/characters">Characters</Link>
        <Link href="/help">Help</Link>
      </div>
      <div className="flex h-full items-center gap-10">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="🔍 Search Here..."
          className="w-48 rounded-full bg-gray-300 px-4 py-2 text-sm text-black focus:outline-dotted active:outline-dotted"
        />
      </div>
    </nav>
  );
};

export default Navbar;
