import s from './Post.module.css'
function Post(props) {
    return (
        <div className={s.post}>
            {props.message}
        </div>
    );
}

export default Post;