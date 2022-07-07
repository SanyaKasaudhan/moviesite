
import styled from 'styled-components'
const MovieContainer=styled.div`
display:flex;
flex-direction:column;
padding:10px;
width:280px;
box-shadow: 0 3px 10px 0 #aaa;
cursor:pointer;
`

const CoverImage=styled.img`
  height: 362px;
  object-fit:cover;
  `
  const MovieName=styled.span`
  color: black;
  font-size: 18px;
  font-weight: 600;
  margin:15px 0;
  white-space:nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
  `

  const InfoColumn=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`

const MovieInfo=styled.span`
color: black;
font-size: 16px;
font-weight: 500;
text-transform:capitalize;
`

const MovieComponent =(props)=>
{
return <MovieContainer> 
    <CoverImage src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"></CoverImage>
    <MovieName>sanya</MovieName>
    <InfoColumn>
        <MovieInfo>Yea</MovieInfo>
        <MovieInfo>mo</MovieInfo>
       
    </InfoColumn>
</MovieContainer>;

}
export default MovieComponent;