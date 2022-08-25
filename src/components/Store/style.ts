import styled from "styled-components";

export const StoreContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  header {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 50px;

    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    h1 {
      font-size: 20px;
    }
  }
`;
