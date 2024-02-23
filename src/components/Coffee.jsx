import styled from 'styled-components';

const CoffeeElem = styled.div`
    background-color: #DBA45B;
    width: 100px;
    height: 25px;
    border-radius: 5px;
`

function Coffee(props) {
    const value = props.value;
    return (
      <CoffeeElem>Café : {value}</CoffeeElem>);
}
export default Coffee