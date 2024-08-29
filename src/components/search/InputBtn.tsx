import { CiSearch } from 'react-icons/ci'

interface Props {
  value: string | number
}


const InputBtn = ( { value, setValue } : Props) => {

  console.log(value)
  
  return (
    <div className='w-[95%] m-auto mt-6'>
      <input type='text' 
      placeholder='Buscar peliculas...' 
      className='w-full border-none outline-none p-3  bg-gray-800 rounded-lg text-white text-md'
      value={value}
      onChange={(e) => setValue(e.target.value)}
       />
    </div>
  )
}

export default InputBtn
