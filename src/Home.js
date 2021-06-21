import React from 'react'
import './Home.css'
import Product from './Product'
import Product1 from './Product1'

function Home() {
    return (
        <div className="home">
            <div className='home__container'>
              <img className="home_image" src={process.env.PUBLIC_URL + 'images/homeimage.jpg'} alt="homeimage1"/>  
            
            <div className="home_row">
            <Product id='2234' title="INSIGNIA NS-70DF710NA21 70-inch Smart 4K UHD - FireTV, Released 2020" price={700.90} image={process.env.PUBLIC_URL + 'images/tv.jpg'} rating ={5}/>
            </div>
            <div className="home_row">
            <Product id='16373236' title="Fostoy Adult Recreational Tennis Racket, 27 inch Tennis Racquet with Carry Bag, Professional Tennis Racket, Good Control" price={69.89} image={process.env.PUBLIC_URL + 'images/tennis.jpg'} rating ={5}/>
            <Product id='32435334' title="Senston Tennis Racket-27 inch 2 Players Tennis Racket Professional Tennis Racquet,Good Control" price={121.90} image={process.env.PUBLIC_URL + 'images/tennis1.jpg'} rating ={5}/>
            </div>
            <div className="home_row">
            <Product id='1236' title="Zero to One: Notes on Startups, or How to Build the Future" price={10.80} image={process.env.PUBLIC_URL + 'images/zerotoone.jpg'} rating ={5}/>
            <Product id='3234' title="The Startup Way: How Modern Companies Use Entrepreneurial Management" price={12.90} image={process.env.PUBLIC_URL + 'images/startup.jpg'} rating ={5}/>
            <Product id='1238'  title="The Four Steps to the Epiphany: Successful Strategies for Products that Win 1st Edition" price={10.80} image={process.env.PUBLIC_URL + 'images/fourstep.jpg'} rating ={5}/>
            </div>
            <div className="home_row">
            <Product id='125435'  title="Under Armour Unisex-Child Grade School Assert 8 Frosty Sneaker" price={14.90} image={process.env.PUBLIC_URL + 'images/shoe1.jpg'} rating ={5}/>
            <Product id='121238336' title="Western Chief Kids Lightweight, Comfortable EVA Toddler Play Water Shoe Sandal" price={16.98} image={process.env.PUBLIC_URL + 'images/shoe2.jpg'} rating ={5}/>
            <Product id='1230937'  title="Stride Rite 360 girls Artin 2.0 Athletic" price={18.0} image={process.env.PUBLIC_URL + 'images/shoe3.jpg'} rating ={5}/>
            <Product id='1212038'  title="Crocs girls Kids' Disney Clog | Mickey Mouse and Minnie Mouse Shoes" price={10.80} image={process.env.PUBLIC_URL + 'images/shoe4.jpg'} rating ={5}/>
         
            </div>
        
            <div className="home_row">
            <Product id='1235644' title="Homyu Makeup Mirror Mini Laptop Pocket Mirror Portable Compact for Makeup Travel Decor(White)" price={124} image={process.env.PUBLIC_URL + 'images/makeup3.jpg'} rating ={5}/>
            <Product id='12645233' title= "Oral-B Genius X Limited, Electric Toothbrush with Artificial Intelligence" price={137} image={process.env.PUBLIC_URL + 'images/makeup.jpg'} rating ={5}/>
            <Product id='12234343' title="ELECROW Crowtail Sensor Kit for Raspberry Pi Electronics and Programming Kit" price={136.5} image={process.env.PUBLIC_URL + 'images/makeup1.jpg'} rating ={5}/>
            <Product id='13324234' title="ISEE Water Wave Transparent Lace Front Wigs Human Hair Wigs" price={208} image={process.env.PUBLIC_URL + 'images/makeup2.jpg'} rating ={4}/>
                
            </div>
            <div className="home_row">
            <Product id='01234' title="2021 Newest HP 15.6 HD, 16GB RAM, 1TB HDD+256GB SSD" price={700} image={process.env.PUBLIC_URL + 'images/laptop1.jpg'} rating ={5}/>
            <Product id='00133' title="Lenovo IdeaCentre AIO 3, 16GB DDR4, 512GB Windows 10," price={800} image={process.env.PUBLIC_URL + 'images/laptop2.jpg'} rating ={4}/>
            <Product id='122233' title="2021 HP Stream 14 4GB RAM, 64GB eMMC, 1 Year Office 365, w/64GB SD" price={349} image={process.env.PUBLIC_URL + 'images/laptop3.jpg'} rating ={5}/>
            <Product id='134534' title="Lenovo Chromebook Flex 5 13 Intel Core i3-10110U Processor, 4GB DDR4 Onboard RAM, 64GB" price={404} image={process.env.PUBLIC_URL + 'images/laptop4.jpg'} rating ={4}/>   
            </div>
            </div>
        </div>
    )
}

export default Home
