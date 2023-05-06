import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import { Section } from './Layout.styled';

const Layout = () => {
  return (
    <Section>
      <AppBar />
      <Outlet />
    </Section>
  );
};

export default Layout;
