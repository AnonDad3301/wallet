import { motion } from "framer-motion";
import Image from "next/image";

export default function Card({ title, image, children }){
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="card">
      {image && (
        <div className="overflow-hidden rounded-xl">
          <Image src={image} alt={title} width={1200} height={800} className="rounded-xl w-full h-auto object-cover"/>
        </div>
      )}
      {title && <h3 className="text-xl font-semibold mt-3">{title}</h3>}
      {children && <div className="text-white/80 mt-2">{children}</div>}
    </motion.div>
  )
}
