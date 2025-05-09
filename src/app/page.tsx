import type { Metadata } from 'next';
import Image from "next/image";
import profilePict from '../../public/images/KTM.png';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya',
  openGraph: {
    images: 'https://example.com/default-image.jpg',
    url: 'https://example.com',
    title: 'Tentang Saya',
    description: 'Halaman tentang saya.'
  },
};

export default function Home(){
  return (
      <div className="mt-16 px-8 mb-16 flex flex-col items-center text-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
              <div className="absolute inset-0 w-full h-full rounded-full bg-blue-500 blur-2xl opacity-30 z-0"/>
              <Image src={profilePict} alt="picture" className="rounded-full shadow-lg border-white z-10 relative" layout="fill" objectFit="cover"/>
          </div>
          <header>
              <h1 className="font-bold text-4xl text-zinc-800">Tentang Saya</h1>
              <p className="text-lg text-zinc-600 mt-4 max-w-2xl">
              Selamat datang di website portofolio saya. Dalam website ini terdaftar proyek-proyek yang telah saya kerjakan beserta esai-esai yang telah saya tulis
              </p>
          </header>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              <div className="bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-zinc-700">Keahlian</h2>
                  <ul className="mt-4 text-zinc-600">
                      <li>- JavaScript & TypeScript</li>
                      <li>- React & Next.js</li>
                      <li>- PHP & Laravel</li>
                      <li>- Python & Machine Learning</li>
                  </ul>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                  <h2 className="text-2xl font-semibold text-zinc-700">Pendidikan</h2>
                  <ul className="mt-4 text-zinc-600">
                      <li>- Politeknik Negeri Malang</li>
                      <li>- SMA 5 MATARAM</li>
                  </ul>
              </div>
          </div>
          <div className="mt-12">
              <a href="http://example.com" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
                  Lihat Portofolio
              </a>
          </div>
      </div>
  );
}