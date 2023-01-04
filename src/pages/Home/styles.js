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

  display: flex;
  flex-direction: column;
  width: 8px;
  height: 96.2px;
  right: 0px;
  top: 0px;

  background: #FF859B;
  border-radius: 8px;

  > li {
    margin-top: 40.45px;
    width: 1121px;
    height: 222.85px;
    background-color: rgba(255, 133, 155, 0.05);

    padding: 32px;

    svg {
      display: flex;
      margin-top: 8px;
      margin-bottom: 15px;
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    p {
      color: ${({ theme }) => theme.COLORS.GREY_300};
    }
  }

`

