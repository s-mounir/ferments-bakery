import styled from 'styled-components'

const MainDiv = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 50px;
    min-height: calc(100vh - 300px);
`

function Home() {
  return (
    <MainDiv> 
      <h1>FERMENTS BAKERY</h1>
    </MainDiv>
  );
}
export default Home
