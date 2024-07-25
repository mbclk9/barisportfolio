import logo from "../assets/logo.svg"
import github from "..//assets/socialmedia/github.svg"
import instagram from "..//assets/socialmedia/instagram.svg"
import linkedin from "..//assets/socialmedia/linkedin.svg"

export default function Navbar(){
    return(
        <nav className="mb-20 flex items-center justify-between">
           <div className="flex flex-shrink-0 items-center">
                <img src={logo}  alt="logo"  width={50} height={50}/>
           </div>
            <div className="m-8 flex items-center justify-center gap-4 text-neutral-300 ">
                <img src={github} width={20}  height={20} alt="github" />
                <img src={instagram} width={20} height={20} alt="instagram" />
                <img src={linkedin} width={20} height={20} alt="linkedin" />
            </div>
        </nav>
    )
}