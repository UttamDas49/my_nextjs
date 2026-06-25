'use client'

const posts=()=>{
    return(
        <div className='flex gap-4 flex-wrap'>
            {
                posts.map(post=>{
                    return (
                            <div className='border p-4'>
                             <Link href={`/blog/${post.Id}`}>
                                <h2 className='text-indigo-500'>{post.title}</h2>
                             </Link>
                            <p>{post.body}</p>
                            </div>
                    );

                })}

             </div>
    )
}

export default posts