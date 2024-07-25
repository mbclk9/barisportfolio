import { ContactInfo } from "../constans"


export default function Contact(){
    return(
        <div className="border-b border-neutral-900 pb-20">
            <h2 className="my-10 text-center text-4xl ">Get In Touch</h2>
            <div className="text-center tracking-tighter text-neutral-500">
                <p className="my-4"> {ContactInfo.address} </p>
                <p className="my-4"> {ContactInfo.phone} </p>
                <a href="#"> {ContactInfo.email} </a>
            </div>
        </div>
    )
}