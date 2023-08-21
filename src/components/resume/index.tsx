import { useIntl } from '../../context/useInlt';
import style from './resume.module.css'
import { meEn } from '../../i18n/me/en';
import { takeKeyList } from '../../i18n/helpers/takeAList';
import { resumeEn } from '../../i18n/resume/en';
import type { ExcludeItl, GenericRecord } from '../../i18n/helpers/types';

export const Resume = () => {
  const t = useIntl();

  // about stuffs
  const contactKeys = takeKeyList(meEn.contact)
  const CONTACT_LABEL_VALUE = contactKeys.map(i => ({
    label: t(`me.contact.${i}.label`),
    value: t(`me.contact.${i}.value`)
  }))


  // resume soft skills
  const softSkillsKeys = takeKeyList(resumeEn.softSkills)

  // Resume Hard Skills
  const { stack } = resumeEn;
  type StackKey = ExcludeItl<keyof typeof stack>;

  type DeveloperStack = ExcludeItl<keyof typeof stack.developer>;
  type FrontEndStack = ExcludeItl<keyof typeof stack.frontend>;
  type BackEndStack = ExcludeItl<keyof typeof stack.backend>;
  
  type TechKey =
    | DeveloperStack
    | FrontEndStack
    | BackEndStack

  type Tech = {
    [index in keyof TechKey]?: GenericRecord
  }


  // Resume Jobs
  const jobs = takeKeyList(resumeEn.jobs)

  // Resume Interests
  const hobies = takeKeyList(resumeEn.interests)

  return (
    <div>
      {/* ABOUT */}
      <div>
        <div className={style.slot}>
          <div className='Bio'>
            <h2>{t('me.about.title')}</h2>
            <p>{t('me.about.bio')}</p>
          </div>
        </div>

        <div className={style.slot}>
          <div className='Contacts'>
            <h2>{t('me.contact.title')}</h2>
            <ul>
              {CONTACT_LABEL_VALUE.map(i => <li><b>{i.label}: </b>{i.value}</li>)}
            </ul>
          </div>
        </div>

        <div className={style.slot}>
          <div className='Education'>
            <h2>{t('me.education.title')}</h2>
            <p>{t('me.education.bachelor')}</p>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div>

        <div className={style.slot}>
          <div className='SoftSkills'>
            <h2>{t('resume.softSkills.title')}</h2>
            <ul>
              {softSkillsKeys.map(i => <li>{t(`resume.softSkills.${i}`)}</li>)}
            </ul>
          </div>
        </div>

        <div className={style.slot}>
          <div className='SoftSkills'>
            <h2>{t('resume.softSkills.title')}</h2>
            <ul>
              {softSkillsKeys.map(i => <li>{t(`resume.softSkills.${i}`)}</li>)}
            </ul>
          </div>
        </div>

        <div className={style.slot}>
          <div className='Languages'>
            <h2>{t('resume.langs.title')}</h2>
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
        </div>

        <div className={style.slot}>
          <div className='Stack'>
            <h2>{t('resume.stack.title')}</h2>

            {takeKeyList(stack).map((stackKey) => {
              const techs = stack[stackKey as StackKey];
              return (
              <div className={style.half}>
                <h3>
                  {t(`resume.stack.${stackKey}.label`)}
                </h3>

                <ul>
                {takeKeyList(techs).map(tech => {
                  const subTechs: Tech = techs[tech];
                  return (
                    <li>
                      <strong>{t(`resume.stack.${stackKey}.${tech}.label`)}</strong>
                      <span>
                        {t(`resume.stack.label.level`)}:
                        {t(`resume.stack.${stackKey}.${tech}.level`)}
                      </span>
                      - 
                      <span>
                        {t(`resume.stack.label.years`)}:
                        {t(`resume.stack.${stackKey}.${tech}.years`)}
                      </span>
                      {subTechs?.sub &&
                        <ul>
                          {takeKeyList(subTechs?.sub).map(sub => 
                            <li>{t(`resume.stack.${stackKey}.${tech}.sub.${sub}`)}</li>
                          )}
                        </ul>}
                    </li>
                )
                })}
                </ul>
              </div>
            )
            })}

          </div>
        </div>
      </div>


      {/* JOBS */}
      <div>
        <div className={style.slot}>
          <h2>{t('resume.jobs.title')}</h2>
          {jobs.map((job) => (
            <div>
              <h3>
                {t(`resume.jobs.label.company`)}
                {t(`resume.jobs.${job}.company`)}
              </h3>
              <div>
                <strong>
                  {t(`resume.jobs.label.employ`)}
                </strong>
                <span>
                  {t(`resume.jobs.${job}.employ`)}
                </span>
              </div>
              <div>
                <strong>
                  {t(`resume.jobs.label.started`)}
                </strong>
                <span>
                  {t(`resume.jobs.${job}.started`)}
                </span>
              </div>
              <div>
                <strong>
                  {t(`resume.jobs.label.finished`)}
                </strong>
                <span>
                  {t(`resume.jobs.${job}.finished`)}
                </span>
              </div>
              <div>
                <strong>
                  {t(`resume.jobs.label.describe`)}
                </strong>
                <span>
                  {t(`resume.jobs.${job}.describe`)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HOBIES */}
      <div>
        <h2>{t('resume.interests.title')}</h2>
        {hobies.map(hobie => <li>{t(`resume.interests.${hobie}`)}</li>)}
      </div>
    </div>
  )
}
