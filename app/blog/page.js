import Link, {} from 'next/link'
export default async function BlogPage(){
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await data.json();
    // const posts = [
    //     {
    //         Id:1,
    //         title:" post 1",
    //         body: 'post 1 body',
    //     },
    //     {
    //         Id:2,
    //         title:"post 2",
    //         body: 'post 2 body',
    //     }
    // ]
    
    
    return (<div>
          
             <h1>Blog posts</h1>
             
            </div>
    );

}