
import styled from 'styled-components'
const Container=styled.div`
display:flex;
flex-direction:column
`
const Header=styled.div`
display:flex;
flex-dirextion:row;
background-color:black;
align-items:center;
justify-content: space-between;
color: white;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`

const AppName=styled.div`
display:flex;
flex-dirextion:row;
align-items:center;
`
const MovieImage=styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
  `
  const SearchBox=styled.div`
  display:flex;
  flex-direction:column;
  padding:10px 10px;
background-color:white;
border-radius: 6px;
  margin-left: 20px;
width: 50%;
  `
  const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  
`

const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;  
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <div className="App">
     <Container>
      <Header>
        <AppName>
        <MovieImage src='./logo.jpg' />
        Movie Site
        </AppName>
        <SearchBox>
          <span>
        <SearchIcon src='./search.jpg'/>
        <SearchInput placeholder='Search Movie' />
        </span>
        </SearchBox>
        </Header>
     </Container>
    </div>
  );
}

export default App;
