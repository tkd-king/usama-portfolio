import React from 'react'
import Headings from '../atoms/Headings'

function ExperiencEducation() {
    const experience =[
      {
        title:"2022 - Present",
        heading:"Lead Developer",
        content:"Blockdots, London",

      },
      {
        title:"2021 - 2022",
        heading:"Full Stack Web Developer",
        content:"Parsons, The New School",

      },
      {
        title:"2020 - 2021",
        heading:"UI Designer",
        content:"House of Life, Leeds",

      },
      {
        title:"2018 - 2020 ",
        heading:"LJunior Graphics Designer",
        content:"Theme Junction, Bursa",

      },
    ]
    const education = [
      {
        title:"2020 - 2023",
        heading:"Programming course",
        content:"Harverd University",

      },
      {
        title:"2016 - 2020",
        heading:"Graphic design course",
        content:"University of Denmark",

      },
      {
        title:"2012 - 2015",
        heading:"Web design course",
        content:"University of California",

      },
      {
        title:"2010 - 2011 ",
        heading:"Design & Technology",
        content:"Parsons, The New School",

      },
    ]
  return (
    <div className=' px-[120px] py-8 grid grid-cols-2 gap-[100px]  items-center justify-center bg-gray-100 '  >
      <div className='flex flex-col gap-[20px] '>
        <Headings level='2' text='My Experience' /> 
        {experience.map((item, index) => (
          <div key={index} className='p-4 flex flex-col justify-start bg-white rounded-xl'>
            <Headings level='6' text={item.title} />
            <Headings level='4' text={item.heading} />
            <Headings level='10' text={item.content} />
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-[20px] '>
        <Headings level='2' text='My Education' /> 
        {education.map((item, index) => (
          <div key={index} className='p-4 flex flex-col justify-start bg-white rounded-xl'>
            <Headings level='6' text={item.title} />
            <Headings level='4' text={item.heading} />
            <Headings level='10' text={item.content} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperiencEducation