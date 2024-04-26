import Image from "next/image";
import clarifionLogo from "../../public/Clarifion_logo.png";
import mcaffeLogo from "../../public/McAfee_Secure.png";
import nortonLogo from "../../public/Norton.png";
import clarifionImage from "../../public/clarifion.png";
import customerImage from "../../public/customer-icon.png";
import starsCustomer from "../../public/stars-customer.png";
import verifyImage from "../../public/verify-customer.png";
import clarifionProduct from "../../public/image-removebg-preview (12) 1.png";
import satisfactionImage from "../../public/image 6.png";
import stars from "../../public/stars.png";
import cardsImage from "../../public/cards-image.png";
import { IoCheckmarkOutline, IoLockClosedOutline } from "react-icons/io5";
import { FiPercent } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <section className="py-[20px] h-auto sm:h-[100px] w-full bg-white">
        <div className="px-[20px] xl:px-0 max-w-[1245px] mx-auto flex justify-between items-center h-full">
          <Image
            src={clarifionLogo}
            className="h-[20px] w-auto sm:w-auto sm:h-[36px]"
            alt="Clarifion Logo"
          />
          <div className="flex gap-[32px] items-center">
            <Image
              src={mcaffeLogo}
              className="h-[20px] w-auto sm:w-auto sm:h-[32px]"
              alt="McAffe Logo"
            />
            <Image
              src={nortonLogo}
              className="h-[20px] w-auto sm:w-auto sm:h-[32px]"
              alt="Norton Logo"
            />
          </div>
        </div>
      </section>

      {/* Título */}
      <section className="w-full bg-[#FAFAFA] sm:bg-white pt-[50px] sm:pt-0">
        <div className="px-[20px] xl:px-0 max-w-[1245px] mx-auto flex flex-col gap-1 justify-center items-center text-black capitalize text-center">
          <h1 className="text-[32px] xl:text-[48px]">
            Wait ! Your Order In Progress.
          </h1>
          <h2 className="text-[16px] xl:text-[24px] font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </section>

      {/* Pasos */}
      <section className="w-full bg-[#FAFAFA] sm:bg-white pt-[24px] sm:pt-[60px]">
        <div className="px-[20px] xl:px-0 max-w-[1245px] mx-auto flex text-black capitalize justify-between text-[12px] sm:text-[20px]">
          <div className="flex flex-col sm:flex-row gap-[8px] items-center xl:gap-[20px]">
            <div className="flex justify-center items-center h-[20px] w-[20px] sm:h-[40px] sm:w-[40px] bg-[#85BF55] rounded-full text-white">
              <IoCheckmarkOutline className="h-[13px] w-[13px] sm:h-[30px] sm:w-[30px]" />
            </div>
            <div className="flex gap-1">
              <span className="hidden lg:flex">step 1:</span> cart review
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-[8px] items-center xl:gap-[20px]">
            <div className="flex justify-center items-center h-[20px] w-[20px] sm:h-[40px] sm:w-[40px] bg-[#85BF55] rounded-full text-white">
              <IoCheckmarkOutline className="h-[13px] w-[13px] sm:h-[30px] sm:w-[30px]" />
            </div>
            <div className="flex gap-1">
              <span className="hidden lg:flex">step 2:</span> checkout
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-[8px] items-center xl:gap-[20px]">
            <div className="flex justify-center items-center text-sm h-[20px] w-[20px] sm:h-[40px] sm:w-[40px] sm:text-[20px] bg-[#2C7EF8] rounded-full text-white">
              3
            </div>
            <div>
              <span className="flex gap-1 font-bold">
                <span className="hidden lg:flex">step 3:</span> special offer
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-[8px] items-center xl:gap-[20px]">
            <div className="flex justify-center items-center text-sm h-[20px] w-[20px] sm:h-[40px] sm:w-[40px] sm:text-[20px] bg-transparent border sm:border-2 border-[#2C7EF8] rounded-full text-[#2C7EF8]">
              4
            </div>
            <div className="flex gap-1">
              <span className="hidden lg:flex">step 4:</span> confirmation
            </div>
          </div>
        </div>
      </section>
      {/* Producto oferta */}
      <section className="w-full bg-[#FAFAFA] sm:bg-white pt-[24px] sm:pt-[40px] mb-[50px] sm:mb-[61px]">
        <div className="max-w-[1245px] mx-auto bg-[#FAFAFA] sm:border sm:rounded-xl h-full">
          <div className="flex flex-col sm:gap-[24px] w-full p-[20px] sm:p-[40px] xl:grid xl:grid-cols-2 ">
            <a href="#" className="hidden h-fit sm:flex">
              <Image
                src={clarifionImage}
                width={575}
                height={591}
                alt="1"
              ></Image>
            </a>
            <div className="col-start-1 row-start-2 ">
              <div className="hidden sm:flex sm:flex-col gap-[18px] w-full justify-start p-[24px] bg-[#FFFFFF] border rounded-xl">
                <div className="flex items-center gap-[13px]">
                  <Image src={customerImage} alt="2"></Image>
                  <div className="flex flex-col gap-[5px]">
                    <Image src={starsCustomer} alt="stars rating"></Image>
                    <div className="flex gap-[10px] items-center">
                      <span className="font-bold text-[14px]">Ken T.</span>
                      <Image src={verifyImage} alt="verify"></Image>{" "}
                      <span className="text-[12px] text-[#5BB59A]">
                        Verified Customer
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <p>
                    “As soon as the Clarifions arrived I put one in my bedroom.
                    This was late in the afternoon. When I went to the bedroom
                    in the evening it smelled clean. When I went to bed I felt I
                    could breathe better. Wonderful.”
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[25px] col-start-2 row-span-2 row-start-1 xl:ml-[40px] h-full xl:mt-[-10px]">
              <h3 className="text-[24px] sm:text-[32px] leading-[140%]">
                <span className="text-[#2C7EF8] ">ONE TIME ONLY</span> Special
                price for 6 extra Clarifion for only{" "}
                <span className="text-[#2C7EF8]">$14 each</span> ($84.00 total!)
              </h3>
              <div className="flex sm:justify-between items-center text-[16px]">
                <a
                  href="#"
                  className="min-w-[80px] h-[80px] sm:min-w-[134px] sm:h-[134px] mr-[16px] sm:mr-[24px]"
                >
                  <Image
                    className="w-full h-full bg-[#2C7EF8] border border-black rounded-xl "
                    src={clarifionProduct}
                    alt="3"
                  ></Image>
                </a>

                <div className="flex flex-col gap-[5px] w-full sm:w-fit">
                  <div className="flex justify-between">
                    <a href="#" className="text-[14px] sm:text-[20px]">
                      Clarifion Air Ionizer
                    </a>
                    <div className="flex items-center font-semibold ">
                      <span className="line-through text-[#969696] mr-[10px] text-[10px] sm:text-[16px]">
                        $180
                      </span>
                      <span className=" text-[#2C7EF8] text-[14px] sm:text-[22px]">
                        $84
                      </span>
                    </div>
                  </div>

                  <a href="#">
                    <Image src={stars} alt="stars rating"></Image>
                  </a>
                  <div className="flex items-center">
                    <div className="w-4 h-4 mr-4 bg-[#E3EEFF] rounded-full flex items-center justify-center">
                      <div className="w-[0.6rem] h-[0.6rem] bg-[#2C7EF8] rounded-full"></div>
                    </div>
                    <span className="font-light text-[12px] sm:text-[16px]">
                      12 left in Stock
                    </span>
                  </div>
                  <p className="hidden sm:flex leading-[140%] text-[#4D5254] w-full text-[12px] sm:text-sm">
                    Simply plug a Clarifion into any standard outlet and replace
                    bulky, expensive air purifiers with a simple.
                  </p>
                </div>
              </div>
              <div className="flex sm:hidden ">
                <p className="leading-[140%] text-[#4D5254] text-[12px] sm:text-sm">
                  Simply plug a Clarifion into any standard outlet and replace
                  bulky, expensive air purifiers with a simple.
                </p>
              </div>
              <div>
                <ul className="flex flex-col gap-[16px] text-[#4D5254] text-[12px] sm:text-[16px]">
                  <li className="flex gap-[12px] items-center">
                    <IoCheckmarkOutline className="text-[#2C7EF8] size-4 sm:size-[30px]" />
                    <span>
                      Negative Ion Technology may{" "}
                      <span className="font-semibold">help with allergens</span>
                    </span>
                  </li>

                  <li className="flex gap-[12px] items-center">
                    <IoCheckmarkOutline className="text-[#2C7EF8] size-4 sm:size-[30px]" />
                    <span>
                      Designed for{" "}
                      <span className="font-semibold">air rejuvenation</span>
                    </span>
                  </li>

                  <li className="flex gap-[12px] items-center">
                    <IoCheckmarkOutline className="text-[#2C7EF8] size-4 sm:size-[30px]" />
                    <span>
                      <span className="font-semibold">
                        Perfect for every room{" "}
                      </span>
                      in all types of places.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="w-full py-[12px] px-[16px] bg-[#EDF3FD] rounded-xl flex items-center gap-[16px]">
                <div className="h-[32px] w-[32px] bg-[#2C7EF8] text-white rounded-full flex justify-center items-center">
                  <FiPercent size={18} />
                </div>
                <div className="text-[14px] sm:text-[16px]">
                  Save <span className="text-[#2C7EF8]">53%</span> and get{" "}
                  <span className="text-[#2C7EF8]">6 extra Clarifision</span>{" "}
                  for only <span className="text-[#2C7EF8]">$14 Each</span>.
                </div>
              </div>
              <div className="w-full">
                <button className="w-full px-[64px] py-[16px] bg-[#59AE43] text-white font-bold uppercase rounded-full text-[14px] sm:text-[20px]">
                  yes - claim my discount arrow{" "}
                </button>
                <div className="text-center text-[11px] sm:text-[12px] text-[#4D5254] flex flex-col sm:flex-row sm:justify-between border rounded-lg broder-[#CFCFCF] mt-[12px] px-[16px] py-[8px] items-center">
                  {/* Mobile */}
                  <div className="flex items-center justify-center w-full sm:hidden">
                    <span className="capitalize">free shipping</span>
                    <span className="h-[16px] w-[1px] mx-[12px] bg-[#CFCFCF]"></span>
                    <span className="flex items-center">
                      <IoLockClosedOutline className="mr-[10px]" />
                      Secure 256-bit SSL encryption.
                    </span>
                  </div>
                  <div className="flex flex-col items-center w-full sm:hidden">
                    <span className="h-[1px] w-full bg-[#CFCFCF] my-[12px]"></span>
                    <div>
                      <Image
                        src={cardsImage}
                        alt="cards accepted logos"
                      ></Image>
                    </div>
                  </div>
                  {/* PC */}
                  <span className="hidden capitalize sm:flex">
                    free shipping
                  </span>
                  <span className="hidden sm:flex h-[16px] w-[1px] bg-[#CFCFCF]"></span>
                  <span className="items-center hidden sm:flex">
                    <IoLockClosedOutline className="mr-[10px]" />
                    Secure 256-bit SSL encryption.
                  </span>
                  <span className="hidden sm:flex h-[16px] w-[1px] bg-[#CFCFCF]"></span>
                  <div className="hidden sm:flex ">
                    <Image src={cardsImage} alt="cards accepted logos"></Image>
                  </div>
                </div>
                <div className="w-full text-center mt-[20px] text-[12px] sm:text-[16px]">
                  <button className="text-red-500 underline uppercase">
                    no thanks, i don&apos;t want this
                  </button>
                </div>
              </div>
              <div className="flex gap-[16px]">
                <Image
                  src={satisfactionImage}
                  alt="3"
                  className="w-[48px] h-[48px] sm:w-[88px] sm:h-[88px]"
                ></Image>
                <p className="leading-[140%] text-[#4D5254] text-[12px] sm:text-[16px]">
                  If you are not completely thrilled with your Clarifion - We
                  have a{" "}
                  <span className="font-bold">
                    30 day satisfaction guarantee
                  </span>
                  . Please refer to our return policy at the bottom of the page
                  for more details. Happy Shopping!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
