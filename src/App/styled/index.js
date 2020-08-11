import styled from "styled-components";

export const Div = styled.div`
  position: absolute;
  top: ${(props) => (props.top ? props.top : `100px`)};
  left: ${(props) => (props.left ? props.left : `200px`)}
  background-color: grey;
  min-height: ${(props) => (props.height ? props.height : `70%`)};
  min-width: ${(props) => (props.width ? props.width : `70%`)};
`;
