import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const SectionTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 14px;

  &::before {
    content: "";
    width: 28px;
    height: 2px;
    background: var(--accent);
    border-radius: 2px;
  }
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-h);
  font-size: clamp(1.75rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.2;
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  border-radius: var(--radius);
  font-family: var(--font-h);
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.03em;
  transition: all 0.25s;
`;

export const PrimaryButton = styled(Button)`
  background: var(--accent);
  color: #fff;

  &:hover {
    background: var(--accent2);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(249, 115, 22, 0.35);
  }
`;

export const TextAccent = styled.span`
  color: var(--accent);
`;

export const GridOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`;

export const GridTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
`;

export const GridThree = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;
