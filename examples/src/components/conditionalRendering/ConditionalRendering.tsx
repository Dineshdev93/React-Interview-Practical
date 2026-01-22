import React, { useState } from "react"

interface storedData {
    id : number,
    name : string
}

export const ConditionalRendering : React.FC = () => {

    const data : storedData[] = [
       {id : 1 , name : "john"}, 
    ]
    
     const [loading , setloading] = useState<boolean>(false)
     const [datastate , setData] = useState<storedData[] | null>([])

     const fetch = () =>{
       setloading(true)
       setTimeout(()=>{
           setloading(false)
         setData(data)
       },200)
     }

    return(
        <>
           <h1>conditional rendering</h1>
           <button disabled={loading} onClick={fetch}>fetch data</button>
         {
            loading ? <h2>Loading. . . </h2> : 
             datastate?.map((item)=>{
                return(
                    <>
                      <h6 key={item.id}>{item.name}</h6>
                    </>
                )
             })
         }
        </>
    )
}