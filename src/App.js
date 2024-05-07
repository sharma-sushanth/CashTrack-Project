import HomeComponent from "./modules/home";
import styled from "styled-components"

const Container=styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin: 30px 0 10px;
font-family: Montserrat;
`;
const Header =styled.span`
color: black;
font-size :25px;
font-weight :bold;
`;
function App() {
  return (
    <Container>
    <Header> <h1>CashTrack</h1></Header>
    <HomeComponent />
    </Container>
      );
}

export default App;
