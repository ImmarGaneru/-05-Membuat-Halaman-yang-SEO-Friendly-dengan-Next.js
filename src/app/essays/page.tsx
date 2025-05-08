import type { Metadata } from 'next';
import Image, { StaticImageData } from "next/image";
import Image1 from '../../../public/images/project1.png';
import Image2 from '../../../public/images/project2.png';

export const metadata: Metadata = {
    title: 'Esai',
    description: 'Halaman esai',
    openGraph: {
        title: 'Esai',
        description: 'Halaman Esai.'
    },
};

type ArticleItemProps = {
    title: string;
    url: string;
    imageSrc: StaticImageData;
    description: string;
};

function truncateText(text: string, maxLength: number) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

function ArticleItem({ title, url, imageSrc, description }: ArticleItemProps) {
    return (
        <li>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Image className="w-full" src={imageSrc} alt={title} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">{truncateText(description, 100)}</p>
                    </div>
                </div>
            </a>
        </li>
    );
}

export default function Essays() {
    return (
        <div className="mt-16 px-8 mb-16">
            <header>
                <h1 className="font-bold text-4xl text-zinc-800">Esai</h1>
                <p className="text-base mt-6 text-zinc-600">Berikut adalah beberapa esai yang telah saya tulis.</p>
            </header>
            <div className="mt-16">
                <h2 className="text-2xl">Daftar Esai</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-8">
                    <ArticleItem title="Dokumentasi aplikasi clone netflix" url="https://example.com" imageSrc={Image1} description="Esai ini membahas tentang dokumentasi pembuatan aplikasi clone netflix. Termasuk perencanaan, desain, dan lain sebagainya" />
                    <ArticleItem title="Dokumentasi aplikasi clone discord" url="https://example.com" imageSrc={Image2} description="Esai ini membahas tentang dokumentasi pembuatan aplikasi clone discord. Termasuk perencanaan, desain, dan lain sebagainya" />
                </ul>
            </div>
        </div>
    );
}