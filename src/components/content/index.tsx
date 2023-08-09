import type { ReactNode } from "react";
import style from './content.module.css';

export const Content: React.FC<{ children: ReactNode }> = (props) => (
  <section className={style.content}>
      <div className={style.inner}>
        {props.children}
      </div>
  </section>
)
