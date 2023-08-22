import type { ReactNode } from 'react'
import { Header } from '../header'
import style from './app.module.css'
import { Content } from '../content'
import { Container } from '../container'
import { IntlContext } from '../../context/intlContext'
import type { AppComponent } from './app.model'

export const App: AppComponent = ({ children, messages }) => (
  <IntlContext.Provider value={messages}>
    <main className={style.template}>
      <div className={style.background} />
      <Container>
        <div className={style.content}>
          <Header />
          <Content>
            {children}
          </Content>
        </div>
      </Container>
    </main>
  </IntlContext.Provider>
)
