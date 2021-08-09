import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";

const Wrapper = styled.div`
  .drawer {
    box-shadow: -50px 0 30px 10px red;
  }
  .items {
    position: relative;
    display: flex;
    width: 100%;
    max-height: 100%;
    justify-content: space-between;
    border: 1px solid lightblue;
    border-radius: 5px 5px 20px 20px;
    flex-direction: column;
    margin: 5px;
    padding: 0;
  }
  img {
    width: 250px;
    max-height: 220px;
    margin: 0 auto;
  }
  button {
    border-radius: 0 0 20px 20px;
  }
  .details {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
  }
`;

const StyledButton = styled(IconButton)`
  position: fixed;
  right: 1%;
  margin: 10px;
  color: #1100ff;
  z-index: 100;
  border-radius: 15px;
`;

export { Wrapper, StyledButton };
