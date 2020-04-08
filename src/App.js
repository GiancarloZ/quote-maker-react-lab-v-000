
import React, { Component } from 'react';
import QuoteForm from './components/QuoteForm';
import QuoteCard from './components/QuoteCard';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm />
        <QuoteCard />
      </div>
    );
  }
}

export default App;