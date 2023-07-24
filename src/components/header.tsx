import React,{useState} from 'react'

const navs = [
  "About",
  "Careers",
  "History",
  "Services",
  "Projects",
  "Blog",
];

export default function Header() {

  const[ showNav , setNav ]= useState(false);


  return (
    <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-full items-center justify-between">
      <div className="flex-1  p-2 md:flex md:items-center text-2xl">
        {/* <a className="block text-teal-600" href="/"> */}
          {/* <span className="sr-only">Home</span> */}
          <img src="img/logo-bg.png"
         className="w-20  rounded-lg bg-blend-color-dodge"

          alt="" />
        <span className="ml-3 pb-1 hidden lg:block text-xl">Royal Associations</span>
        {/* </a> */}
      </div>

      <div className="md:flex md:items-center md:gap-12">

        <nav aria-label="Global" className="hidden md:block">
        { 
            navs.map( (ele) => {
                return <li>
                <a
                  className="text-gray-500 transition  hover:text-gray-500/75"
                  href="/"
                >
                  {ele}
                </a>
              </li>
            })
          }
        </nav>

        
        <div className="flex items-center gap-4">

          <div className="block md:hidden">
            <button
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              onClick={() => setNav(!showNav)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* mobiles nav */}
    <nav className={`md:hidden flex flex-col `} >
        <ul className={`flex flex-col items-center gap-6  text-[#000a06] bg-[#cdffea] py-8 rounded-md  justify-center transition-all ${showNav ? 'opacity-100 translate-x-0' : 'opacity-0 '}`}>
          { 
            navs.map( (ele) => {
                return <li>
                <a
                  className="text-gray-500 transition border-b-2 hover:text-gray-500/75"
                  href="/"
                >
                  {ele}
                </a>
              </li>
            })
          }
          </ul>
    </nav>

  </div>
</header>
    )
}
