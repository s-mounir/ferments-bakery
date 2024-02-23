import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #DBA45B;
    padding: 0 50px;
`
const Logo = styled.img`
    width: 100px;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #DBA45B;
    gap: 20px;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: black;
`

function Header() {
    return (
      <HeaderDiv>
        <Logo src="./logo.png"/>
        <Nav>
          <StyledLink to="/" className="StyledLinkNav" activeclassname="active">Accueil</StyledLink>
          <StyledLink to="/cafe" className="StyledLinkNav" activeclassname="active">Cafe</StyledLink>
          <StyledLink to="/boulangerie" className="StyledLinkNav" activeclassname="active">Boulangerie</StyledLink>
          <StyledLink to="/equipe" className="StyledLinkNav" activeclassname="active">Equipe</StyledLink>
        </Nav>
      </HeaderDiv>
      );
}
export default Header