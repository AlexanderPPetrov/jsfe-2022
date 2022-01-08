import ClassComponent from "./components/ClassComponent";
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={4}>
          <ClassComponent lastName="Petrov"/>
          <ClassComponent lastName="Ivanov"/>
          <ClassComponent lastName="Georgiev"/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
