import React,{useState} from 'react'
import Card from './Components/Card'
import TopBar from './Components/TopBar'
import Header from './Components/Header'
import BottomBar from './Components/BottomBar'

function App() {
  let [cart,setCart]=useState(0)
  let data=[{saletag:false,
             image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
             name:"Fancy Product",
             price:" $40.00 - $80.00",
            ratings:false,
            originalprice:"",
            OriginalPrice:false,},

            {saletag:true,
              image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
              name:"Special Item",
              price:"$18.00",
             ratings:true,
             originalprice:"$20.00",
             OriginalPrice:true,},

             {saletag:true,
              image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
              name:"Sale Item",
              price:"  $25.00",
             ratings:false,
             originalprice:"$50.00",
             OriginalPrice:true,},

             {saletag:false,
              image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
              name:"Popular Item",
              price:"$40.00",
             ratings:true,
             originalprice:"",
             OriginalPrice:false,},

             {saletag:true,
              image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
              name:"Sale Item",
              price:"$25.00",
             ratings:false,
             originalprice:"$50.00",
             OriginalPrice:true,},

             {saletag:false,
              image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
              name:"Fancy Product",
              price:" $120.00 - $280.00",
             ratings:false,
             originalprice:"",
             OriginalPrice:false,},

             {saletag:true,
              image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
              name:"Special Item",
              price:"$18.00",
             ratings:true,
             originalprice:"$20.00",
             OriginalPrice:true,},

             {saletag:false,
              image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
              name:"Popular Item",
              price:"$40.00",
             ratings:true,
             originalprice:"",
             OriginalPrice:false,},]

  return <>

  <TopBar cart={cart} setCart={setCart}/>
  <Header/>

  <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              data.map((e,i)=>{
                return <Card e={e} key={i} cart={cart} setCart={setCart}/>
              })
            }
          </div>
      </div>
  </section>
  <BottomBar cart={cart} setCart={setCart} />
  </>
}

export default App