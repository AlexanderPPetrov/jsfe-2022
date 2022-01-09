import {Alert, Button} from "react-bootstrap";
import useToggle from "../../hooks/useToggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

function Movie(props) {
    
    const [value, toggleValue] = useToggle();

    return (
        <Alert 
            variant="info" 
            className="d-flex align-items-center">
        {props.title}
        <Button variant="outline-primary ms-auto"
                onClick={toggleValue}>
                <FontAwesomeIcon icon={value ? faToggleOn : faToggleOff}/>
        </Button>
    </Alert>
    )
}
export default Movie;