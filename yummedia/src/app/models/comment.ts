import { User } from "./user";
import { Post } from "./post";


export interface Comment{

    comment_id: number;
    commentDescription: string;
    user: User;
    post: Post;
}