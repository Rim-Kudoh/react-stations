// DO NOT DELETE
// DO NOT DELETE
import React,{useEffect, useState} from 'react'
import { BreedsSelect } from './BreedsSelect'
export const DogListContainer = () => {
   const [breeds,setBreeds]=useState([])
   const [selectedBreed,setSelectedBreed]=useState("")
   useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/list/all").then((response)=>{
      return response.json()
    }).then((res)=>{
      const abc=[]
      for (const key of Object.keys(res.message)){
          abc.push(key)
      }
      setBreeds(abc)
    })
   })
   return(
       <>
       <BreedsSelect breeds={breeds} onChange={e=>setSelectedBreed(e.target.value)} value={selectedBreed}/>
       </>
   )
}