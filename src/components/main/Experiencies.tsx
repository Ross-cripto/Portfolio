import React from "react"
import {motion} from "framer-motion"

import {useTranslation} from "../../context/LanguajeContext"
import getColor from "../../utils/getColor";

const Experiencies: React.FC = () => {

  const {t} = useTranslation();

  const experiences = t("experiences")

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: 100}}
      transition={{duration: 0.5}}
      className="my-20 text-center text-4xl">
        {t('experiences_title')}
      </motion.h2>
      <div>
        {Array.isArray(experiences) &&
        experiences.map((experience, index) => (
          <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}}
           key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4"> 
                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
              </div>
              <motion.div
               whileInView={{opacity: 1, x: 0}}
               initial={{opacity: 0, x: 100}}
               transition={{duration: 1}}
               className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                  {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>
                </h6>
                <p className="mb-4 text-neutral-400">{experience.description}</p>
                <div className="grid grid-cols-3 gap-2 md:flex md:flex-wrap">
                {experience.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className={`rounded px-2 py-1 text-sm font-medium ${getColor(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experiencies