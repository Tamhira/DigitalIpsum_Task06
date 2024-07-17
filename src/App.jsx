import home1 from "./assets/home1.png";
import home2 from "./assets/home2.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import { FaLocationArrow } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className=" bg-gradient-to-l from-[#E1EBE9] to-white">
      <Navigation></Navigation>
      <div className="flex px-36 pt-24">
        <div className="w-1/3 pt-14">
          <div className="text-4xl font-semibold">Building</div>
          <div className="text-4xl font-semibold py-2">Relationships, One</div>
          <div className="text-4xl font-semibold mb-2">Home at a Time</div>
          <div>
            <img src={home2} alt="" />
          </div>
        </div>
        <div className="w-2/3">
          <img src={home1} alt="" className="w-full" />
        </div>
      </div>
      <div className="py-24 px-36">
        <div className="text-8xl font-semibold text-center">
          DISCOVER YOUR PERFECT
        </div>
        <div className="flex justify-between">
          <div className="pt-14 text-2xl font-semibold">SANSTIVE-2024</div>
          <div className="text-8xl font-semibold">HOME TODAY</div>
          <div>
            <img src={img1} alt="" className="pr-14" />
          </div>
        </div>
      </div>
      <div className="py-24 px-36">
        <div className="flex gap-14">
          <div className="w-1/3">
            <div className="flex justify-center items-center">
              <img src={img5} alt="" />
            </div>
            <div className="pt-12 flex gap-20">
              <div>
                <div className="text-2xl font-bold">175K +</div>
                <div>TRUSTED USING US</div>
              </div>
              <div>
                <div className="text-2xl font-bold">12 +</div>
                <div>YEARS EXPERIENCE</div>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="text-2xl font-semibold">
              Turning Dreams into Reality
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </div>
            <div className="font-semibold text-4xl text-center pt-14">
              OUR DEDICATION TO YOUR COMFORT
            </div>
            <div className="pt-28 flex gap-20">
              <div>
                <div className="text-2xl font-bold">175K +</div>
                <div>TRUSTED USING US</div>
              </div>
              <div>
                <div className="text-2xl font-bold">12 +</div>
                <div>YEARS EXPERIENCE</div>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="text-2xl font-semibold">
              Turning Dreams into Reality
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </div>
            <div className="flex justify-center items-center pt-14">
              <img src={img6} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-12 px-36">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-6xl font-semibold">TOP-NOTCH SERVICES</h2>
            <h3 className="text-6xl font-semibold">
              FROM <span className="text-[#97B8B4]">SALES TO RENTALS</span>
            </h3>
          </div>
          <div>
            <FaLocationArrow className="text-[#97B8B4] text-6xl" />
          </div>
        </div>

        <div className="flex justify-between my-24 w-full">
          <div className="font-semibold text-5xl ">01</div>
          <div className="w-[950px]">
            <div className="text-5xl font-semibold">PROPERTY SALES</div>
            <div className="py-8 text-xl">
              HELPING YOU SELL YOUR PROPERTY AT THE BEST PRICE
            </div>
            <div className="">
              Our team of experienced agents will work with you to market your
              property effectively, attract potential buyers,and negotiate the
              best price. We provide end-to-end support to ensure a smooth and
              successful sale.
            </div>
          </div>
          <div className="border border-black px-4 h-10 pt-2">READ MORE</div>
        </div>

        <div className="flex justify-center  gap-8 my-24 w-full">
          <div className="font-semibold text-5xl ">02</div>
          <div className="w-[950px]">
            <div className="text-5xl font-semibold">PROPERTY RENTALS</div>
            <div className="py-8 text-xl">
              FIND THE PERFECT RENTAL WITH EASE
            </div>
            <div className="">
              Our team of experienced agents will work with you to market your
              property effectively, attract potential buyers,and negotiate the
              best price. We provide end-to-end support to ensure a smooth and
              successful sale.
            </div>
          </div>
          <div className="border border-black px-4 h-10 pt-2">READ MORE</div>
        </div>

        <div className="flex justify-center  gap-8 my-24 w-full">
          <div className="font-semibold text-5xl ">03</div>
          <div className="w-[950px]">
            <div className="text-5xl font-semibold">PROPERTY MANAGEMENT</div>
            <div className="py-8 text-xl">
              PROFESSIONAL MANAGEMENT FOR YOUR PEACE OF MIND
            </div>
            <div className="">
              Our team of experienced agents will work with you to market your
              property effectively, attract potential buyers,and negotiate the
              best price. We provide end-to-end support to ensure a smooth and
              successful sale.
            </div>
          </div>
          <div className="border border-black px-4 h-10 pt-2">READ MORE</div>
        </div>
      </div>
      <div className="mx-36 px-24 bg-[#97B8B4] py-24">
        <div className="flex justify-between">
          <div>
            <div className="text-6xl font-semibold">
              EXPLORE FRESH PROPERTIES
            </div>
            <div className="text-6xl font-semibold">HITTING THE MARKET</div>
            <div className="text-lg pt-6 pr-48">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad
            </div>
          </div>
          <div>
            <FaSquareArrowUpRight className="text-6xl pt-2 mt-4" />
          </div>
        </div>
        <div className="flex justify-center gap-64">
          <div className="pt-36 w-[300px]">
            <div>
              <img src={img2} alt="" />
            </div>
            <div className="flex justify-between py-2">
              <div>Your Name</div>
              <div>Jun, 12 2024</div>
            </div>
            <div className="text-2xl font-bold">
              Expert Advice for First-Time Homebuyers
            </div>
            <div className="pt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elitsed eiusmod
              tempor incididunt ut
            </div>
          </div>
          <div className="pt-14 w-[300px]">
            <div>
              <img src={img3} alt="" />
            </div>
            <div className="flex justify-between py-2">
              <div>Your Name</div>
              <div>Jun, 12 2024</div>
            </div>
            <div className="text-2xl font-bold">
              Expert Advice for First-Time Homebuyers
            </div>
            <div className="pt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elitsed eiusmod
              tempor incididunt ut
            </div>
          </div>
        </div>
        <div className="flex gap-14 pt-24 pl-64">
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <div className="flex gap-36 py-2">
              <div>Your Name</div>
              <div>Jun, 12 2024</div>
            </div>
            <div className="text-2xl font-bold">
              Expert Advice for First-Time Homebuyers
            </div>
            <div className="py-6 text-xl ">Read More</div>
          </div>
        </div>
      </div>
      <div className=" px-36 py-24">
        <div className="text-2xl font-semibold pb-8">
          AVAILABLE 24/7 FOR YOUR PROPERTY NEEDS
        </div>
        <div className="flex justify-between">
          <div className="text-6xl font-semibold">GET IN TOUCH</div>
          <div>
            <FaSquareArrowUpRight className="text-6xl pt-2 mt-4" />
          </div>
        </div>
        <div className="flex gap-28 py-8">
          <div className="flex gap-2">
            <div className="pt-1 text-lg">
              <MdEmail />
            </div>
            <div>HELLO@RETAWE.COM</div>
          </div>
          <div className="flex gap-2">
            <div className="pt-1 text-lg">
              <FaLocationDot />
            </div>
            <div>YOUR LOCATION, YOUR CITY</div>
          </div>
        </div>
        <div className="flex gap-14 ">
          <div className="bg-[#97B8B4] px-8 h-10 pt-2">GET STARTED</div>
          <div className="border border-black px-8 h-10 pt-2">CONTACT US</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;