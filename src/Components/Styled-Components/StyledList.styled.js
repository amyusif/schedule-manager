import styled from "styled-components";

const items = {
  primaryColor: "#1877f2",
  secondaryColor: "white",
};

export const Styledbtn = styled.button`
  display: inline-block;
  width: ${(props) => props.width};
  padding: 0.9rem 1.8rem;
  font-size: 18px;
  font-weight: 700;
  font-family: "Acme", sans-serif;
  color: ${items.secondaryColor};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  background-color: ${items.primaryColor};
  overflow: hidden;
  z-index: 1;
`;
export const Styledcard = styled.div`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;
  margin: 5px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(114, 118, 122, 0.897);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
export const Styledinput = styled.input`
  width: ${(props) => props.width}px;
  padding: 10px;
  height: 44px;
  background-color: #05060f0a;
  border-radius: 0.5rem;
  padding: 0 1rem;
  border: 2px solid transparent;
  font-size: 1rem;
  transition: border-color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
    color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s,
    background 0.2s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;

  &:hover,
  :focus {
    outline: none;
    border-color: ${items.primaryColor};
  }
`;
export const Wrapper = styled.section`
  width: 100wh;
  height: 100vh;
  display: grid;
  place-items: center;
  background: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Button2 = styled.a`
font-family: "Roboto", sans-serif;
  padding: 15px 55px;
  font weight
  background: none;
  font-size: 18px;
  border: 2px solid #eeeeee;
  text-decoration: none;
  border-radius: 10px;
  color: #05060f99;
  margin: 7px;
  height: fit-content;
`;
export const Allign = styled.div`
display: flex;
align-items: center;
gap: 3px;
`
