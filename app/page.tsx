import React from 'react'
import Hero from './sections/Hero'
import LogoCloudDemoPage from '@/components/Marquee'
import TestimonialSection from '@/components/testimonial'
import FeatureSection from './sections/FeaturedCard'
import TeamFeatureSection from './sections/TeamsSection'
import CallToAction from '@/components/call-to-action-1'
import StickyFooter from '@/components/footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LogoCloudDemoPage/>
      <FeatureSection/>
      <TeamFeatureSection/>
      <TestimonialSection/>
      <CallToAction/>
      <StickyFooter/>
    </div>
  )
}

export default Home