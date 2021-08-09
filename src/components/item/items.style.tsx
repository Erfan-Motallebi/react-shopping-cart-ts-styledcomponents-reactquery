import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid groove;
  border-radius: 10px;
  .title {
    padding: 15px;
  }
  .details {
    width: 80%;
  }
  .price {
    display: flex;
    justify-content: space-around;
    h4 {
      font-size: 1.1rem;
      background: #bbb4b4;
      padding: 5px;
      border-radius: 5px;
      box-shadow: 0 0 10px 0px #816f6f;
    }
  }
  .image {
    img {
      width: 150px;
      clip-path: polygon(21% 0%, 86% 0%, 86% 100%, 19% 100%);
    }
  }
  .btn {
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 1.2rem;
  }
`;
export default Wrapper;
