import type { ReactNode } from 'react'
import { Header } from '../header'
import style from './template.module.css'
import { Content } from '../content'
import { Container } from '../container'

export const Template: React.FC<{ children: ReactNode }> = ({ children }) => (
  <main className={style.template}>
    <div className={style.background}>
      <div className={style.border}>
        <div className={style.layer} />
      </div>
    </div>
    <div className={style.content}>
      <Container>
        <Header />
        <Content>
          {children}
        </Content>
      </Container>
    </div>
  </main>
)
