import Image from "next/image";
import {Slide} from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Banner() {
  return (
    // <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
    // <Image src="http://links.papareact.com/0fm" alt="" layout="fill" objectFit="cover" />
    //   <div className="absolute top-1/2 w-full text-center">
    //     <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
    //     <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
    //       I&apos;m flexible
    //     </button>
    //   </div>
    // </div>
    <div>
      <Slide easing="ease">
        <div className="each-slide relative h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[700px] 2xl:h-[700px]">
          <Image
            src="https://i.postimg.cc/L5dkjZvg/1.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
          <span className="text-white">jawa</span>
        </div>
        <div className="each-slide relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <Image src="https://i.postimg.cc/2yfv1N84/2.jpg" alt="" layout="fill" objectFit="cover" />
          <span className="text-white">bali</span>
        </div>
        <div className="each-slide relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <Image src="https://i.postimg.cc/VLmn1whw/3.jpg" alt="" layout="fill" objectFit="cover" />
          <span className="text-white">bromo</span>
        </div>
        <div className="each-slide relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
          <Image src="https://i.postimg.cc/5thQrWzZ/4.jpg" alt="" layout="fill" objectFit="cover" />
          <span className="text-white">toraja</span>
        </div>
      </Slide>
    </div>
  );
}

export default Banner;
