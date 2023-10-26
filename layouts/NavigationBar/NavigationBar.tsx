import Link from 'next/link';
import Image from 'next/image';

const NavigationBar = () => {
    return (
        <div className='w-full py-6 bg-teal-400 px-12 md:px-6 lg:px-0'>
            <nav className='w-full max-w-7xl mx-auto flex items-center justify-between'>
                <Link href={"/"}>
                    <Image 
                        src="/assets/imgs/logo.svg"
                        alt="Logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className='w-32'   
                    />
                </Link>
                <ul className="flex gap-x-6 text-slate-50 font-semibold text-sm md:text-base">
                    <Link href="/" className='hover:text-teal-700'>Home</Link>
                    <Link href="/about" className='hover:text-teal-700'>About</Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavigationBar;