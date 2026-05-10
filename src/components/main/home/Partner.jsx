import React, { useEffect, useRef, useState } from "react";
import img1 from "../../../assets/canvas.png";
import img2 from "../../../assets/canvas1.png";
import img3 from "../../../assets/canvas2.png";
import img4 from "../../../assets/canvas3.png";
import img5 from "../../../assets/canvas4.png";
import { motion, useAnimation } from "framer-motion";

export default function Partner() {
  const images = [img1, img2, img3, img4, img5];

  const contentRef = useRef(null); // Ref for a single set
  const controls = useAnimation();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      // Calculate the width of one single loop including the gap
      setWidth(contentRef.current.offsetWidth + 64); // 64 is the gap-16 (4rem)
    }
  }, []);

  useEffect(() => {
    if (width === 0) return;

    controls.start({
      x: [0, -width],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [width, controls]);

  return (
    <div className="w-full overflow-hidden py-6">
      <motion.div className="flex w-max items-center" animate={controls}>
        {/* FIRST SET - We measure this one */}
        <div ref={contentRef} className="flex gap-16 pr-16">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="partner"
              className="h-20 w-auto object-contain"
            />
          ))}
        </div>

        {/* DUPLICATE SET */}
        <div className="flex gap-16 pr-16">
          {images.map((img, index) => (
            <img
              key={`dup-${index}`}
              src={img}
              alt="partner-dup"
              className="h-20 w-auto object-contain"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
