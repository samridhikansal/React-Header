import styled, { css } from "styled-components";

// import the twitter icon from the react-icons library
import { FaTwitter, FaLinkedinIn, FaSkype, FaYoutube } from "react-icons/fa";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Column = styled.div`
  display: flex;
  width: 40%;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

// stylled div for loading all the pages
export const Div = styled(Row)`
  background-color: grey;
  min-height: ${(props) => (props.height ? props.height : `70%`)};
  min-width: ${(props) => (props.width ? props.width : `70%`)};
`;

// customised twitter component
export const StyledTwitter = styled(FaTwitter)`
  color: #551a8b;
  margin: 5px;
`;

export const StyledSkype = styled(FaSkype)`
  color: #551a8b;
  margin: 5px;
`;

export const StyledYoutube = styled(FaYoutube)`
  color: #551a8b;
  margin: 5px;
`;

//stylling grid components row and column
