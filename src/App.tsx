import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Hero from './components/Hero';
import Success from './components/Success';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path={`/`}
          element={<Hero />}
        />
        <Route
          path={`/reserve`}
          element={<Form />}
        />
        <Route
          path={`/success`}
          element={<Success />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
