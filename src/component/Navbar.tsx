interface NavbarProps {
  scrolled?: boolean;
  resize?: number;
}
// hook
import React from "react";
import type { FC } from "react";
// styles
import {
  Header,
  Logo,
  Navigation,
  CTA,
} from "../styles/componentStyles/Navbar.Styles";
// component
import { PrimaryButton } from "../styles/Utilities";
// info
import { NavInfo } from "../data/NavigationData";

// main
const Navbar: FC<NavbarProps> = ({ scrolled, resize }) => {
  return (
    <Header $scrolled={scrolled}>
      <div className="header-inner">
        <Logo>
          <div className="logo-icon">
            <svg viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="logo-text">
            Eko<span>byte</span>
          </span>
        </Logo>
        <Navigation>
          {NavInfo.map((elm, index) => (
            <div className="nav-item" key={index}>
              <a href="#" className="nav-link">
                {elm.title}
                {elm.dropDown && (
                  <svg viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </a>
              {elm.dropDown && (
                <div className="dropdown">
                  {elm.subMenu?.map((item, i) => (
                    <a href="#" key={i}>
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Navigation>
        <CTA>
          <PrimaryButton>Get a Quote</PrimaryButton>
          <button
            type="button"
            className="hamburger"
            id="hamburger"
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </CTA>
      </div>
    </Header>
  );
};

export default React.memo(Navbar);
