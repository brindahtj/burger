import React from 'react'
import Burger from "./Burger";


export default function Home() {
const burgersData=[{name:'The New Yorker', description:'Un delicieux burger au boeuf', img:'1.png', price:'11€'},{name:'The Miami', description:'Un delicieux burger au poisson', img:'2.png', price:'12€'},{name:'The LA', description:'Un delicieux burger au poulet',img:'3.png', price:'13€'},]
const burgers= burgersData.map((burger,i)=>{
  return  <Burger key={i} {...burger} />
})
  return (
    <><h1>Burger Shop</h1>
        {burgers}
    </>
  )
}

