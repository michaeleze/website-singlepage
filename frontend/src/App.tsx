import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import NavBarMenu from './components/organisms/navbar-menu';
import NavBarHeader from './components/molecules/navbar-header';
import { routes } from './routes/routes';
import { mockSocialMediaItems } from './index.socialmedia';
import Routes from "./routes";

const App: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <BrowserRouter>
      <header>
        <NavBarHeader handleOpenMenu={handleOpenMenu} handleCloseMenu={handleCloseMenu} openMenu={openMenu} />
        <NavBarMenu handleCloseMenu={handleCloseMenu} openMenu={openMenu} routes={routes} socialMedia={mockSocialMediaItems}/>
      </header>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
