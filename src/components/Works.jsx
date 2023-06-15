import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';

const ProjectCard = ( { index, name, description, tags, image, source_code_link } ) => (
  <motion.div variants={ fadeIn( "up", "spring", index * 0.5, 0.75 ) }>
    <Tilt
      options={ {
        max: 45,
        scale: 1,
        speed: 450
      } }
      className="sm:w-[360px] w-full p-5 rounded-3xl bg-tertiary"
    >
      {/* image */}
      <div className="relative w-full h-[230px]">
        {/* image */}
        <img
          src={ image }
          alt={ name }
          className="w-full h-full rounded-2xl object-cover"
        />

        {/* github icon */}
        <div className="absolute inset-0 flex justify-end m-3 card-image_hover">
          <div
            className="flex justify-center items-center w-10 h-10 rounded-full black-gradient cursor-pointer"
            onClick={ () => window.open( source_code_link, "_blank" ) }
          >
            <img
              src={ github }
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      {/* description */}
      <div className="mt-5">
          <h3 className="text-white text-[24px] font-bold">{ name }</h3>
          <p className="mt-2 text-secondary text-[14px]">{ description }</p>
        </div>

        {/* tag */}
        <div className="flex flex-wrap gap-2 mt-4">
          { tags.map( tag => (
            <p
              key={ tag.name }
              className={ `${ tag.color } text-[14px]` }
            >
              #{ tag.name }
            </p>
          ) ) }
        </div>
    </Tilt>
  </motion.div>
)

const Works = () => (
  <>
    <motion.div variants={ textVariant() }>
      <p className={ `${ styles.sectionSubText }` }>Our work</p>
      <h2 className={ `${ styles.sectionHeadText }` }>Projects.</h2>
    </motion.div>

    <div className="w-full flex">
      <motion.p
        variants={ fadeIn( "", "", 0.1, 1 ) }
        className="max-w-3xl mt-3 text-secondary text-[16px] leading-[30px]"
      >
        Following projects showcases my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories and live demos in it. It reflects my
        ability to solve complex problems, work with different technologies,
        and manage projects effectively.
      </motion.p>
    </div>

    <div className="flex flex-wrap gap-7 mt-20">
      { projects.map( ( project, index ) => (
        <ProjectCard
          key={ `project-card-${index}` }
          index={ index }
          { ...project }
        />
      ) ) }
    </div>
  </>
)

export default SectionWrapper( Works, '' )