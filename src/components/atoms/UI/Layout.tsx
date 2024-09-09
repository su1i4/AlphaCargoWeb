import styled from "@emotion/styled";

export const Layout = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  gap: 9rem;

  height: 100%;

  .sidebar {
    width: 12%;
    max-width: 155px;
  }

  .layout {
    width: 88%;
    max-width: 1195px;
  }

  @media (max-width: 1000px) {
    display: block;

    .sidebar,
    .layout {
      width: 100%;
      max-width: 100%;
    }
  }
`;
