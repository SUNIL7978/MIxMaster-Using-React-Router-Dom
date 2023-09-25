/* eslint-disable react/no-unescaped-entities */
import Wrapper from '../Wrapper/ErrorPage';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/Error.svg';

const Error = () => {
  const errorRouter = useRouteError();

  if (errorRouter.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Page Not Found" />
          <h3>Ohh! </h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to="/">Back To Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h3>Something Went to Wrong</h3>
    </Wrapper>
  );
};

export default Error;
