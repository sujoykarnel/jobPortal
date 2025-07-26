import React from "react";
// eslint-disable-next-line no-unused-vars
import { easeOut, motion } from "motion/react";
import team1 from "../../assets/team/team-1.jpg";
import team2 from "../../assets/team/team-2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-1/4">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1/2 ">
          <motion.img
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={team1}
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-blue-500 shadow-2xl"
          />
          <motion.img
            animate={{ x: [150, 100, 150] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={team2}
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-l-[6px] border-b-[6px] border-blue-500 shadow-2xl"
          />
        </div>
        <div className="flex-1/2">
          <motion.h1
            animate={{ x: [0, 50, 0] }}
            transition={{
              duration: 5,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Leatest{" "}
            <motion.span
              animate={{ color: ["#ff5733", "#2bcdea", "#ff5733"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
