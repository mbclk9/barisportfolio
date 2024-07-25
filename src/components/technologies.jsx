import reactlogo from "..//assets/technologies/react.svg";
import tailwindlogo from "..//assets/technologies/tailwind-css.svg";
import mongoDb from "../assets/technologies/mongodb.svg"
import sasss from "..//assets/technologies/sass.svg"
import { motion } from "framer-motion";

export default function Technologies(){

    const iconVariants = (duration) => ({
        initial :{ y:-10},
        animate :{
            y:[10,-10],
            transition:{
                duration:duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse",
            }
        }
    })

    return(
        <div className="border-b border-neutral-900 pb-24 lg:mb-35">
            <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}  
            className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}

            className="flex flex-wrap items-center justify-center gap-4 ">
                <motion.div 
                variants={iconVariants(1.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src={reactlogo}  width={30} alt="reactlogo" />
                </motion.div>
                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src={tailwindlogo}  width={30} alt="tailwindlogo" />
                </motion.div>
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src={sasss}  width={30} alt="sasss" />
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <img src={mongoDb}  width={30} alt="mongoDb" />
                </motion.div>
            </motion.div>
        </div>
    )
}