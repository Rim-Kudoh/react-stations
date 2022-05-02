// DO NOT DELETE
import React,{useState} from 'react'
import { DogImage } from './DogImage'
export const Description = () => {
  const [dogUrl,setDogUrl]=useState("https://images.dog.ceo/breeds/terrier-cairn/n02096177_4734.jpg")
  const otherUrl="https://images.dog.ceo/breeds/hound-plott/hhh_plott002.JPG"
  const handleClick=()=>{
    fetch("https://dog.ceo/api/breeds/image/random").then((response)=>{
      return response.json()
    }).then((res)=>{
      setDogUrl(res.message)
    })
  }
   return (
       <div>
      <p>犬の画像を表示するサイトです</p>
      <DogImage url={
          dogUrl
      }/>
      <button onClick={handleClick}>
        更新
      </button>
      </div>
    )
}