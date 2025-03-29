import PostCard from '../../components/post-card';

export default async function Home() {
    const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
    const posts = await res.json();

    return (
        <div className='container mx-auto p-4'>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}
