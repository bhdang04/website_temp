

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flew-row
    items-center justify-between min-h-[calc(90vh-6rem)]">
        <div className="max-w-x1 m1-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
            <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r
            from-[#f5f7fa] to-[#c3cfe2] shadow-[0__15px_rgba(255,255,255,0.4)]
            rounded-full">
                <div className="absolute inset-[3px] bg-black rounded-full
                flex items-center justify-center">
                    <i class='bx bx-diamond'></i>
                    INTRODUCING
                </div>
            </div>

            <h1 className="text-3x1 sm:text-4x1 md:text-5x1 lg:text-6x1
            font-semibold tracking-wider my-8">
                EMAIL FOR
                <br />
                DEVELOPERS
            </h1>

            <p className="text-base sm:text-lg tracking-wider text-grey-400
            max-w-[25rem] lg:max-w-[30rem]">
                Build and send emails from your applications
                with ease using our powerful API and
                developer-friendly tools.
            </p>

            <div>
                <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4
                sm:px-5 rounded-full sm:text-lg text-sm'href="#">
                    Documentation <i class='bx bx-link-external'></i>
                </a>
            </div>
        </div>
    </main>


  )
}

export default Hero