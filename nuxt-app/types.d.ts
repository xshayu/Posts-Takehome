export interface Post {
    id: number;
    title: string;
    body: string;
    tags: Array<string>;
    reactions: Record<"likes" | "dislikes", number>;
    views: number;
    userId: number;
};