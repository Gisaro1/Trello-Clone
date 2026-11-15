function Logos({icon,text}:{icon:string,text:string}) {
 return (
    <div className="flex items-center relative group">
      <div className="w-fit hover:bg-[#545456] p-1 rounded-sm transition-colors duration-200 cursor-pointer">
        <img src={icon} alt={text} className="h-4" />
      </div>
      <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-200 ease-in-out pointer-events-none absolute left-1/2 -translate-x-1/2 top-8 bg-gray-200 w-fit px-2 py-0.5 rounded-sm shadow-sm z-50">
        <span className="whitespace-nowrap text-[12px] text-black block">
          {text}
        </span>
      </div>
    </div>
  );
}

export default Logos