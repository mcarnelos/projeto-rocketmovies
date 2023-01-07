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

export const Content = styled.div`
  
  width: 1260px;
  margin: 40px 130px 0 200px;
  
  h2 {
    display: inline;
    font-size: 36px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  .tags {
    display: flex;
    align-items: center;
    width: 100%;
    height: 88px;

    padding: 16px;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  #tag {
    padding: 16px;
  }

  #btn-delete {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK};

    margin-right: 40px;
  }

  Button {
    width: 536.5px;
  }
`

export const SideBar = styled.div`
  position: absolute;
  width: 8px;
  height: 96.2px;
  right: 0px;
  top: 0px;
  margin-top: 200px;
  margin-right: 195px;

  background: #FF859B;
  border-radius: 8px;
`

