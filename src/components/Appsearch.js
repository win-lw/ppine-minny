import './Appsearch.css';


function Appsearch(props) {
    const { value, onValueChange } = props;
    return (
        <div className="app-search">
        <input 
             className="search__input"
             type="text"
             placeholder="Search ?"
             value={value}
             onChange={(event) => {onValueChange(event.target.value)}}
        />

      </div>
    )
}

export default Appsearch;