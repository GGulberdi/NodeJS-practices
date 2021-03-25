import React from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard';
import { Grid, Image } from 'semantic-ui-react'

function MoviesList({ movies }) {
    const movieList =
        <Grid>
            <Grid.Row columns={4}>
                {movies.map((movie) => (
                    <Grid.Column key={movie.id}>
                        <MovieCard movie={movie} />
                    </Grid.Column>
                ))};
     </Grid.Row>
        </Grid>

    const emptyMessage = <div>Loading or thete are no movies</div>
    console.log('here is' + movies)
    return (
        <div>
            {movies.length === 0 ? emptyMessage : movieList}</div>
    )
}

MoviesList.propTypes = { movies: PropTypes.object.isRequired }

export default MoviesList

