import { Hero_Content } from "../constans";
import profilePic from "../assets/profilepicture.jpg";
import { motion } from "framer-motion"



export default function Hero(){

    const framermotion = (delay) =>({
        hidden:{x:-100, opacity:0},
        visible:{
            x:0,
            opacity:1,
            transition:{delay: delay, duration:0.6}
        }
    })

    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
           <div className="flex flex-wrap">
               <div className="w-full lg:w-1/2">
            {Hero_Content.map((content,index) => (
                <div key={index} className="flex flex-col items-center lg:items-start ">
                    <motion.h1 
                    variants={framermotion(0)}
                    initial="hidden"   
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-[70px]"  > {content.userinfo}  </motion.h1>
                    <motion.span 
                    variants={framermotion(0.5)}
                    initial="hidden"   
                    animate="visible"
                    className=" bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent" > {content.userjob} </motion.span>
                    <motion.p 
                    variants={framermotion(1)}
                    initial="hidden"   
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-normal tracking-tight ">{content.usercontent}</motion.p>
                </div>
            ))}
            </div>
            <div className="w-full lg:w-1/2 lg:p-8 ">
                <div className="flex justify-center ">
                    <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.2}} src={profilePic} width={500} className=" rounded-2xl" alt="Barış Çelik" />
                </div>
               
            </div>
           </div>
        </div>
    )
}