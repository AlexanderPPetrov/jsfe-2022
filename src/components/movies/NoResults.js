import {Alert} from "react-bootstrap";

function NoResults() {
    return (
        <Alert variant="info" className="p-5 text-center">
            Няма намерени резултати
        </Alert>
    )
}
export default NoResults;