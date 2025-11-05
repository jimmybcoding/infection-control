import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center w-full h-20 text-center bg-gradient-to-r to-emerald-600 from-emerald-600 via-slate-900 text-slate-100">
        <p className="font-thin">
          Designed by Jimmy B
        </p>
        <Link 
        href='https://github.com/jimmybcoding?tab=repositories'
        target="_blank"
        >
          <FaGithub className="mx-auto h-6 w-6" />
        </Link>
        <p>
          {new Date().getFullYear()}
        </p> 
    </div>
  )
}

export default Footer
