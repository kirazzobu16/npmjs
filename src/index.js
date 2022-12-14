import React,{useState} from 'react'
import styles from './styles.module.css'




export const Button=({type,text})=>{
  return <button className= {type==="primary"?styles.primary:""||type==="dashed"?styles.dashed:""||type==="link"?styles.link :""||type==="text"?styles.text:""} >{text}</button>
}