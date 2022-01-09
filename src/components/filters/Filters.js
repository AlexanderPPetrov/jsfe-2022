import { Card, Form } from "react-bootstrap";
import SortBy from "./SortBy";
import FilterByDate from "./FilterByDate";
import Genres from "./Genres";

function Filters(props) {
    
    return (
        <Card className="mt-2 mt-md-0">
            <Card.Body>
                <Card.Title className="mb-3">Филтри</Card.Title>
                <Form>
                    <SortBy/>
                    <FilterByDate/>
                    <Genres/>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default Filters;