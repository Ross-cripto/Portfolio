import profilePic from "../../assets/Profile.webp"
import {motion} from "framer-motion"
import { useTranslation} from "../../context/LanguajeContext"


const container = (delay) => ({
  hidden: {opacity: 0, x: -100},
  visible: {opacity: 1, x: 0, transition: {duration: 0.5, delay: delay}},
})


const Hero = () => {

  const {t} = useTranslation();

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
      <div className="w-full lg:w-1/2">
      <div className="flex flex-col items-center lg:items-start">
      <motion.h1 
      variants={container(0)}
      initial="hidden"
      animate="visible"
      className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">{t('hero.name')}</motion.h1>
      <motion.span 
      variants={container(0.5)}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
        {t('hero.fullStackDeveloper')}
      </motion.span>
      <motion.p
      variants={container(1)}
      initial="hidden"
      animate="visible"
      className="my-2 max-w-xl py-6 font-light tracking-tighter">
        {t('hero.content')}
      </motion.p>
      </div>
    </div>
    <div className="w-full lg:w-1/2 lg:p-8">
    <div className="flex justify-center">
      <motion.img
      initial={{opacity: 0, x: 100}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 1, delay: 1.2}}
      src={profilePic} alt="profile" className="object-cover w-50% h-50% rounded-2xl" />
    </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
