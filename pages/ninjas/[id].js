export const getStaticPaths=async() =>{
        const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    const paths=data.map(ninja => {
        return {
            params: {id: ninja.id.toString()}
        }
    } )
    return {
        paths,
        fallback: false
    }
}
export const getStaticProps = async ({params}) => {
    const res=await fetch('https://jsonplaceholder.typicode.com/users/'+params.id);
    const data=await res.json();
    return {
        props: {ninja: data}
    }
}
const Details = ({ninja}) => {
    return ( 
        <div className="px-28 mb-20 flex flex-col gap-6">
                <h1 className='text-4xl font-semibold text-black'>{ ninja.name}</h1>
                <p className="text-xl text-gray-500">{ninja.email}</p>
                <p className="text-xl text-gray-500">{ninja.website}</p>
                <p className="text-xl text-gray-500">{ninja.address.city}</p>
        </div>
     );
}
 
export default Details;