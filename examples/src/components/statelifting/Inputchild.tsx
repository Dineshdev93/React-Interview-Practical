interface props {
     text : string , 
     setText : React.Dispatch<React.SetStateAction<string>>
}
export const Inputchild = ({text , setText}:props) => {
     return(
        <>
           <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  />
        </>
     )
}