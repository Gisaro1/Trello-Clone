function LeftDiv({ image,hover, text,textH }: { image: string,hover?:string, text: string,textH?:string }) {
  return (
   <div className="">
    <div className="group relative  gap-2 ml-10 py-2 w-56 cursor-pointer flex  px-2 hover:bg-[#1C2B42] transition-all duration-300 ease-out rounded-lg items-center">
      <img src={image} alt="" className={`h-5 shrink-0 ${hover ? "group-hover:hidden" : ""}`} />
      {hover && (
        <img
          src={hover}
          alt=""
          className="hidden h-5 shrink-0 group-hover:block"
        />
      )}
      <h1 className={`text-[#cecfd2] group-hover:text-[#669df1] text-sm font-semibold  ${textH ? "group-hover:hidden" : ""}`}>
        {text}
      </h1>
      {textH && (
        <h1 className="hidden text-[#669df1] text-sm font-semibold group-hover:block">
          {textH}
        </h1>
      )}
    </div>
    </div>
  )
}

export default LeftDiv