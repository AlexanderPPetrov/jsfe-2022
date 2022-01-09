import { Card, Form, Button } from "react-bootstrap";
import SortBy from "./SortBy";
import FilterByDate from "./FilterByDate";
import Genres from "./Genres";
import {useMovie} from "../movies/MovieContext";
import {useEffect} from "react";
import moment from "moment";

const checkboxes = [
    {
        value: 28,
        label: "Екшън",
        id: "action",
    },
    {
        value: 35,
        label: "Комедия",
        id: "comedy",
    },
    {
        value: 12,
        label: "Приключенски",
        id: "adventure",
    },
    {
        value: 80,
        label: "Криминален",
        id: "criminal",
    },
]


function Filters(props) {
    
    const {
        selectedSortBy,
        startDate,
        endDate,
        checkedState,
        fetchMovies,
    } = useMovie();

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    function filtersOnSubmit(e) {
        e.preventDefault();
        console.log(selectedSortBy)
        console.log(getDateRange())
        const options = getCheckedOptions();
        console.log(options);
    }

    function getDateRange() {
        const dateFrom = moment(startDate).format('YYYY-MM-DD');
        const dateTo = moment(endDate).format('YYYY-MM-DD');
        return {
            'release_date.gte': dateFrom,
            'release_date.lte': dateTo,
        }
    }

    function getCheckedOptions() {
        return checkedState.reduce((acc, curr, index) => {
            if(curr){
                return [...acc, checkboxes[index].value]
            }
            return acc
        }, [])
    }

    return (
        <Card className="mt-2 mt-md-0">
            <Card.Body>
                <Card.Title className="mb-3">Филтри</Card.Title>
                <Form onSubmit={filtersOnSubmit}>
                    <SortBy/>
                    <FilterByDate/>
                    <Genres checkboxes={checkboxes}/>
                    <Button 
                        variant="primary" 
                        type="submit">
                        Намери
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default Filters;