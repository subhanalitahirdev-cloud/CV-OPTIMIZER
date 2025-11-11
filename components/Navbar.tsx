import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
         <nav className="flex flex-row justify-between items-center bg-white rounded-full p-4 w-full px-10 max-w-[1200px] mx-auto gap-10">
            <Link href="/">
                <p className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-[#AB8C95] via-[#000000] to-[#8E97C5]">CVOPTIMIZE</p>
            </Link>
            <Link href="/" className="bg-linear-to-b from-[#8e98ff] to-[#606beb] shadow-[0px_74px_21px_0px_#6678ef00] text-white rounded-full px-4 py-2 cursor-pointer w-fit">
                Upload Resume
            </Link>
        </nav>
    </div>
  )
}

export default Navbar