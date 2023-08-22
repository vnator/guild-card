import { useIntl } from '../../context/useInlt';
import style from './resume.module.css'
import { meEn } from '../../i18n/me/en';
import { resumeEn } from '../../i18n/resume/en';
import { takeKeyList } from '../../helpers/takeAList';
import type { ExcludeItl, GenericRecord } from '../../helpers/types';
import { About } from './components/about';
import { SoftSkills } from './components/softSkills';
import { Stack } from './components/stack';
import { WorkExperience } from './components/workExperience';

export const Resume = () => {
  return (
    <div>
      <About />
      <Stack />
      <WorkExperience />
      <SoftSkills />
    </div>
  )
}
