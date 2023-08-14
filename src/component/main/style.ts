import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 190px;
  margin-top: 10vh;
  @media screen and (max-width: 1450px) {
    flex-direction: column;
    margin-top: 50px;
    gap: 80px;
    padding-bottom: 60px;
  }
`;
