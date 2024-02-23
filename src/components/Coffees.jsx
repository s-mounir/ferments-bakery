import styled from 'styled-components';

import Coffee from './Coffee';

const CoffeeList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
`
function Coffees(props) {
    const filter=props.filter
    const setFilter=props.setFilter

    console.log(filter)

    const array = filter===0 ? [1,2,3,4,5] : [1,2];

    return (
      <div>
        <h1>Explorez nos cafés</h1>
        <CoffeeList>
          {array.map((x) => <Coffee  key={`${x}`} value={x} />)}
        </CoffeeList>
      </div>
      );
}
export default Coffees