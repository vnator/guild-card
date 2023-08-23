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
    <div className={style.stackList}>
      <h2 className={`title ${style.head}`}>{t('resume.stack.title')}</h2>
      {takeKeyList(stack).map((stackKey) => {
        const techs = stack[stackKey as StackKey] as Techs;
        return (
          <div className={style.stackItem}>
            <h3 className='subtitle'>
              {t(`resume.stack.${stackKey}.label`)}
            </h3>

            <ul className={style.techList}>
                <li  className={style.techHead}>
                  {t('resume.stack.label.level')}
                </li>
            {takeKeyList(techs).map(tech => {
                const subTechs = techs[tech as TechKey];
                return (
                  <li className={style.techItem}>
                    <span className={style.tech}>
                      <span
                        className={style.level}
                        style={{
                          width: `${t(`resume.stack.${stackKey}.${tech}.level`)}0%`
                        }} />
                      <span className={style.techLabel}>
                        {t(`resume.stack.${stackKey}.${tech}.label`)}
                      </span>
                    </span>
                    {/* {subTechs?.sub &&
                      <ul>
                        {takeKeyList(subTechs?.sub as GenericRecord).map(sub => 
                          <li>{t(`resume.stack.${stackKey}.${tech}.sub.${sub}`)}</li>
                          )}
                      </ul>} */}
                  </li>
              )
            })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
