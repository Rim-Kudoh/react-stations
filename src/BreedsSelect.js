// DO NOT DELETE
// DO NOT DELETE
import React from 'react'
export const BreedsSelect = (props) => {
   return (
 <div>
   <select value={props.value}
   onChange={e=>props.onChange(e)}>
      {
           props.breeds.map((val)=>{
               return(<option key={val} value={val}>
                        {val}
                     </option>)
           })
         }
    </select>
    <p>
    {props.value}
    </p>
 </div>)
}