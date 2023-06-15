import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ( { title, icon, index } ) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={ fadeIn( 'right', 'spring', index * 0.5, 0.75 ) }
      className="w-full p-[1px] green-pink-gradient rounded-[20px] shadow-card"
    >
      <div
        options={ {
          max: 45,
          scale: 1,
          speed: 450
        } }
        className="min-h-[280px] flex flex-col justify-evenly items-center px-12 py-5 bg-tertiary rounded-[20px]"
      >
        <img src={ icon } alt={ title } className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{ title }</h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => (
  <>
    <motion.div variants={ textVariant() }>
      <p className={ `${ styles.sectionSubText }` }>Introduction</p>
      <h2 className={ `${ styles.sectionHeadText }` }>Overview.</h2>
    </motion.div>

    <motion.p
      variants={ fadeIn( '', '', 0.1, 1 ) }
      className="max-w-3xl mt-4 text-secondary text-[16px] leading-[30px]"
    >
      I'm a skilled software developer with experience in TypeScript and
      JavaScript, and expertise in frameworks like React, Node.js, and
      Three.js. I'm a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Let's work together to bring your ideas to life!
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      { services.map( ( service, index ) => (
        <ServiceCard key={ service.title } index={ index } { ...service } />
      ) ) }
    </div>
  </>
)

export default SectionWrapper( About, 'about' )