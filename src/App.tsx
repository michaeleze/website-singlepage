import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Routes from "./routes";
import Navigation from "./components/organisms/navigation";

const App: React.FC = () => (
    <BrowserRouter>
        <Navigation />
        <Routes />
    </BrowserRouter>
  );

export default App;
