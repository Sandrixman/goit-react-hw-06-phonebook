// import { Outlet } from 'react-router-dom';
// import AppBar from 'components/AppBar/AppBar';
import { Phonebook } from 'pages';
import { Section } from './Layout.styled';

const Layout = () => {
  return (
    <Section>
      {/* <AppBar />
      <Outlet /> */}
      <Phonebook />
    </Section>
  );
};

export default Layout;
