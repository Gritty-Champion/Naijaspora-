import {
  RiStarFill,
  RiYoutubeFill,
  RiPlayFill,
} from "@remixicon/react";
import { motion } from "framer-motion";
import React from "react";

interface VideoCardProps {
  title: string;
  thumbnailText: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnailText }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="rounded-lg overflow-hidden shadow-md font-montserrat flex flex-col h-full "
    >
      <div className="bg-primary-primary_container p-6 flex flex-col justify-center items-center text-center h-[180px] relative">
        <p className="text-secondary-20 font-medium text-title-small">
          {thumbnailText}
        </p>
        {/* <div className="relative inline-flex justify-center items-center">

  <RiYoutubeFill className="w-28 h-16 text-error-base" />


  <RiPlayFill className="absolute w-8 h-8 text-white" />
</div> */}

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative inline-flex justify-center items-center">
            <RiYoutubeFill className="w-28 h-16 text-error-base" />

            <RiPlayFill className="absolute w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-primary-on_primary_fixed p-4 text-white flex-grow text-center">
        <div className="flex items-center justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <RiStarFill key={i} className="w-5 h-5 text-[#FBFB15]" />
          ))}
        </div>
        <h3 className="text-title-medium font-bold">{title}</h3>
      </div>
    </motion.div>
  );
};

export default VideoCard;
