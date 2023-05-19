import styled from "styled-components";



 export const Styledbtn = styled.button`
    display: inline-block;
    width: ${props => props.width};
    padding: 0.9rem 1.8rem;
    font-size: 18px;
    font-weight: 700;
    font-family: 'Acme', sans-serif;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    background-color: #1877f2;
    overflow: hidden;
    z-index: 1;
`
export const Styledcard = styled.div`
  width: ${props => props.width}%;
  height: ${props => props.height}%;
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
`


