import AboutPic from "../../assets/about.webp"
import {motion} from "framer-motion"
import {useTranslation} from "../../context/LanguajeContext"

const About = () => {

  const {t} = useTranslation();

  return (
    <div className="pb-4
    border-b
    ">
      <h2 className="my-20 text-center text-4xl">
        {t('about.title1')} <span className="text-neutral-500">{t('about.title2')}</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
         whileInView={{opacity: 1, x: 0}}
         initial={{opacity: 0, x: -100}}
         transition={{duration: 0.5}}
         className="w-full lg:w-1/2 lg:p-6">
          <div className="flex items-center justify-center">
            <img src={AboutPic} alt="profile" className="rounded-2xl w-full h-full" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 200}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2">
            <div className="flex flex-col items-center 
            justify-center
            lg:justify-start">
              <p className="my-2 max-w-xl py-6
              ">
                {t('about.text')}	
              </p>
            </div>
          </motion.div>
      </div>
    </div>
  )
}

export default About