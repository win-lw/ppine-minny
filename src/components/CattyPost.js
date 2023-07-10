import './CattyPost.css';

function CattyPost(props){
    const { catty, onBgClick } = props;
    return(
        <div className="catty-post">
            <div className="catty-post-bg" onClick={onBgClick} />
            <div className="catty-post-content">
                <img src={catty.thumbnailUrl} />
                <h4>{catty.title}</h4>
            </div>
        </div>

    );
}

export default CattyPost;