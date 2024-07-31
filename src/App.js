import './App.css';
import CrudForm from './components/crudForm';
import { CrudContextProvider } from './contexts/crudContext';
import React from 'react';

function App() {
  return (
    <div className="App">
      <CrudContextProvider>
        <CrudForm />
    
      </CrudContextProvider>
    </div>
  );
}

export default App;
