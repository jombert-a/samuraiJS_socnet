import Post from './Post/Post'
import s from './Posts.module.css'
let postsData = [
    {id: 1, message:'hello world!'},
    {id: 2, message:'hello world!!'},
    {id: 3, message:'hello world!!!'},
    {id: 4, message:'hello world!!!!'},
]
let postsArray = postsData.map(el => <Post message={el.message} />);
const Posts = (props) => {
    return (
        <div className={s.posts}>
            last posts
            {postsArray}
        </div>
    );
}

export default Posts;