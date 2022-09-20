import { Layout } from '../layout/Layout';
import Main from '../components/Main/Main';
import Logo from '../components/Logo/Logo';

//index page where the main page is rendered

const Home = () => {
  return (
    <Layout>
      <Logo />
      <Main />
    </Layout>
  );
};

export default Home;
