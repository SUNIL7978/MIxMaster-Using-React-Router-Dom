import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
  img {
    height: 15rem;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }
  .footer {
    padding: 1.2rem;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 500;
    }
    h5 {
      color: var(--grey-800);
    }
    p {
      margin-bottom: 0.5rem;
      font-weight: 700;
    }
  }
`;

export default Wrapper;
