import styled from 'styled-components';

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 2rem;
    .btn {
      margin-bottom: 1rem;
    }
  }

  .img {
    border-radius: 0.25rem;
  }

  .drink-info {
    padding-top: 1.5rem;
    p {
      font-weight: 700;
      line-height: 2;
      text-transform: capitalize;
      margin-bottom: 1rem;
    }
    .drink-data {
      background: var(--primary-300);
      padding: 0.25rem 0.5rem;
      color: var(--grey-600);
      border-radius: 0.25rem;
      margin-right: 0.5rem;
      letter-spacing: var(--letterSpacing);
    }
    .ing {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }

  @media screen and (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      align-items: center;
      gap: 2rem;
    }
    .drink-info {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
