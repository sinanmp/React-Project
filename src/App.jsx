import React from 'react';
import Header from './components/header';
import RouterPage from './Router/Router';

function App() {
  return (
    <div
      className='border mx-auto my-auto border-spacing-4 bg-slate-700 rounded-lg flex flex-col'
      style={{ height: '35rem', width: '19rem' }}
    >
      <Header />
      <RouterPage />
    </div>
  );
}

export default App;
