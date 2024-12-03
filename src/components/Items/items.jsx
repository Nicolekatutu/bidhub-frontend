import { Suspense, lazy} from 'react'
import '../Items.css'

import house1 from '../../assets/house1.jpg'
import house5 from '../../assets/house5.jpg'
import house3 from '../../assets/house3.jpg'
import house4 from '../../assets/house4.jpg'
import Heart from "../../assets/Vector.svg";

import AuctionItems from '../shared/AuctionItems.Component';

const LazyAuctionItems = lazy(() => import("../shared/AuctionItems.Component"));

const auctionItems = [
    {
        img: house1,
        daysLeft: "3 Days left",
        descr: "4 Bedroom Bungalow, own compound, all ensuite",
        location: "Kitisuru,Nairobi, Kenya",
        start: "3rd Oct,2024",
        end: "5th Oct,2024",
    },
    {
        img: house5,
        daysLeft: "3 Days left",
        descr: "4 Bedroom Bungalow, own compound, all ensuite",
        location: "Kitisuru,Nairobi, Kenya",
        start: "3rd Oct,2024",
        end: "5th Oct,2024",
    },
    {
        img: house3,
        daysLeft: "2 Days left",
        descr: "4 Bedroom Bungalow, own compound, all ensuite",
        location: "Kitisuru,Nairobi, Kenya",
        start: "3rd Oct,2024",
        end: "5th Oct,2024",
    }, 
    {
        img: house4,
        daysLeft: "2 Days left",
        descr: "4 Bedroom Bungalow, own compound, all ensuite",
        location: "Kitisuru,Nairobi, Kenya",
        start: "3rd Oct,2024",
        end: "5th Oct,2024",
    }
]

const Items = () => {
  return (
    <div>
       
        <Suspense fallback={<div>Loading please wait...</div>}>
        <LazyAuctionItems title='Trending Items' items={auctionItems} />
        </Suspense>     

        
    </div>
  )
}

 export default Items
