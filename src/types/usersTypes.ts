

interface UserRecentPosts {
    id: string;
    name: string;
    posts: UserPost[];
}

interface UserPost {
    id: string;
    title: string;
    body: string;
    created_at: string;
}


export type {
    UserRecentPosts,
    UserPost,
}
