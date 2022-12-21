function SearchInput(props) {

    return (
        <div className="col d-flex align-items-center justify-content-end">
            <input 
            onChange={(event) => {
                props.setSearchValue(event.target.value);
            }} 
            className="form-control w-75" 
            type="text" 
            placeholder="Search movie..."
            value={props.value}
            ></input>
        </div>
    )

}

export default SearchInput;