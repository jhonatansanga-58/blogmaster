import { NextResponse } from 'next/server';
import { posts } from '../route';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const post = posts.find((p) => p.id === parseInt(params.id));
    if (!post) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json(post);
}
