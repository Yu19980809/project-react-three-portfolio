import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ( { index, testimonial, name, designation, company, image } ) => (
  <motion.div
    variants={ fadeIn( "", "spring", index * 0.5, 0.75 ) }
    className="sm:w-[320px] w-full p-10 rounded-3xl bg-black-200"
  >
    <p className="text-white font-black text-[48px]">"</p>
    <div className="mt-1">
      {/* testimonial */}
      <p className="text-white text-[18px] tracking-wider">{ testimonial }</p>

      {/* person info */}
      <div className=" flex justify-between items-center gap-1 mt-7">
        <div className="flex flex-col flex-1">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> { name }
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            { designation } of { company }
          </p>
        </div>

        <img
          src={ image }
          alt={ `feedback-by-${ name }` }
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => (
  <div className="mt-12 bg-black-100 rounded-[20px]">
    {/* title */}
    <div className={ `${ styles.padding } min-h-[300px] bg-tertiary rounded-2xl` }>
      <motion.div>
        <p className={ styles.sectionSubText }>Wtat others say</p>
        <h2 className={ styles.sectionHeadText }>Testimonials.</h2>
      </motion.div>
    </div>

    {/* content */}
    <div className={ `${ styles.paddingX } flex flex-wrap gap-7 -mt-20 pb-14` }>
      { testimonials.map( ( testimonial, index ) => (
        <FeedbackCard
          key={ testimonial.name }
          index={ index }
          { ...testimonial }
        />
      ) ) }
    </div>
  </div>
)

export default SectionWrapper( Feedbacks, '' )