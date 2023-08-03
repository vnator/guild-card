import type { ReactNode } from "react";
import style from './content.module.css';
import { Container } from "../container";

export const Content: React.FC<{ children: ReactNode }> = (props) => (
  <section className={style.content}>
    <Container>
      <div className={style.inner}>
        {props.children}
      </div>
    </Container>
  </section>
)
