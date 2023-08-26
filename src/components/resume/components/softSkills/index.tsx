import React from 'react';
import style from './softSkills.module.css'
import { useIntl } from '../../../../context/useInlt';
import { takeKeyList } from '../../../../helpers/takeAList';
import { resumeEn } from '../../../../i18n/resume/en';


export const SoftSkills = () => {
  const t = useIntl();
  const softSkillsKeys = takeKeyList(resumeEn.softSkills)
  const hobies = takeKeyList(resumeEn.interests)

  return (
    <div className={style.softSkills}>
      <div className={style.languages}>
        <h2 className='title'>{t('resume.langs.title')}</h2>
        <p className={style.lang}>
          <strong>{t('resume.langs.portuguese.label')}</strong>
          <span>{t('resume.langs.portuguese.level')}</span>
        </p>

        <p className={style.lang}>
          <strong>{t('resume.langs.english.label')}</strong>
          <span>{t('resume.langs.english.level')}</span>
        </p>
      </div>

      <div className={style.merits}>
        <h2 className={style.title}>{t('resume.softSkills.title')}</h2>
        <ul className={style.badgetList}>
          {softSkillsKeys.map(i => <li key={i} className={style.badgetItem}>{t(`resume.softSkills.${i}`)}</li>)}
        </ul>
      </div>
    

      <div className={style.hobies}>
        <h2 className={style.title}>{t('resume.interests.title')}</h2>
        <ul className={style.badgetList}>
          {hobies.map(hobie =>
            <li className={style.badgetItem} key={hobie}>
              {t(`resume.interests.${hobie}`)}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
