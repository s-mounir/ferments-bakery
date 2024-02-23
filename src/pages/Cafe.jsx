import styled from 'styled-components'
import {useRef, useEffect, useState} from "react";

import Sunburst from '../components/Sunburst';
import Coffees from '../components/Coffees';

const MainDiv = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 50px;
    min-height: calc(100vh - 300px);
`

function Cafe() {
    const [filter, setFilter] = useState(0);
    return (
        <MainDiv>
            <Sunburst filter={filter} setFilter={setFilter}/>
            <Coffees filter={filter} setFilter={setFilter}/>
        </MainDiv>);
}
export default Cafe