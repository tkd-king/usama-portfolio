import React from 'react'
import WorkSection from '../orgnisms/WorkSection'
import Header from '../orgnisms/Header'
import Container from '../atoms/Container'
import Banner from '../orgnisms/Banner'
import Achivements from '../orgnisms/Achivements'
import Services from '../orgnisms/Services'

const HomeTemp = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Achivements />
      <Services />
      <Container>
        <WorkSection />
      </Container>
    </div>
  )
}

export default HomeTemp