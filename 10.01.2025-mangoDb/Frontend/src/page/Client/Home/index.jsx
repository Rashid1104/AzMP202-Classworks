import React from 'react'
import HomePart1 from '../../../components/HomeParts/HomePart1'
import Products from '../../../components/HomeParts/Products'
import HomePart2 from '../../../components/HomeParts/HomePart2'
import FeaturesPorducts from '../../../components/HomeParts/FeaturesProducts'
import AboutUs from '../../../components/HomeParts/AboutUs'
import Leadership from '../../../components/HomeParts/Leadership'
import HomePart3 from '../../../components/HomeParts/HomePart3'
import WeOfferServices from '../../../components/HomeParts/WeOfferServices'
import BlogPosts from '../../../components/HomeParts/BlogPosts'
import GetInTouch from '../../../components/HomeParts/GetInTouch'
const Home = () => {
  return (
    <div>
        <HomePart1 />
        <Products />
        <HomePart2 />
        <FeaturesPorducts />
        <AboutUs />
        <Leadership />
        <HomePart3 />
        <WeOfferServices />
        <BlogPosts />
        <GetInTouch />
    </div>
  )
}

export default Home