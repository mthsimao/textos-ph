import { Link } from 'lucide-react';

function Footer() {
  return (
    <>
      <footer className="border-black/20 border-t p-8 mt-10">
        <div className="flex justify-center items-center">
          <h2 className='flex flex-row italic font-medium'>
            Feito por:
            <a
              href="https://matsimao.vercel.app"
              target="_blank"
              className="text-blue-500 underline pl-2 flex flex-row gap-1"
            >
              Matheus Simão 
              <Link />
            </a>
          </h2>
        </div>
      </footer>
    </>
  );
}

export default Footer;
