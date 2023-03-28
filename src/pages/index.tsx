import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import logotipo from '@/assets/logo.png'
import Image from "next/image"

export default function Home(): JSX.Element {
  return (
    <>
  <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
    <title>Handy Volunteers</title>
    
    <header className='bg-gray-700 fixed top-0 left-0 w-full' >
      <nav className='navbar flex justify-between p-2 h-20'>

        <Image alt='logo' src={logotipo} width={70}/>

          <ul className='nav-menu flex gap-16 items-center'>
            <li className='nav-inicio'>
              <a href='#' className='nav-link duration-500 bg-gray-700 border-none p-6 rounded-md text-white hover:bg-white hover:text-black'>Inicio</a></li>

            <li className='nav-sobrenos'>
              <a href='#' className='nav-link duration-500 bg-gray-700 border-none p-6 rounded-md text-white hover:bg-white hover:text-black'>Sobre Nós</a></li>
              
            <li className='nav-contato'>
              <a href='#' className='nav-link duration-500 bg-gray-700 border-none p-6 rounded-md text-white hover:bg-white hover:text-black'>Contato</a></li>
          </ul>

          <div className=' flex gap-2 mx-4 items-center'>
            <button className='btn-login shadow-md duration-700 bg-black  p-3 rounded-md text-white hover:bg-white hover:text-black flex'>Login</button>
            <button className='btn-cadastro shadow-md duration-700 bg-black p-3 rounded-md text-white hover:bg-white hover:text-black flex'>Cadastro</button>
          </div>
      </nav>
    </header>    

  <div className='h-screen flex items-start justify-center px-52 py-36 gap-40'>
   
    <div className='w-max'>

      <div className='bg-gray-700 shadow-md rounded-3xl p-6 space-y-6'>

        <div>
          <h2 className='font-bold text-center text-2xl text-white'>Cadastrar ONG</h2>
        </div>

        <div>
          <label htmlFor="nome-fantasia" className='block text-sm text-orange-500 font-bold mb-1 duration-500'>Nome Fantasia</label>
          <input id="nomefantasia" type="text" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200'/>
        </div>

        <div>
          <label htmlFor="razao-social" className='block text-sm text-orange-500 font-bold mb-1 duration-500'>Razão Social</label>
          <input id="razaosocial" type="text" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200' />
        </div>

        <div>
          <label htmlFor="cnpj" className='block text-sm text-orange-500 font-bold mb-1'>CNPJ</label>
          <input id="cnpj" type="number" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200 '/>
        </div>

        <div>
          <label htmlFor="areaatuacao" className='block text-sm text-orange-500 font-bold mb-1 duration-500'>Área de Atuação</label>
          <input id="areaatuacao" type="search" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200' />
        </div>

        <div>
          <label htmlFor="cep" className='block text-sm text-orange-500 font-bold mb-1'>CEP</label>
          <input id="cep" type="number" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200'/>
        </div>

        <div>
          <label htmlFor="logradouro" className='block text-sm text-orange-500 font-bold mb-1'>Logradouro</label>
          <input id="logradouro" type="text" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200'/>
        </div>

        <div>
          <label htmlFor="bairro" className='block text-sm text-orange-500 font-bold mb-1'>Bairro</label>
          <input id="bairro" type="text" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200'/>
        </div>

        <div>
          <label htmlFor="cidade" className='block text-sm text-orange-500 font-bold mb-1'>Cidade</label>
          <input id="cidade" type="text" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200'/>
        </div>

        <div>
          <label htmlFor="estado" className='block text-sm text-orange-500 font-bold mb-1'>Estado</label>
          <input id="estado" type="text" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200'/>
        </div>

        <div>
          <label htmlFor="email" className='block text-sm text-orange-500 font-bold mb-1 duration-500'>Email</label>
          <input id="email" type="email" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200' />
        </div>

        <div>
          <label htmlFor="telefone" className='block text-sm text-orange-500 font-bold mb-1 duration-500'>Telefone</label>
          <input id="telefone" type="tel" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200' />
        </div>

        <div>
          <label htmlFor="password" className='block text-sm text-orange-500 font-bold mb-1 duration-500'>Senha</label>
          <input id="password" type="password" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200' />
        </div>

        <div>
          <label htmlFor="password" className='block text-sm text-orange-500 font-bold mb-1 duration-500'>Confirmar Senha</label>
          <input id="password" type="password" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200' />
        </div>

        <div className='text-center text-white font-bold w-full bg-orange-500 p-3 rounded-3xl shadow-md duration-300 hover:text-white hover:bg-black' >
          <button>Cadastrar</button>
        </div>

      </div>      
    </div>

    <div className='bg-gray-700 shadow-md rounded-3xl p-6 space-y-6'>

        <div>
          <h2 className='font-bold text-center text-2xl text-white'>Cadastro de Voluntário</h2>
          </div>

          <div>
          <label htmlFor="name" className='block text-sm text-orange-500 font-bold mb-1 duration-500'>Nome Completo</label>
          <input id="name" type="text" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200'/>
          </div>

          <div>
          <label htmlFor="datanasc" className='block text-sm text-orange-500 font-bold mb-1 duration-500'>Data de Nascimento</label>
          <input id="datanasc" type="date" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200'/>
          </div>

          <div>
          <label htmlFor="telefone" className='block text-sm text-orange-500 font-bold mb-1 duration-500'>Telefone</label>
          <input id="telefone" type="tel" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200'/>
          </div>

          <div>
          <label htmlFor="email" className='block text-sm text-orange-500 font-bold mb-1 duration-500'>Email</label>
          <input id="email" type="email" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200'/>
          </div>
          
          <div>
          <label htmlFor="interesse" className='block text-sm text-orange-500 font-bold mb-1 duration-500'>Vaga de Interesse</label>
          <input id="interesse" type="text" className='w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200'/>
          </div>

          <div className='text-center text-white font-bold w-full bg-orange-500 p-3 rounded-3xl shadow-md duration-300 hover:text-white hover:bg-black' >
          <button>Cadastrar</button>
        </div>

    </div>
  </div>

      
    </>

  )
}
