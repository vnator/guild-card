import React from 'react';
import style from './coverLetter.module.css';
import { useIntl } from '../../context/useInlt';
import { About } from '../resume/components/about';

export const CoverLetter = () => {
  const t = useIntl();

  return (
    <div className={style.coverLetter}>
      <About />

      <div className={style.content}>
        <h3 className={style.title}>
          {t('coverLetter.hi')}
        </h3>

        <p className={style.paragraph}>
          {t('coverLetter.paragraphs.first')}
        </p>

        <p className={style.paragraph}>
          {t('coverLetter.paragraphs.second')}
        </p>

        <p className={style.paragraph}>
          {t('coverLetter.paragraphs.third')}
        </p>

        
        <p className={style.by}>
          {t('coverLetter.by')}
        </p>
      </div>
    </div>
  )
}

