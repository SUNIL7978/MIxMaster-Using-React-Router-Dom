import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  const navigation = useNavigation();

  const isLoadingPage = navigation.state === 'loading';
  const value = 'Some Value';
  return (
    <>
      <Navbar />
      <section className="page">
        {isLoadingPage ? (
          <div className="loading" />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  );
};

export default HomeLayout;
