
import logo from '../../public/image.png'; 

function Accueil() {
 

  return (
    <>
      <div className='mt-5 w-[350px] mx-auto'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='flex gap-10 justify-center p-5 mt-10'>
        <div className='w-[300px] h-[350px] p-5 border-amber-300 border-2 rounded-xl'></div>
        <div className='w-[300px] h-[350px] p-5 border-amber-300 border-2 rounded-xl'></div>
        <div className='w-[300px] h-[350px] p-5 border-amber-300 border-2 rounded-xl'></div>
      </div>
    </>
  )
}

export default Accueil
