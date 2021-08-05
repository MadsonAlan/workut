import styled from "styled-components";

export const MainGrid = styled.main`
  width: 100%;
  grid-gap: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 31.25rem;
  padding: 1rem;
  .profileArea {
    display: none;
    @media(min-width: 860px){
      display: block;
    }
  }

  @media(min-width: 860px){
    max-width: 69.375rem;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 10rem 1fr 19.5rem;

  }
`
export const Box = styled.div`
background: #ffffff;
border-radius: 8px;
padding: 1rem;

margin-bottom: 0.625rem; 
.boxLink{
  font-size: 0.875rem;
  color: #2E7BB4;
  text-decoration: none;
  font-weight: 800;
}
.title{
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1.25rem;
}
.subTitle{
  font-size: 1.125rem;
  font-weight: 400;
  margin-bottom: 1.25rem;
}
.smallTitle{
  margin-bottom: 1.25rem;
  font-size: 1rem;
  font-weight: 700;
  color: #333333;
  margin-bottom: 1.25rem;
}
hr{
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
  border-color: transparent;
  border-bottom-color: #ECF2FA
}
input{
  width: 100%;
  background-color: #F4F4F4;
  color: #333333;
  border: 0;
  padding: 0.875rem 1rem;
  margin-bottom: 0.875rem;
  border-radius: 62.5rem;
  ::placeholder{
    color: #333333;
    opacity: 1;
  }
}
button{
  border: 0;
  padding: 0.5rem 0.75rem;
  color: #ffffff;
  border-radius: 62.5rem;
  background-color: #6F92BB;
}
`
export const ProfileRelationsBoxWrapper = styled(Box)`
  ul {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr; 
    max-height: 220px;
    list-style: none;
  }
  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  ul li a {
    display: inline-block;
    height: 102px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    span {
      color: #FFFFFF;
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg,#00000073,transparent);
    }
  }
`;