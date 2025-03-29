export default async function Blog({ params }: { params: { id: string } }) {
    const res = await fetch(`http://localhost:3000/api/posts/${params.id}`);

    if (!res.ok) {
        return (
            <div className='container mx-auto max-w-3xl mt-6'>
                <h1 className='text-3xl font-bold'>We can&apos;t find this post!</h1>
            </div>
        );
    }

    const post = await res.json();

    return (
        <div className='container mx-auto max-w-3xl mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-sm'>
            <h1 className='text-3xl font-bold'>{post.title}</h1>
            <p className='text-gray-700 mt-4'>{post.content}</p>
        </div>
    );
}
