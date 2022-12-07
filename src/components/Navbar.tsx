import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Navbar: NextPage = () => {
  return (
    <nav className="flex h-36 items-center justify-between bg-red-200 py-4 px-10 text-2xl font-medium">
      <div className="flex h-full items-center gap-20 bg-blue-200 pl-11">
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
      <div className="flex h-full items-center gap-10 bg-green-200">
        <Link href="/login">Sign Up</Link>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="🔍 Search Here..."
          className="w-48 rounded-full bg-gray-300 px-4 py-2 text-sm text-black"
        />
      </div>
    </nav>
  );
};

export default Navbar;
