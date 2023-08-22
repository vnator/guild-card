import { useIntl } from '../../../../context/useInlt';
import style from './about.module.css'

export const About = () => {
  const t = useIntl();

  return (
    <div className={style.about}>
      <div className={style.bio}>
        <h2 className='title'>{t('me.about.title')}</h2>
        <p>{t('me.about.bio')}</p>
      </div>

      <div className={style.contacts}>
        <h2 className='title'>{t('me.contact.title')}</h2>
        <ul className={style.list}>
          <li className={style.item}>
            <div className={style.print}>
              <strong>
                {t('me.contact.email.label')}
              </strong>
              <a href={`mailto:${t('me.contact.email.value')}`}>
                {t('me.contact.email.value')}
              </a>
            </div>

            <div className={style.screen}>
              <a href={`mailto:${t('me.contact.email.value')}`}>
                {t('me.contact.email.value')}
              </a>
            </div>
          </li>
          <li>
            <div className={style.print}>
              <strong>
                {t('me.contact.numberPhone.label')}
              </strong>
              <a href={`tel:${t('me.contact.numberPhone.value')}`}>
                {t('me.contact.numberPhone.value')}
              </a>
            </div>

            <div className={style.screen}>
              <a href={`tel:${t('me.contact.numberPhone.value')}`}>
                {t('me.contact.numberPhone.value')}
              </a>
            </div>
          </li>
          <li>
            <div className={style.print}>
                <strong>
                  {t('me.contact.github.label')}
                </strong>
                <a href={`tel:${t('me.contact.github.value')}`}>
                  {t('me.contact.github.value')}
                </a>
            </div>

            <div className={style.screen}>
              <a href={`tel:${t('me.contact.github.value')}`}>
                {t('me.contact.github.label')}
              </a>
            </div>
          </li>
          <li>
            <div className={style.print}>
                <strong>
                  {t('me.contact.linkedin.label')}
                </strong>
                <a href={`tel:${t('me.contact.linkedin.value')}`}>
                  {t('me.contact.linkedin.value')}
                </a>
            </div>

            <div className={style.screen}>
              <a href={`tel:${t('me.contact.linkedin.value')}`}>
                {t('me.contact.linkedin.label')}
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className={style.eductation}>
        <h2 className='title'>{t('me.education.title')}</h2>
        <p>{t('me.education.bachelor')}</p>
      </div>
    </div>
  )
}
