import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type FormData = {
  nom: string
  email: string
  tel: string
  password: string
}




const schema = yup.object().shape({
  nom: yup.string().required('Veuillez entrer votre nom.'),
  email: yup
    .string()
    .email('Email invalide.')
    .required('Veuillez entrer votre email.'),
  tel: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Numéro invalide. Format attendu : 10 chiffres.')
    .required('Veuillez entrer votre numéro de téléphone.'),
  password: yup
    .string()
    .min(6, 'Le mot de passe doit contenir au moins 6 caractères.')
    .required('Veuillez entrer un mot de passe.'),
})

export default function Register() {

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

const onSubmit = async (data: FormData) => {
  try {
    const response = await fetch('http://localhost:3001/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (response.ok) {
  alert('Inscription réussie !')
  navigate('/login')
}
else {
      alert(result.message || 'Erreur lors de l’inscription.')
    }
  } catch (error) {
    console.error('Erreur de requête :', error)
    alert('Une erreur est survenue.')
  }
}


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-black">
          Inscription
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Nom */}
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-black">
              Nom
            </label>
            <div className="mt-2">
              <input
                id="nom"
                type="text"
                {...register('nom')}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-black outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
              {errors.nom && <p className="mt-1 text-sm text-red-500">{errors.nom.message}</p>}
            </div>
          </div>

    
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                {...register('email')}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-black outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
            </div>
          </div>

    
          <div>
            <label htmlFor="tel" className="block text-sm font-medium text-black">
              Téléphone
            </label>
            <div className="mt-2">
              <input
                id="tel"
                type="tel"
                {...register('tel')}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-black outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
              {errors.tel && <p className="mt-1 text-sm text-red-500">{errors.tel.message}</p>}
            </div>
          </div>

          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Mot de passe
            </label>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                {...register('password')}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-black outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>

         
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              S'inscrire
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Déjà inscrit ?{' '}
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Connectez-vous
          </a>
        </p>
      </div>
    </div>
  )
}
