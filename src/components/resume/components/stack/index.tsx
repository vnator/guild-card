import { useIntl } from '../../../../context/useInlt';
import { takeKeyList } from '../../../../helpers/takeAList';
import type { ExcludeItl, GenericRecord } from '../../../../helpers/types';
import { resumeEn } from '../../../../i18n/resume/en';
import style from './stack.module.css'

export const Stack = () => {
  const t = useIntl();

  const { stack } = resumeEn;
  type StackKey = ExcludeItl<keyof typeof stack>;

  type DeveloperStack = keyof typeof stack.developer;
  type FrontEndStack = keyof typeof stack.frontend;
  type BackEndStack = keyof typeof stack.backend;
  
  type TechKey = ExcludeItl<DeveloperStack
  | FrontEndStack
  | BackEndStack>

  type Techs = {
    [index in TechKey]?: GenericRecord
  }

  return (
    <div>
      <div className={style.slot}>
        <div className='Stack'>
          <h2 className='title'>{t('resume.stack.title')}</h2>
          {takeKeyList(stack).map((stackKey) => {
            const techs = stack[stackKey as StackKey] as Techs;
            return (
            <div className={style.half}>
              <h3 className='subtitle'>
                {t(`resume.stack.${stackKey}.label`)}
              </h3>

              <ul>
              {takeKeyList(techs).map(tech => {
                  const subTechs = techs[tech as TechKey];
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
                          {takeKeyList(subTechs?.sub as GenericRecord).map(sub => 
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
  )
}
