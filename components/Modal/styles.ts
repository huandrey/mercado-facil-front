import styled, { keyframes } from 'styled-components';

type ContentData = {
  large: boolean;
};

const Animation = keyframes`
  0% {
    margin-top: calc(-100% - 200px);
  }
  100% {
    margin-top: 0px;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  /* background: #000000;
  opacity: 0.6; */
`;
export const Container = styled.div`
  width: 24rem;
  min-height: 12.6rem;
  background: white;
  padding: 2.1rem 3.1rem 2.4rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  animation: 0.8s ${Animation} ease-in-out forwards;

  z-index: 999999999;

  position: relative;

  @media (max-width: 768px) {
    width: 32rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  color: #2563eb;
  /* padding: 0 0 2rem 0; */
`;

export const Description = styled.p`
  display: inline-block;
  color: #9f9f9f;
  word-wrap: break-word;
  white-space: pre-line;
  /* padding: 0 20px; */
  /* text-align: center; */
  font-size: 0.9rem;
  /* text-transform: lowercase; */
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* justify-content: ${({ align }) =>
    (align === 'center' ? 'center' : 'flex-start')}; */
  gap: 0.8rem;
  margin-bottom: 1.4rem;
`;
export const ClosedButton = styled.button`
  width: 2.3rem;
  height: 2.3rem;

  position: absolute;
  top: -1rem;
  left: -1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #2563eb;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  border: none;

  cursor: pointer;

  @media (max-width: 840px) {
    width: 4rem;
    height: 4rem;

    top: -2rem;
    left: -2rem;
  }
`;
