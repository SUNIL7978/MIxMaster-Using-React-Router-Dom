import styled from 'styled-components';

const Wrapper = styled.nav`
  background: var(--white);
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }
  .logo {
    font-size: clamp(2rem, 3vw, 3rem);
    color: var(--primary-500);
    font-weight: 700;
  }
  .nav-links {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.2rem;
  }
  .nav-link {
    color: var(--gray-900);
    padding: 0.5rem 0.5rem 0.5rem 0;
    letter-spacing: var(--letterSpacing);
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-500);
  }

  @media (min-width: 768px) {
    .nav-center {
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;

export default Wrapper;
