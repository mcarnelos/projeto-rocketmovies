import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;
  
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border-bottom: 1px solid #3E3B47;

  display: flex;
  justify-content: space-between; 
  align-items: center;

  padding: 0 80px;

  > h1 {
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-left: 123px;
    }

  > input {
    width: 630px;
    height: 56px;
    padding: 19px 24px;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    border: none;
  }  
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 9px;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-right: 123px;
  }

`

export const User = styled.div`

    display: flex;
    flex-direction: column;
    margin-left: 16px;
    margin-right: -100px;
    line-height: 24px;

    a {
      color: ${({ theme }) => theme.COLORS.GREY_200};
      justify-content: end;
      background-color: transparent;
      border: none;
      text-align: end;
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
  
`
