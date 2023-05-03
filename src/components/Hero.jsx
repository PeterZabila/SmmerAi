import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sum_logo" className='w-28 object' />
        <button 
          type='button' 
          onClick={() => window.open('https://google.com')}
          className='black_btn'  
        >
            Github
        </button>
        <h1 className='head_text'>
          SummerAi Articles with <br className='max-md:hidden'/>
          <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
          Simplify your reading with SummarAi, an open-source article summarizer
        </h2>
      </nav>
    </header>
  )
}

export default Hero
