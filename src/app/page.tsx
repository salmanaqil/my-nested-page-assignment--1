import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className='bg-slate-500 font-extrabold '>Home Page</h1>
      <nav>
        <ul className='bg-slate-300 text:color neutral-800'>
        <li><Link href="/about" className=' font-semibold'>About</Link></li>
        <li><Link href="/contact" className='font-semibold'>Contact</Link></li>
        <li><Link href="/services" className='font-semibold'>Services</Link></li>
      </ul>
      </nav>
    </div>
  );
}