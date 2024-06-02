import React, { useLayoutEffect, useRef } from 'react'
import { selectMode } from '../../Redux/ModeSlice'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import email from '../../assets/email.svg'
import linkedIn from '../../assets/linkedin.png'
import Twitter from '../../assets/twitter.png'
import Github from '../../assets/github.png'
import Gmail from '../../assets/gmail.png'
import whatsapp from '../../assets/whatsapp.png'
import { motion } from 'framer-motion'

export default function Contact() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const mode = useSelector(selectMode)

  const handleForm = (data) => {
    console.log(data);
  }

  const handleTouch = () => {
    document.getElementById("name").focus()
  }

  return (
    <div id='contact' className={`${mode} w-full min-h-[120vh] md:min-h-[100vh]`}>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        id='head' className={`w-full text-5xl text-center h-[70px] flex justify-center items-center uppercase`}>Contact</motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center h-[calc(100vh-70px)] w-full p-5'>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className='w-full h-full flex justify-center items-cente md:pl-[20%]'>

          <div className='flex flex-col gap-2'>

            <img className='w-full md:w-[80%] p-10' src={email} alt="" />

            <p className='hidden md:flex'>Let's Connect !</p>

            <div className='hidden md:flex flex-col gap-4 justify-center items-start'>

              <a className='flex gap-3' href="https://www.linkedin.com/in/arya-kishan-4b49a4284/"><img className={`w-8 bg-${mode == "light" ? "white" : "yellow"}-500 p-1 rounded-lg cursor-pointer`} src={linkedIn} alt="" srcSet="" />LinkedIn</a>

              <a className='flex gap-3' href="https://twitter.com/_arya_kishan_"><img className={`w-8 bg-${mode == "light" ? "white" : "yellow"}-500 p-1 rounded-lg cursor-pointer`} src={Twitter} alt="" srcSet="" />Twitter</a>

              <a className='flex gap-3' href="mailto:arya12345kishan@gmail.com"><img className={`w-8 bg-${mode == "light" ? "white" : "yellow"}-500 p-1 rounded-lg cursor-pointer`} src={Gmail} alt="" srcSet="" />Gmail</a>

            </div>

            <div className='hidden md:flex mt-1'>
              <button onClick={handleTouch} className='bg-yellow-400 rounded-lg p-2'>Get in Touch</button>
            </div>

          </div>

        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className='w-full flex flex-col gap-10 items-center justify-center' onSubmit={handleSubmit(handleForm)}>

          <input className='border-2 border-solid border-black w-[80%] p-2 text-yellow-400 rounded-lg' type="text" {...register("name")} placeholder='Your Name' id='name' name='name' />

          <input className='border-2 border-solid border-black w-[80%] p-2 text-yellow-400 rounded-lg' type="text" {...register("email")} placeholder='Your Email' id='email' name='email' />

          <textarea rows={5} className='border-2 border-solid border-black w-[80%] p-2 text-yellow-400 rounded-lg' type="text" {...register("message")} placeholder='Your Message' id='message' name='message' />

          <input className='w-[20%] bg-yellow-400 p-2 rounded-lg cursor-pointer' type="submit" />

        </motion.form>

      </div>


    </div>
  )
}

