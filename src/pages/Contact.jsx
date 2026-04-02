import React from 'react'
import ContactHero from '../components/ContactLayout/ContactHero'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ContactInfo from '../components/ContactLayout/ContactInfo'
import ContactForm from '../components/ContactLayout/ContactForm'
import ContactFAQ from '../components/ContactLayout/ContactFAQ'


const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactFAQ />
      <Footer />
    </div>
  )
}

export default Contact
