function SmallCard({image,text} : {image:string,text:string}) {
  return (
    <div>
        <div className="bg-[#2C2C2E] w-fit px-4 flex items-center  mt-4 h-8 rounded-md gap-2">
                <img src={image} className="h-5" alt="" />
                <h1 className="text-sm font-semibold">{text}</h1>
              </div>
    </div>
  )
}

export default SmallCard