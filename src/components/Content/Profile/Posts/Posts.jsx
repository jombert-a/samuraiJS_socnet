import Post from './Post/Post'
import s from './Posts.module.css'
const Posts = (props) => {
    let postsArray = props.postsData.map(el => <Post message={el.message} />);
    return (
        <div className={s.posts}>
            last posts
            {postsArray}
        </div>
    );
}

export default Posts;