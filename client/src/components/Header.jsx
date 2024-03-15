import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar className="border-b-2">
        <Link to="/" className="self-center whitespace-nowrap text-small sm:text-xl font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-400 rounded-lg text-white">Anril&apos;s</span>Blog
        </Link>
        <form>
            <TextInput
                type="text"
                placeholder="Search"
                icon={AiOutlineSearch}
                className="hidden lg:inline"
            />
            <Button className="w-12 h-10 lg:hidden" color='gray' pill>
                <AiOutlineSearch />
            </Button>
            <div className="">
                <Button className="w-12 h-10 lg:hidden sm:inline" color='gray' pill>
                    <FaMoon />
                </Button>
                <Link to={"/sign-in"} className="self-center whitespace-nowrap text-small sm:text-xl font-semibold dark:text-white">
                    Sign-In
                </Link>
            </div>
        </form>
    </Navbar>
  )
}
