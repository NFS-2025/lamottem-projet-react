
import { Link } from 'react-router-dom';
import logo from '../../public/image.png'; 

function Accueil() {
 

  return (
    <>
      <div className='mt-5 w-[350px] mx-auto'>
        <img src={logo} alt="Logo" />
      </div>
      <div className='flex gap-10 justify-center p-5 mt-10'>
        <div className='w-[300px] h-[400px] p-5 border-amber-300 border-2 rounded-xl'>
          <img src="https://dz3we2x72f7ol.cloudfront.net/expansions/151/fr-fr/SV3pt5_FR_151-2x.png" alt="" />
        </div>
         <div className='w-[300px] h-[400px] p-5 border-amber-300 border-2 rounded-xl'>
          <img src="https://dz3we2x72f7ol.cloudfront.net/expansions/151/fr-fr/SV3pt5_FR_124-2x.png" alt="" />
        </div>
        <div className='w-[300px] h-[400px] p-5 border-amber-300 border-2 rounded-xl'>
          <img src="https://dz3we2x72f7ol.cloudfront.net/expansions/151/fr-fr/SV3pt5_FR_65-2x.png" alt="" />
        </div>
      
      </div>
       <div className='flex justify-center w-full'>
        <Link to="/list-card" className='flex justify-center p-10 max-w-[500px]'>
          <button className='btn btn-primary p-5 w-full'>Voir toutes les cartes</button>
        </Link>
        </div>
    </>
  )
}

export default Accueil
