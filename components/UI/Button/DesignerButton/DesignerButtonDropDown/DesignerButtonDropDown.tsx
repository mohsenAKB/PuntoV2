import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  LinkedinShareButton,
} from "react-share";

const DesignerButtonDropDown = () => {
  return (
    <div className="designer-button-dropdown">
      <EmailShareButton url="#">
        <span></span>
      </EmailShareButton>
      <FacebookShareButton url="#">
      
        <span></span>
      </FacebookShareButton>
      <TelegramShareButton url="#">
 
        <span></span>
      </TelegramShareButton>
      <LinkedinShareButton url="#">
   
        <span></span>
      </LinkedinShareButton>
    </div>
  );
};

export default DesignerButtonDropDown;
