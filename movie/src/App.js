import MovieComponent from './components/MovieComponent'
import styled from 'styled-components'
import { useState } from 'react'
import axios from 'react'
const API_KEY="58c2fc5b";
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

const MovieListContainer=styled.div`
display:flex;
flex-direction:row;
padding:30px;
flex-wrap:wrap;
justify-content:space-evenly;
`


function App() {
  const[searchQuery, updateSearchQuery]=useState();
  const[timeoutId, updateTimeoutId]=useState();

  const fetchData=async(searchString)=>
  {
   const res=await axios.get(`https://www.omdbapi.com/?s={$searchString}&apikey={API_KEY}`)
  console.log(res);
  }

  const onTextChange=(event)=>{
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(()=>fetchData(event.target.value),500)
    updateTimeoutId(timeout);
  }

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
        <SearchInput placeholder='Search Movie' value={searchQuery} onChange={onTextChange}/>
        </span>
        </SearchBox>
        </Header>
        <MovieListContainer>
          <MovieComponent />
          <MovieComponent />
          <MovieComponent />
          <MovieComponent />
        </MovieListContainer>
     </Container>
    </div>
  );
}

export default App;
