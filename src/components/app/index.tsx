import type { ReactNode } from 'react'
import { Header } from '../header'
import style from './template.module.css'
import { Content } from '../content'
import { Container } from '../container'
import { IntlContext } from '../../context/intlContext'
import type { AppComponent } from './template.model'

export const App: AppComponent = ({ children, messages }) => (
  <IntlContext.Provider value={messages}>
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
  </IntlContext.Provider>
)
