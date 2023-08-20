import { useIntl } from '../../context/useInlt';
import style from './resume.module.css'
import { meEn } from '../../i18n/me/en';
import { takeEntriesList, takeKeyList } from '../../i18n/helpers/takeAList';
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

  type StackLevel<T extends string> = {
    [Property in T | string]: {
      level: number;
      years: number;
    }
  }

  const backendListLevel: StackLevel<BackEndStack> = {
    deno: {
      level: 8,
      years: 2,
    },
    java: {
      level: 6,
      years: 8,
    },
    dynamoDB: {
      level: 6,
      years: 2,
    },
    kafka: {
      level: 6,
      years: 3,
    },
    mongoDB: {
      level: 7,
      years: 4,
    },
    node: {
      level: 9,
      years: 12,
    },
    postgreSQL: {
      level: 7,
      years: 8,
    },
    rabbitMq: {
      level: 6,
      years: 3,
    },
    redis: {
      level: 5,
      years: 4,
    },
    Rust: {
      level: 6,
      years: 4,
    },
  }

  const developerListLevel: StackLevel<DeveloperStack> = {
    aws: {
      level: 6,
      years: 5,
    },
    bdd: {
      level: 6,
      years: 6,
    },
    cicd: {
      level: 8,
      years: 8,
    },
    ddd: {
      level: 5,
      years: 5,
    },
    docker: {
      level: 7,
      years: 5,
    },
    elk: {
      level: 6,
      years: 5,
    },
    firebase: {
      level: 6,
      years: 2,
    },
    fp: {
      level: 8,
      years: 9,
    },
    git: {
      level: 8,
      years: 12,
    },
    graphQL: {
      level: 7,
      years: 5,
    },
    linux: {
      level: 7,
      years: 14,
    },
    microfrontends: {
      level: 8,
      years: 7,
    },
    microservices: {
      level: 6,
      years: 7,
    },
    newRelic: {
      level: 6,
      years: 3,
    },
    oop: {
      level: 8,
      years: 14,
    },
    rest: {
      level: 8,
      years: 10,
    },
    sentry: {
      level: 7,
      years: 3,
    },
    tdd: {
      level: 8,
      years: 6,
    },
    workflow: {
      level: 8,
      years: 7,
    },
  }

  const frontendListLevel: StackLevel<FrontEndStack> = {
    angular: {
      level: 7,
      years: 6,
    },
    astro: {
      level: 8,
      years: 2,
    },
    chromeExtension: {
      level: 7,
      years: 2,
    },
    css: {
      level: 10,
      years: 16,
    },
    dataFetch: {
      level: 9,
      years: 12,
    },
    designSystems: {
      level: 9,
      years: 10,
    },
    elm: {
      level: 7,
      years: 3,
    },
    engineering: {
      level: 8,
      years: 12,
    },
    firefoxAddon: {
      level: 6,
      years: 2,
    },
    html: {
      level: 10,
      years: 16,
    },
    i18n: {
      level: 9,
      years: 8,
    },
    js: {
      level: 10,
      years: 16,
    },
    nextJS: {
      level: 8,
      years: 7,
    },
    reactJs: {
      level: 10,
      years: 10,
    },
    tests: {
      level: 9,
      years: 8,
    },
    typescript: {
      level: 9,
      years: 5,
    },
    wasm: {
      level: 6,
      years: 4,
    },
    workers: {
      level: 8,
      years: 6,
    },
  }

  interface StackLevelList extends Record<
    StackKey | string, StackLevel<BackEndStack> | StackLevel<FrontEndStack> | StackLevel<DeveloperStack>
  >{}

  const stackLevelList: StackLevelList = {
    backend: backendListLevel,
    frontend: frontendListLevel,
    developer: developerListLevel,
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
            <h2>{t('resume.stack.label')}</h2>
            <div className={style.half}>

            {takeKeyList(stack).map((stackKey) => (
                <ul>
                  <li>
                    <strong>
                      {t(`resume.stack.${stackKey}.label`)}
                    </strong>
                  </li>
                  {takeEntriesList(stack[stackKey as StackKey]).map(([techKey, techValue]) => {
                    if (typeof techValue === 'string') {
                      return <li>
                        {t(`resume.stack.${stackKey}.${techKey}`)}
                        {` `} - level: {stackLevelList[stackKey][techKey].level}
                        {` `} - years: {stackLevelList[stackKey][techKey].years}
                      </li>
                    }


                    return <li>
                      <span>
                        {t(`resume.stack.${stackKey}.${techKey}.label`)}
                        {` `} - level: {stackLevelList[stackKey][techKey].level}
                        {` `} - years: {stackLevelList[stackKey][techKey].years}
                      </span>
                      <ul>
                      {takeKeyList(techValue).map(sub => <li>{t(`resume.stack.${stackKey}.${techKey}.${sub}`)}</li>)}
                      </ul>
                    </li>
                  })}
                </ul>
              ))}

            </div>
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
