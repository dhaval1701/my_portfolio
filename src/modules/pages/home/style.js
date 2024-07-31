import styled, { keyframes } from "styled-components";

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  h1 {
    overflow: hidden;
    white-space: nowrap;
    animation: ${typingAnimation} 3s steps(40, end) 1s forwards;
  }

  .lead,
  p {
    margin-top: 20px;
    opacity: 0; /* Initially hide the paragraph */
    animation: ${fadeIn} 1s 2s forwards; /* Fade in after typing animation */
  }
  .image-container {
    max-width: 100%;
    height: auto;
  }
`;

export default Wrapper;
