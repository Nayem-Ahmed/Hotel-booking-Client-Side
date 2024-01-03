

import { Helmet } from "react-helmet-async"
import Categories from "../../components/Rooms/Categories"
import Rooms from "../../components/Rooms/Rooms"
import ScrollToTopButton from "../../components/Button/ScrollToTopButton"



const Home = () => {
  return (
    <div>
      <Helmet><title>StayVista | Vacation Homes & Condo Rentals</title></Helmet> 
     <Categories></Categories>
     <Rooms></Rooms>
    <ScrollToTopButton></ScrollToTopButton>
    </div>
  )
}

export default Home
