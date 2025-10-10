import Head from "next/head";
import Link from "next/link";
export const getStaticProps = async() => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    return {
        props: { ninjas: data}
    }
}
const Ninjas = ({ninjas}) => {
    return ( 
        <>
           <Head>
          <title>Ninja list | Ninjas</title> 
          <meta name="keywords" content="ninjas"/> 
          <link rel="icon" href="/icon.png" />
      </Head>
         <div className='px-20 mb-28'>
    <h1 className='text-5xl font-semibold my-14'>All Ninjas</h1>
    {ninjas.map(ninja => (
         <div key={ninja.id} className="">
            <Link href={"/ninjas/"+ninja.id}>
            <h3 className="bg-white p-4 py-8 px-10  font-medium text-xl text-gray-800 mb-4 w-full relative before:w-0 before:top-0 before:rotate-90 before:h-2 before:bg-blue-500 before:absolute before:left-0 before:transition-all before:duration-300 hover:before:w-[91px] hover:before:top-[42px] hover:before:-left-10">{ ninja.name}</h3></Link>
         </div>
    ))}
  </div>
 </>
     );
}
 
export default Ninjas;
