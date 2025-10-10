import Head from "next/head";
const  about= () => {
    return (
    <>
      <Head>
          <title>Ninja list | About</title>
          <meta name="keywords" content="ninjas"/>
           <link rel="icon" href="/icon.png" />
      </Head>
    <div>
        <div className='px-20 mb-28'>
        <h1 className='text-5xl font-semibold my-14'>About</h1>
            <p className='text-xl text-gray-800 mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis earum odio? Nemo repellendus ad vitae obcaecati natus, voluptatibus fuga error quam eius dicta, velit vel ratione repudiandae quaerat est! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum odio necessitatibus consequatur vel</p>
            <p className='text-xl text-gray-800 mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis earum odio? Nemo repellendus ad vitae obcaecati natus, voluptatibus fuga error quam eius dicta, velit vel ratione repudiandae quaerat est! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum odio necessitatibus consequatur vel</p>
        </div>
    </div>
    </>
      );
}
 
export default  about;