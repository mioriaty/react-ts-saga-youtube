import React, { ButtonHTMLAttributes, CSSProperties, DOMAttributes, FC, ReactNode, useRef } from 'react';
import classNames from 'utils/functions/classNames';
import styles from './Button.module.scss';

export interface ButtonProps {
  /** React children */
  children: ReactNode;
  /** Thuộc tính href của thẻ a */
  href?: string;
  /** Thuộc tính type của thẻ button */
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  /** Các kích thước của button */
  size?: 'small' | 'medium' | 'large';
  /** Thuộc tính class của button */
  className?: string;
  /** Thuộc tính style của button */
  style?: CSSProperties;
  /** Sự kiện click */
  onClick?: DOMAttributes<HTMLElement>['onClick'];
  /** Thuộc tính màu của button */
  color?: 'primary' | 'secondary' | 'danger' | 'success';
  borderRaius?: number;
}

const Button: FC<ButtonProps> = ({ children, href, style, className, type = 'button', onClick, size = 'medium', color = 'primary', borderRaius }) => {
  const buttonRef = useRef(null);
  console.log(buttonRef.current);

  const generalProps = { style, className: classNames(styles.container, className, styles[size], styles[color]) };
  if (!!href) {
    return (
      <a {...generalProps} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button ref={buttonRef} {...generalProps} type={type} onClick={onClick} style={{ borderRadius: `${borderRaius}px` }}>
      {children}
    </button>
  );
};

export default Button;
