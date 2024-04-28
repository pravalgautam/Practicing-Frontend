import Banner from '@/components/home/Banner'
import BlogSection from '@/components/home/BlogSection'
import Display from '@/components/home/Display'
import FAQSection from '@/components/home/FAQSection'
import FlashSale from '@/components/home/FlashSale'
import InstaPostSection from '@/components/home/InstaPostSection'
import NewsLetter from '@/components/home/NewsLetter'
import OfferSection from '@/components/home/OfferSection'
import OurProducts from '@/components/home/OurProducts'
import Testimonial from '@/components/home/Testimonial'
import TodaySale from '@/components/home/TodaySale'
import USPCard from '@/components/home/USPCard'
import React from 'react'

const page = () => {
  return (
    <main>
        <Banner/>
        <USPCard/>
        <Display/>
        <OurProducts/>
        <FlashSale/>
        <TodaySale/>
        <OfferSection/>
        <Testimonial/>
        <BlogSection/>
        <InstaPostSection/>
        <FAQSection/>
        <NewsLetter/>
    </main>
  )
}

export default page