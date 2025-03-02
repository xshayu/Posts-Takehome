export interface Post {
    id: number;
    title: string;
    body: string;
    tags: Array<string>;
    reactions: Record<"likes" | "dislikes", number>;
    views: number;
    userId: number;
};

export interface AllPosts {
    posts: Array<Post>;
    total: number;
    _lastFetched?: Date | null
};