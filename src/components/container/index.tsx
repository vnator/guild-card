import type { ReactNode } from "react";
import style from './container.module.css';

export const Container: React.FC<{ children: ReactNode }> = (props) => (
  <div className={style.container}>{props.children}</div>
)
