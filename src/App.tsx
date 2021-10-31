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

const Container = styled.div`
  position: relative;
  background-color: #201d47;
  width: 600px;
  min-width: 300px;
  height: 400px;
  border-radius: 40px;
  overflow: hidden;
`;

const App = () => {
  return (
    <Background>
      <Container>
        <Chart />
      </Container>
    </Background>
  );
};

export default App;
