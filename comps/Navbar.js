import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return ( 
    <nav className="flex justify-between items-center p-4 mb-28 px-20 after:absolute after:left-0 after:top-36  after:w-11/12 after:mx-20 after:h-[1px] after:bg-gray-300">
      <div>
        <Image src="/logo.png" alt="logo" width={140} height={70} />
      </div>
      <div className="flex space-x-4 pt-10">
        <Link href="/" className="text-xl hover:text-black relative before:content[''] before:absolute before:w-0 before:h-[2px] before:bg-gray-500 hover:before:w-full before:transition-all before:duration-300 before:left-0 before:bottom-0">Home</Link>
        <Link href="/about" className="text-xl  hover:text-black relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-gray-500 before:transition-all before:duration-300 hover:before:w-full">About</Link>
        <Link href="/ninjas" className="text-xl  relative  
             before:content-[''] before:absolute before:left-0 before:bottom-0 
             before:w-0 before:h-[2px] before:bg-gray-500
             before:transition-all before:duration-300
             hover:before:w-full
             ">Ninja list</Link>
      </div>
    </nav>
    );
}
export default Navbar;