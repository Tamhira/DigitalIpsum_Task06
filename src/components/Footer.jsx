import logo from "../assets/logo.png";
import img7 from "../assets/img7.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-black pt-24">
        <div className="text-center text-5xl text-white pb-14">
          HELLO@RETAWE.COM
        </div>
        <div className="h-0.5 px-0 bg-white w-full"></div>
        <div className="px-36 flex justify-between pb-20 pt-14">
          <div className="pr-14 pt-12">
            <div className="text-4xl">
              <img src={logo} alt="" />
            </div>
            <div className="pt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elitsed
            </div>
            <div className=" text-gray-500">
              do eiusmod tempor incididunt ut
            </div>
            <div className="flex justify-between text-2xl pt-8 ">
              <div>
                <FaPinterestP className="text-white" />
              </div>
              <div>
                <FaFacebookF className="text-white" />
              </div>
              <div>
                <FaInstagram className="text-white" />
              </div>
              <div>
                <FaTwitter className="text-white" />
              </div>
              <div>
                <BsWhatsapp className="text-white" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="text-lg font-semibold text-white">Our links</div>
            <div className="pt-4  text-gray-500">Lorem Ipsum</div>
            <div className="py-2 text-gray-500">Our Lorem Ipsum</div>
            <div className=" text-gray-500">Lorem Ipsum</div>
            <div className="py-2 text-gray-500">Lorem Ipsum</div>
            <div className=" text-gray-500">Lorem Ipsum</div>
          </div>
          <div className="">
            <div className="text-lg font-semibold text-white">Our links</div>
            <div className="pt-4  text-gray-500">Lorem Ipsum</div>
            <div className="py-2 text-gray-500">Our Lorem Ipsum</div>
            <div className=" text-gray-500">Lorem Ipsum</div>
            <div className="py-2 text-gray-500">Lorem Ipsum</div>
            <div className=" text-gray-500">Lorem Ipsum</div>
          </div>
          <div className="">
            <div className="text-lg font-semibold text-white">Our links</div>
            <div className="pt-4  text-gray-500">Lorem Ipsum</div>
            <div className="py-2 text-gray-500">Our Lorem Ipsum</div>
            <div className=" text-gray-500">Lorem Ipsum</div>
            <div className="py-2 text-gray-500">Lorem Ipsum</div>
            <div className=" text-gray-500">Lorem Ipsum</div>
          </div>
        </div>

        <div className="px-36 pb-14 flex justify-between">
          <div>
            <img src={img7} alt="" />
          </div>
          <div className="text-6xl font-semibold text-white">SANSTIVE-2024</div>
        </div>
      </div>
    </>
  );
}
export default Footer;
