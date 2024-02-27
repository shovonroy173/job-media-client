import AllService from "../components/AllService"
import Banner from "../components/Banner"
import Buisness from "../components/Buisness"
import Features from "../components/Features"
import Guides from "../components/Guides"
import Reviews from "../components/Reviews"
import Services from "../components/Services"
import Works from "../components/Works"

const Home = () => {
  return (
    <>
    <Banner/>
    <Services/>
    <Features/>
    <AllService/>
    <Buisness/>
    <Reviews/>
    <Works/>
    <Guides/>
    </>
  )
}

export default Home