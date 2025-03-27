export default async function Home() {
    const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
    const posts = await res.json();

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-3xl font-bold'>Blogs</h1>

            {posts.map((post) => (
                <div
                    key={post.id}
                    className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'
                >
                    <div className='p-4'>
                        <h2 className='text-xl font-bold'>{post.title}</h2>
                        <p className='text-gray-500'>{post.content.toString().slice(0, 30)}...</p>
                        <a href={'/blog/${post.id}'} className='text-blue-600 hover:underline'>
                            Leer más
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
