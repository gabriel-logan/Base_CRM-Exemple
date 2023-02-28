import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';

import history from './services/history';

import Header from './components/header';
import NavMenu from './components/navMenu';
import Footer from './components/footer';

import { GlobalStyleComponent } from './styles/global';

import ConfigRoutes from './routes/index';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyleComponent />
          <ToastContainer autoClose={2000} />
          <NavMenu />
          <Header />
          <ConfigRoutes />
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
