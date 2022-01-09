import React, { useContext, useState } from "react";
import axios from 'axios';

const MovieContext = React.createContext();

export function useMovie() {
    return useContext(MovieContext);
}
export function MovieProvider(props) {

    const [selectedSortBy, setSelectedSortBy] = useState("popularity.desc");

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    const [checkedState, setCheckedState] = useState(
        new Array(4).fill(false)
    );

    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        axios.get('https://reactnative.dev/movies.json')
        .then(response => {
            setMovies(response.data.movies);
        })
    }

    return (
        <MovieContext.Provider value={{
                selectedSortBy, 
                setSelectedSortBy,
                startDate,
                setStartDate,
                endDate,
                setEndDate,
                checkedState,
                setCheckedState,
                movies,
                setMovies,
                fetchMovies,
            }}>
            {props.children}
        </MovieContext.Provider>
    )
}