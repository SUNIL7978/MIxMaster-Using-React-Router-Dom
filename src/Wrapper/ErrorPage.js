import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  width: var(--view-width);
  max-width: var(--max-width);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-top: -3rem;
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
    font-weight: 500;
    color: var(--gray-500);
  }
  a {
    color: var(--primary-500);
    font-weight: 500;
    text-transform: capitalize;
  }
`;

export default Wrapper;
