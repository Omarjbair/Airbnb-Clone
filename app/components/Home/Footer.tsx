import Link from 'next/link';
import { links} from '@/app/utils/FooterLinks'
const Footer = () => {
    return (
        <footer className='mt-12 bg-gray-100 text-gray-600'>
            <div className='container grid grid-cols-2 md:grid-cols-4 gap-y-10 py-14'>
                {links.map((link) => (
                    <div key={link.title} className='space-y-4 text-xs text-gray-800'>
                        <h5 className='font-bold'>{link.title}</h5>
                        {link.links.map((item) => (<Link href={item} key={item} className='block '>{item}</Link>))}
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;