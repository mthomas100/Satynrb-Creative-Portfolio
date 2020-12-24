import styled from 'styled-components';

const AboutStyles = styled.div`
  font-family: sans-serif;
  text-align: center;
  height: auto;
  background-color: #ffffff;
  color: #fff;
  padding-top: 2em;

  .magic {
    width: 200px;
    height: 200px;
    background-color: black;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  .gatsby-image-wrapper {
    width: 600px;
    /* margin: 0 auto; */
  }

  .image {
    display: flex;
    justify-content: center;
  }

  #image1 {
  }
  #image2 {
  }
  #image3 {
  }

  .text {
    height: auto;
    width: 300px;
    color: black;
    background-color: #ffffff;
    border: 3px solid black;
    box-shadow: 10px black;
    display: flex;
    margin: 0 auto;
  }

  #text1 {
  }
  #text2 {
  }
  #text3 {
  }
`;

export default AboutStyles;
