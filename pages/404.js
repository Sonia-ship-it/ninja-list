import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router=useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [])
    return ( 
        <div className="mb-20 px-20 flex flex-col items-center gap-10 justify-center">
            <h1 text-4xl className="text-4xl font-semibold text-black">Oooops...</h1>
            <h2 className="text-4xl font-semibold text-black">That Page cannot be found</h2>
            <p className="text-xl">Go back to the <Link href="/" className="text-blue-500 hover:underline">Homepage</Link>
            </p>
        </div>
     );
}
 
export default NotFound;