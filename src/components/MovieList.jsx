function MovieList(props) {
	const FavouriteComponent = props.favouriteComponent;

    return (
        
        <div>
        
        <div className="image-container d-flex justify-content-start m-3">


        {props.posters.map(  (poster) => {
                return(
                    <div>
                        <img className="moviePoster m-3" src={poster.Poster} alt="poster"></img>
                        <div onClick={ () => {
                            props.onAdd(poster);
                        }}
                                >
                        <FavouriteComponent />


                        </div>
   
                    </div>
                    )
        })}
        </div>


        </div>
    )

}


export default MovieList;