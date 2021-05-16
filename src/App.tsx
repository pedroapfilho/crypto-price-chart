import styled from "styled-components";
import Chart from "./Chart";

const Background = styled.div`
  background-color: #2c2b5a;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

const App = () => {
  return (
    <Background>
      <Chart />
    </Background>
  );
};

export default App;
