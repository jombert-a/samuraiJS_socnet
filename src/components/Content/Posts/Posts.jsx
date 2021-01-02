import Post from './Post/Post'
import s from './Posts.module.css'
function Posts() {
    return (
        <div className={s.posts}>
            last posts
            <Post message='hello world!'/>
            <Post message='multi post'/>
        </div>
    );
}

export default Posts;