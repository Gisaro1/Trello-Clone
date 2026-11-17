function SideCard({image,text}:{image:string,text:string}) {
  return (
    <div className="px-4 pt-3 text-[#C9CACD] flex items-center gap-2">
        <img src={image} alt=""  className="h-8 rounded-lg"/>
        <h1 className="font-semibold">{text}</h1>
      </div>
  )
}

export default SideCard