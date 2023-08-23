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
    <div className={style.item}>
      <h2 className='title'>{t('resume.softSkills.title')}</h2>
      <ul>
        {softSkillsKeys.map(i => <li>{t(`resume.softSkills.${i}`)}</li>)}
      </ul>
    </div>
  
    <div className={style.item}>
      <h2 className='title'>{t('resume.langs.title')}</h2>
      <div className={style.half}>
        <p>
          <strong>{t('resume.langs.portuguese.label')}:</strong>
          <span>{t('resume.langs.portuguese.level')}</span>
          </p>
      </div>

      <div className={style.half}>
        <p>
          <strong>{t('resume.langs.english.label')}:</strong>
          <span>{t('resume.langs.english.level')}</span>
          </p>
      </div>

    </div>
    <div className={style.item}>
      <h2 className='title'>{t('resume.interests.title')}</h2>
      {hobies.map(hobie => <li>{t(`resume.interests.${hobie}`)}</li>)}
    </div>
  </div>)
}
