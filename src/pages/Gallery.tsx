import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DomeGallery from "@/components/gallery/DomeGallery";

// Import all gallery images
import img0 from "@/assets/image.png";
import img1 from "@/assets/image copy.png";
import img2 from "@/assets/image copy 2.png";
import img3 from "@/assets/image copy 3.png";
import img4 from "@/assets/image copy 4.png";
import img5 from "@/assets/image copy 5.png";
import img6 from "@/assets/image copy 6.png";
import img7 from "@/assets/image copy 7.png";
import img8 from "@/assets/image copy 8.png";
import img9 from "@/assets/image copy 9.png";
import img10 from "@/assets/image copy 10.png";
import img11 from "@/assets/image copy 11.png";
import img12 from "@/assets/image copy 12.png";
import img13 from "@/assets/image copy 13.png";
import img14 from "@/assets/image copy 14.png";
import img15 from "@/assets/image copy 15.png";
import img16 from "@/assets/image copy 16.png";
import img17 from "@/assets/image copy 17.png";
import img18 from "@/assets/image copy 18.png";
import img19 from "@/assets/image copy 19.png";
import img20 from "@/assets/image copy 20.png";
import img21 from "@/assets/image copy 21.png";
import img22 from "@/assets/image copy 22.png";
import img23 from "@/assets/image copy 23.png";
import img24 from "@/assets/image copy 24.png";
import img25 from "@/assets/image copy 25.png";
import img26 from "@/assets/image copy 26.png";
import img27 from "@/assets/image copy 27.png";
import img28 from "@/assets/image copy 28.png";
import img29 from "@/assets/image copy 29.png";
import img30 from "@/assets/image copy 30.png";
import img31 from "@/assets/image copy 31.png";
import img32 from "@/assets/image copy 32.png";
import img33 from "@/assets/image copy 33.png";
import img34 from "@/assets/image copy 34.png";

const images = [
  img0, img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17, img18, img19,
  img20, img21, img22, img23, img24, img25, img26, img27, img28, img29,
  img30, img31, img32, img33, img34
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      <main className="pt-24 pb-24">
        <div className="container mx-auto px-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl font-bold sm:text-5xl text-primary">Gallery</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A glimpse into GDSS operations, events, and professional presence.
            </p>
          </motion.div>
        </div>

        {/* Dome Gallery Integration - Compact Centered Layout */}
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-5xl h-[75vh] relative bg-[#cc0000] border border-white/20 rounded-[40px] overflow-hidden shadow-[0_25px_60px_rgba(204,0,0,0.3)]"
          >
            <DomeGallery 
              images={images}
              fit={0.65}
              minRadius={600}
              overlayBlurColor="#cc0000"
              grayscale={false}
              imageBorderRadius="12px"
              openedImageWidth="450px"
              openedImageHeight="450px"
            />
          </motion.div>
        </div>



      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
