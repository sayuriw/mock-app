import styled from 'styled-components/macro'


const getSize = (size) => {
  const mapping = {
      XL: "50px",
      L: "40px",
      M: "30px",
      S: "24px"
    }
  return mapping[size]
}


const Headline = styled.h1`
    color: deeppink;
    font-size: ${props => getSize(props.size)};
    text-align: center;
    `






export default Headline