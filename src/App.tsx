import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App(): React.JSX.Element {
  return (
    <div>
      <h1>My App</h1>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
