import { useIntl } from '../../../../context/useInlt';
import { takeKeyList } from '../../../../helpers/takeAList';
import { resumeEn } from '../../../../i18n/resume/en';
import style from './workExperience.module.css';

export const WorkExperience = () => {
  const t = useIntl();
  const jobs = takeKeyList(resumeEn.jobs)

  return (
    <div className={style.works}>
      <h2 className={style.head}>{t('resume.jobs.title')}</h2>
      {jobs.map((job) => (
        <div className={style.job}>
          <h3 className={style.company} aria-label={t(`resume.jobs.label.company`)}>
            {t(`resume.jobs.${job}.company`)}
          </h3>
          <span className={style.employ}>
            <strong className={style.label}>
              {t(`resume.jobs.label.employ`)}
            </strong>
            <span className={style.value}>
              {t(`resume.jobs.${job}.employ`)}
            </span>
          </span>
          <span className={style.dateStart}>
            <strong className={style.label}>
              {t(`resume.jobs.label.date`)}
            </strong>
            <span className={style.value}>
              {t(`resume.jobs.${job}.started`)}
              {t(`resume.jobs.${job}.finished`)}
            </span>
          </span>
          <span className={style.description}>
            <strong className={style.label}>
              {t(`resume.jobs.label.describe`)}
            </strong>
            <span className={style.value}>
              {t(`resume.jobs.${job}.describe`)}
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}
