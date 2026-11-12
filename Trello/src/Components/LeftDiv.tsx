function LeftDiv({ image, text }: { image: string; text: string }) {
  return (
    <div className='flex items-center gap-2 pl-10 pt-8'>
      <img src={image} alt='' className='h-5' />
      <h1 className='text-[#cecfd2] text-sm font-semibold'>{text}</h1>
    </div>
  )
}

export default LeftDiv