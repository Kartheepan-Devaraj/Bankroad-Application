import React from "react";
import Anchor from "./Anchor";
import Social from "./Social";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <div className="anc1">
            <div>
              <Anchor src="" text="Home" />
            </div>
            <div>
              <Anchor src="" text="About" />
            </div>
            <div>
              <Anchor src="" text="Services" />
            </div>
            <div>
              <Anchor src="" text="Tours" />
            </div>
          </div>
          <div className="copyright">
            <p>
              Copyright © Backroads Travel Tours Company2023. All Rights
              Reserved
            </p>
          </div>

          <div>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
