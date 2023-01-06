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
 
`

export const Links = styled.ul`
  list-style: none;
  width: 1260px;
  margin-left: 110px;
  margin-right: 106px;

  display: flex;
  flex-direction: column;
  margin-bottom: 58.46px;

  > li {
    margin-top: 40.45px;
    width: 100%;
    height: 222.85px;
    background-color: rgba(255, 133, 155, 0.05);

    padding: 32px;
    border-radius: 16px;

    svg {
      display: flex;
      margin-top: 8px;
      margin-bottom: 15px;
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      margin-left: 0;
    }

    p {
      color: ${({ theme }) => theme.COLORS.GREY_300};
      margin-bottom: 20px;
    }
  }

`

export const SideBar = styled.div`
  position: absolute;
  width: 8px;
  height: 96.2px;
  right: 0px;
  top: 0px;
  margin-top: 270px;
  margin-right: 195px;

  background: #FF859B;
  border-radius: 8px;
`

