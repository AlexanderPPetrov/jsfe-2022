import { Container, Row } from 'react-bootstrap';
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const routes = [
  {
    path: '/',
    component: <Home/>,
    exact: true,
  },
  {
    path: '/movies',
    component: <Movies/>,
  },
  {
    path: 'tvseries',
    component: <TVSeries/>,
  }
]

function App() {

  const getRoutes = () => {
    return routes.map((route, index) => {
      return <Route 
        key={index}
        exact={route.exact}
        path={route.path}
        element={route.component}
        />
    })
  }

  return (
    <Router>
      <NavBar/>
      <Container>
        <Row className="mt-5">
          <Routes>
            {getRoutes()}
          </Routes>
        </Row>
      </Container>
  </Router>
  );
}

export default App;
