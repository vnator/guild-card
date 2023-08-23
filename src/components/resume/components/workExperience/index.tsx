import { useIntl } from '../../../../context/useInlt';
import { takeKeyList } from '../../../../helpers/takeAList';
import { resumeEn } from '../../../../i18n/resume/en';
import style from './workExperience.module.css';

export const WorkExperience = () => {
  const t = useIntl();
  const jobs = takeKeyList(resumeEn.jobs)

  return (
    <div className={style.works}>
      <h2 className='title'>{t('resume.jobs.title')}</h2>
      {jobs.map((job) => (
        <div className={style.job}>
          <h3 className='subtitle' aria-label={t(`resume.jobs.label.company`)}>
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
  )
}
