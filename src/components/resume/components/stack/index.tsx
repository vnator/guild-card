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
      <h2 className={style.head}>{t('resume.stack.title')}</h2>
      {takeKeyList(stack).map((stackKey) => {
        const techs = stack[stackKey as StackKey] as Techs;
        return (
          <div key={stackKey} className={style.stackItem}>
            <h3 className={style.stackHead}>
              {t(`resume.stack.${stackKey}.label`)}
            </h3>

            <ul className={style.techList}>
              {takeKeyList(techs).map(tech => {
                const subTechs = techs[tech as TechKey];
                return (
                  <li key={tech} className={style.techItem}>
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
                    {subTechs?.sub &&
                      <ul className={style.subList}>
                        <svg viewBox="0 0 24 24" className={style.icon}>
                          <path d="M5.00014 13.9999L5 5.00003L7 5L7.00011 11.9999L14.5862 12V6.58581L21.0004 13L14.5862 19.4142L14.5862 14L5.00014 13.9999Z"></path>
                        </svg>
                        {takeKeyList(subTechs?.sub as GenericRecord).map(sub => 
                          <li key={sub} className={style.subItem}>
                            {t(`resume.stack.${stackKey}.${tech}.sub.${sub}`)}
                          </li>
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
  )
}
