import {
  X,
  Check,
  Cards,
  Receipt,
} from 'phosphor-react';
import React, { ReactPortal } from 'react';
import ReactDOM from 'react-dom';

import {
  Container,
  Description,
  Title,
  Wrapper,
  Content,
  ClosedButton,
} from './styles';

interface ModalProps {
  visible: boolean;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  large?: boolean;
  type: string;
  setVisible?: any;
  align?: string;
}

export function Modal({
  visible,
  title,
  subtitle,
  children,
  large,
  type,
  setVisible,
  align,
}: ModalProps): ReactPortal | null {

  function chooseIcon(source: string) {
    // console.log(source);
    switch (source) {
    
      case 'success':
        return <Check size={38} color="green" weight="bold" />;
      default:
        return '';
    }
  }

  return visible
    ? ReactDOM.createPortal(
        <Wrapper>
          <Container>
            <ClosedButton onClick={() => setVisible(false)}>
              <X weight="regular" size={24} color="white" />
            </ClosedButton>
            <Content align={align}>
              {chooseIcon(type)}
              <Title>{title}</Title>
            </Content>
            <Description>{subtitle}</Description>
            <br />
            {children}
          </Container>
        </Wrapper>,
        document.getElementById('modal-root') as Element,
      )
    : null;
}

