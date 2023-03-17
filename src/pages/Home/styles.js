import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px;
  grid-template-areas: 
  "header"
  "content"
  ;

  #button {
    width: 207px;
    margin-bottom: 37.62px;
  }
 
  h2 {
    margin-left: 100px;
  }

`

export const Links = styled.ul`
  list-style: none;
  width: 1260px;
  margin-left: 100px;
  margin-right: 106px;

  display: flex;
  flex-direction: column;
  margin-bottom: 58.46px;

`

export const SideBar = styled.div`
  position: absolute;
  width: 8px;
  height: 96.2px;
  right: 0px;
  top: 0px;
  margin-top: 260px;
  margin-right: 200px;

  background: #FF859B;
  border-radius: 8px;
`

