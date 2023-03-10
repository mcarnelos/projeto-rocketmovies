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

  h3 {
    font-size: 20px;

    color: ${({ theme }) => theme.COLORS.WHITE_300};

    margin-top: 40px;
    margin-bottom: 24px;
  }

  .inputs {
    display: flex;
    gap: 40px;

    margin-block: 40px;
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

  #tagMarker {
    padding: 16px;
    border-width: 2px; 
    border-style: dashed;
    border-color: ${({ theme }) => theme.COLORS.GREY_200};

    background: none;
  }

  #btn-delete {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.PINK};

    margin-right: 40px;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 40px;
    margin-bottom: 93px;
  }

  Button {
    width: 700px;
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

