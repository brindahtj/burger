import React, {useState} from 'react'
import styles from '../styles/Burger.module.css'


export default function Burger(props) {

  const {name, img, description, price}=props
  const burgersData=[]
  let [nb, setNb]=useState(0)
  const handleClickPlus=()=>{
  setNb(nb+1)

  }
  const handleClickMoins=()=>{
    if(nb>0){
      setNb(nb-1)
    }
  }

  return (
    <>
    <div className={styles.jcc}>
      <img src={img} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
        
      </div>
      <span className={styles.round}>{price}</span>
      <button onClick={()=>handleClickPlus()} className={styles.btn}>+</button>
        <div>{nb}</div>
        <button onClick={()=>handleClickMoins()} className={styles.btn}>-</button>
      
    </div>
    </>
  )
}



