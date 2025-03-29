export default function PostCard({ post }) {
    return (
        <a
            href={`/blog/${post.id}`}
            className='block mb-4 max-w-md mx-auto p-5 bg-white border border-gray-300 group
          rounded-xl shadow-md hover:shadow-2xl hover:bg-blue-400 overflow-hidden md:max-w-2xl
          transition-all duration-300 ease-in-out'
        >
            <h5
                className='mb-2 text-xl font-bold tracking-tight text-gray-900
            group-hover:text-white transition-all duration-300'
            >
                {post.title}
            </h5>
            <p className='font-normal text-gray-600 group-hover:text-white transition-all duration-300'>
                {post.content.toString().split(' ').slice(0, 20).join(' ')}...
            </p>
        </a>
    );
}
