import './Cattyitem.css';


function CattyItem(props) {

    const { catty, onCattyClick } = props;
    return (
        <div className="catty-item">
          <img src={catty.thumbnailUrl} onClick={() => {onCattyClick(catty)}} />
          <h4>{catty.title}</h4>
        </div>
    );
}

export default CattyItem;