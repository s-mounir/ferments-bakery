import styled from 'styled-components'

const MainDiv = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 50px;
    min-height: calc(100vh - 300px);
`

function Boulangerie() {
    return (<MainDiv>
        <h1>L'équipe</h1>
    </MainDiv>);
}
export default Boulangerie