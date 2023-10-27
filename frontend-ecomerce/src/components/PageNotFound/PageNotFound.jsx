/* eslint-disable no-unused-vars */
import React from "react";
import { ContainerP, ContainerH, ImgDiv, TxtH3, TxtH1, ImgSvg, DivTxt } from "./StylePageNotFound";
/* import ImgPageNotFound from "../../assets/Img/Page Not Found/Warning.png"; */


const PageNotFound = () => {
  return (
    <ContainerP>
      <ContainerH>
        {ImagenSvg()}
        {/* <Img src={ImgPageNotFound} alt="img" /> */}
        <DivTxt>
            <TxtH1>Page Not Found</TxtH1>
            <TxtH3>
            {" "}
            <a href="/home">Back to home</a>{" "}
            </TxtH3>
        </DivTxt>
      </ContainerH>
    </ContainerP>
  );
};

export default PageNotFound;

//componente img svg
const ImagenSvg = () => {
  return (
    <ImgDiv>
      
    </ImgDiv>
  );
};
