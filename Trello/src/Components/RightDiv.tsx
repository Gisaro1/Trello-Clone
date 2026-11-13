function RightDiv({text,image}:{text:string,image:string}) {
  return (
   <div className="w-45.75 m-2 h-27.5 bg-[#1f1f21] shadow-md rounded-xl ">
    <div>
        <img src={image} alt=""  className="w-45.75 h-17.5 bg-cover bg-center rounded-t-xl "/>
    </div>
    <p className="text-sm font-semibold pl-3 pt-2">{text}</p>
   </div>
  )
}

export default RightDiv