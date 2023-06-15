import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const [ loading, setLoading ] = useState( false );
  const formRef = useRef();
  const [ form, setForm ] = useState( {
    name: '',
    email: '',
    messahe: ''
  } )

  const handleChange = event => {
    const { name, value } = event.target;
    setForm( { ...form, [ name ]: value } )
  }

  const handleSubmit = event => {
    event.preventDefault();
    setLoading( true )

    emailjs.send(
      'service_usm5tx5',  // service_id
      'template_kvf24v9', // template_id
      {
        from_name: form.name,
        to_name: 'CodeDreamer',
        from_email: form.email,
        to_email: 'guangxinyu1998@gmail.com',
        message: form.message
      },
      'o_wgfvNB87lypcn-E'   // public_key
    ).then( () => {
      setLoading( false );
      alert( 'Thank you. We will get back to you as soon as possible.' );

      setForm( {
        name: '',
        email: '',
        message: ''
      }, error => {
        setLoading( false );
        console.log( error );
        alert( 'Something went wrong.' )
      } )
    } )
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden">
      {/* form */}
      <motion.div
        variants={ slideIn( "left", "tween", 0.2, 1 ) }
        className="flex-[0.75] p-8 rounded-2xl bg-black-100"
      >
        <p className={ styles.sectionSubText }>Get in touch</p>
        <h3 className={ styles.sectionHeadText }>Contact.</h3>

        <form
          ref={ formRef }
          onSubmit={ handleSubmit }
          className="mt-12 flex flex-col gap-8"
        >
          {/* name */}
          <label className="flex flex-col">
            <span className="mb-4 text-white font-medium">Your Name</span>
            <input
              type="text"
              name="name"
              value={ form.name }
              placeholder="What's your name?"
              onChange={ handleChange }
              className="px-6 py-4 border-none rounded-lg bg-tertiary text-white font-medium outline-none placeholder:text-secondary"
            />
          </label>

          {/* email */}
          <label className="flex flex-col">
            <span className="mb-4 text-white font-medium">Your Email</span>
            <input
              type="text"
              name="email"
              value={ form.email }
              placeholder="What's your email?"
              onChange={ handleChange }
              className="px-6 py-4 border-none rounded-lg bg-tertiary text-white font-medium outline-none placeholder:text-secondary"
            />
          </label>

          {/* message */}
          <label className="flex flex-col">
            <span className="mb-4 text-white font-medium">Your Message</span>
            <textarea
              rows={ 7 }
              name="message"
              value={ form.message }
              placeholder="What's do you want to say?"
              onChange={ handleChange }
              className="px-6 py-4 border-none rounded-lg bg-tertiary text-white font-medium outline-none placeholder:text-secondary"
            />
          </label>

          {/* btn */}
          <button
            type="submit"
            className="w-fit px-8 py-3 rounded-xl bg-tertiary text-white font-bold shadow-md shadow-primary outline-none"
          >
            { loading ? 'Sending...' : 'Send' }
          </button>
        </form>
      </motion.div>

      {/* earth canvas */}
      <motion.div
        variants={ slideIn( "right", "tween", 0.2, 1 ) }
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper( Contact, 'contact' )