import aboutImg from "..//assets/aboutme.jpg";
import { About_Content } from "../constans";
import {motion} from "framer-motion"

export default function About(){
    return(
        <div className="border-b border-neutral-900 pb-4 ">
          <h2 className="my-20 text-center text-4xl">About 
            <span className=" text-neutral-500"> ME</span>
          </h2>
          <div className="flex flex-wrap ">
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex items-center justify-center">
                <motion.img 
                whileInView={{opacity:1, x:0}}
                initial={{x:-100, opacity:0}}  transition={{duration:0.5}}
                src={aboutImg} className="rounded-2xl" width={500} height={500} alt="" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <motion.p 
                    whileInView={{opacity:1, x:0}}
                    initial={{x:100, opacity:0}}  transition={{duration:0.5}}
                    className="my-2 max-w-xl py-6 font-normal tracking-normal items-center m-auto  "> {About_Content} </motion.p>
                </div>
              </div>
          </div>
        </div>
    )
}