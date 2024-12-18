
import { easeOut } from "motion";
import { motion } from "motion/react";
import team1 from '../../assets/team/team1.jpg';
import team2 from '../../assets/team/team2.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className="flex-1">
                <motion.img
                    src={team1}
                    animate={{y:[0, 50, 0]}}
                    transition={{duration:5}}
                    className="max-w-sm rounded-lg shadow-2xl border-l-4 border-b-4 border-blue-400" />
                    <motion.img
                    src={team2}
                    animate={{x:[100, 150, 0]}}
                    transition={{duration:5}}
                    className="max-w-sm rounded-lg shadow-2xl border-l-4 border-b-4 border-blue-400" />
               </div>
                <div className="flex-1">
                    <motion.h1 transition={{duration:2, delay:1, ease: easeOut, repeat:Infinity}} className="text-5xl font-bold">Latest job for you!</motion.h1>
                    <h1 className="text-5xl font-bold">Latest <motion.span animate={{color:['#f03426', '#33ffe3']}} transition={{duration:1.5, repeat:Infinity,}}> job</motion.span> for you!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;