import { Link } from 'lucide-react';

function Footer() {
  return (
    <>
      <footer className="p-4 ">
        <div className="flex justify-center items-center bg-white/85 p-4 rounded-full">
          <h2 className='flex flex-row italic font-medium'>
            Feito por:
            <a
              href="https://matsimao.vercel.app"
              target="_blank"
              className="text-blue-700 underline pl-2 flex flex-row items-center gap-1"
            >
              Matheus Simão 
              <Link className='h-4 w-4'/>
            </a>
          </h2>
        </div>
      </footer>
    </>
  );
}

export default Footer;
