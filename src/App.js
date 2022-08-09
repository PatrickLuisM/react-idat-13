import React from 'react';
// import './scss/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navigation } from './screens/navigation';

export default function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}
