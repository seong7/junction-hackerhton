import React from 'react';
import styled from 'styled-components';

export const Button = React.memo(
  ({
    text,
    className,
    type,
    variant = 'filled', // 'outlined'
    disabled = false,
    size = 'lg', // 'sm'
    style,
    onClick,
  }) => (
    <StyledButton
      className={className}
      size={size}
      disabled={disabled}
      type={type}
      style={style}
      onClick={onClick}
      variant={variant}
    >
      {text}
    </StyledButton>
  ),
);

const StyledButton = styled.button`
  height: 57px;
  border-radius: 10px;
  font-size: 22.69px;
  font-weight: 400;
  color: ${({ variant }) => (variant === 'outlined' ? '#42b6f8' : 'white')};
  background: ${({ variant }) => (variant === 'outlined' ? 'white' : '#42b6f8')};
  width: ${({ size }) => (size === 'sm' ? '139px' : '100%')};
  border: ${({ variant }) => (variant === 'outlined' ? '3px solid #42B6F8' : 'none')};

  &:disabled {
    border: 1px solid #828282;
    box-sizing: border-box;
    border-radius: 10px;
    background: white;
    color: #828282;
  }
`;
