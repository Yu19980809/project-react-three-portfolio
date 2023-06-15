import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => (
  <section className="relative w-full h-screen mx-auto">
    {/* text */}
    <div className={ `${ styles.paddingX } absolute inset-0 top-[120px]  max-w-7xl mx-auto flex flex-row items-start gap-5` }>
      {/* dot and line */}
      <div className="flex flex-col justify-center items-center mt-5">
        {/* dot */}
        <div className="w-5 h-5 rounded-full bg-[#915eff]" />

        {/* line */}
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>

      {/* head text */}
      <div>
        <h1 className={ `${ styles.heroHeadText } text-white` }>Hi, We&apos;re <span className="text-[#915eff]">CodeDreamer</span></h1>
        
        <p className={ `${ styles.heroSubText } text-white-100 mt-2` }>We develop web applications, user <br className="sm:block hidden" /> interfaces and wechat mini programs</p>
      </div>
    </div>

    {/* 3d model */}
    <ComputersCanvas />

    {/* gif */}
    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
      <a href="#about">
        <div className="w-[35px] h-[64px] flex justify-center items-start p-2 rounded-3xl border-4 border-secondary">
          <motion.dev
            animate={ { y: [ 0, 24, 0 ] } }
            transition={ {
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            } }
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </a>
    </div>

  </section>
)

export default Hero