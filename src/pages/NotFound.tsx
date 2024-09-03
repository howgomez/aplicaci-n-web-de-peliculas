import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <div 
      className="text-white flex flex-col items-center justify-center h-screen"
    >
      <h1 className="mb-10 text-xl">Creo que estas perdido...</h1>
      <img src="https://prestashop.com/sites/default/files/wysiwyg/404_not_found.png" alt="" />

      <Link to='/'>
        <button className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go back to home
        </button>
      </Link>
    </div>
  )
}

export default NotFound
