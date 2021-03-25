//rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MovieList from '../MoviesList'
import{fetchMovies} from '../../actions/movieAction';
import {ScaleLoader} from "react-spinners";







export class MoviesPage extends Component {

    componentDidMount() {
        this.props.fetchMovies();
    }
    // static propTypes={moviesReducer:PropTypes.object.isRequired}
    static propTypes={moviesReducer:PropTypes.shape({movies:PropTypes.array.isRequired}).isRequired}

    render() {
        console.log(this.props)
        const errMessage=this.props.moviesReducer.error.message;
        return (
            <div>
                <h1> Movie List</h1>
            <ScaleLoader color={'red'} loading={this.props.moviesReducer.fetching}></ScaleLoader>

                {errMessage?(<h3>Error data ({errMessage})</h3>)
                :
                 (
                 <MovieList movies={this.props.moviesReducer.movies}/>
              
                 )}
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({ movies:state.moviesReduer});//version 1
const mapStateToProps = ({moviesReducer}) => ({moviesReducer}); //version2


const mapDispatchToProps = {fetchMovies}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
