import type { ReactNode } from 'react'
import { Header } from '../header'
import style from './template.module.css'
import { Content } from '../content'

export const Template: React.FC<{ children: ReactNode }> = ({ children }) => (
  <main className={style.template}>
    <Header />
    <Content>
      {children}
    </Content>
  </main>
)
