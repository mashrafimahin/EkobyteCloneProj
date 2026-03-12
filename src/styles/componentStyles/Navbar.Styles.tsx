import styled from "styled-components";

export const Header = styled.header<{ $scrolled?: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  /* padding: 10px 100px; */
  transition: all 0.35s;
  background: ${(props) =>
    props.$scrolled ? "rgba(6, 12, 24, 0.95)" : "none"};
  backdrop-filter: ${(props) => (props.$scrolled ? "blur(12px)" : "none")};
  box-shadow: ${(props) =>
    props.$scrolled ? "0 2px 20px rgba(0, 0, 0, 0.4)" : "none"};
  z-index: 999;

  /* class */
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
  }

  @media screen and (max-width: 768px) {
    nav {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .logo-icon {
    width: 38px;
    height: 38px;
    background: var(--accent);
    border-radius: 8px;
    display: grid;
    place-items: center;
  }
  .logo-icon svg {
    width: 22px;
    height: 22px;
    fill: #fff;
  }
  .logo-text {
    font-family: var(--font-h);
    font-size: 1.4rem;
    font-weight: 900;
    color: #fff;
    letter-spacing: -0.02em;
  }
  .logo-text span {
    color: var(--accent);
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;

  .nav-item {
    position: relative;
  }
  .nav-link {
    font-family: var(--font-h);
    font-weight: 600;
    font-size: 0.88rem;
    color: rgba(255, 255, 255, 0.85);
    padding: 10px 14px;
    border-radius: 6px;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 5px;
    letter-spacing: 0.02em;
  }
  .nav-link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.07);
  }
  .nav-link svg {
    width: 13px;
    height: 13px;
    fill: currentColor;
    opacity: 0.7;
  }
  .dropdown {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    min-width: 200px;
    background: var(--navy);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 8px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(8px);
    transition: all 0.25s;
    z-index: 100;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
  .nav-item:hover .dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .dropdown a {
    display: block;
    padding: 8px 14px;
    font-size: 0.84rem;
    font-weight: 500;
    color: var(--gray);
    border-radius: 6px;
    transition: all 0.2s;
  }
  .dropdown a:hover {
    color: #fff;
    background: rgba(249, 115, 22, 0.12);
  }
`;

export const CTA = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: transparent;
    padding: 6px;
  }
  .hamburger span {
    display: block;
    width: 24px;
    height: 2px;
    background: #fff;
    border-radius: 2px;
    transition: all 0.3s;
  }

  @media screen and (max-width: 768px) {
    .hamburger {
      display: flex;
    }
  }
`;
