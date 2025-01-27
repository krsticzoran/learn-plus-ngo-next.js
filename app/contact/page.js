import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <section className=" ">
        <div className=" ">
          <div className="flex ">
            <div className=" mt-20 w-[640px] ml-auto">
              <h1 className="text-4xl sm:text-6xl font-bold   capitalize text-primary ">
                get in touch
              </h1>
              <p className="mt-4 text-lg leading-7 text-primary text-opacity-60 w-[90%]">
                We’re here to help! Reach out to us through{" "}
               
            email 
               
                or
              
                  phone
                
                , and check out the additional info
               
                  PDF for directions
                
                and more.
              </p>
              <div className="flex pt-20">
              <div className="flex flex-col items-center">
              <Image
        src="/icons/email.png"
        width={35}
        height={35}
        alt="email"
       
      />
      <h3 className="text-xl font-semibold text-primary uppercase pt-6">
      E-mail Us 
    </h3>
       <p className="text-primary text-lg pt-1">someemail@gmail.com</p>
           
              </div>
              <div
            className=" w-[1px] h-[150px] bg-primary mx-16"
           
          ></div>
              <div className="flex flex-col items-center">
              <Image
        src="/icons/location.png"
        width={35}
        height={35}
        alt="email"
      />
      <h3 className="text-xl font-semibold text-primary uppercase pt-6">
      Visit Our Office
    </h3>
       <p className="text-primary text-lg pt-1"> Josipa Jurja Strossmayera 65a</p>
       <p className="text-center" > 31000 Osijek</p>
          
              
              </div>
             
            </div>
            
            </div>
            <div className="w-[50%]  pl-[120px]  pt-[50px] ">
              <div className="bg-primary  rounded-[20px] relative h-[500px]  flex pt-20 items-center pl-[300px]"  >
              <Image
                src="/images/contact2.png"
                width={343}
                height={489}
               
                alt="call us"
                priority
                className="absolute left-[-80px] bottom-0"
                
              />
              <div className="">
              <div className="flex flex-col items-center pt-8">
              <Image
        src="/icons/mobile-phone.png"
        width={35}
        height={35}
        alt="contact"
        
      />
      <h3 className="text-xl font-semibold text-white  uppercase pt-6">
                Let's Talk
              </h3>
       <p className="text-white text-lg pt-1">+385 99 247 66 44</p>
              </div>
       </div>
             
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-white-one bg-cover bg-center bg-no-repeat  "
        id="visit"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="flex  space-x-8 py-28">
          

            {/* Let's Talk - test */}
            
  <div
    id="contact"
    className="bg-white shadow-md rounded-[20px] py-16 px-8 flex-1 hover:scale-105 cursor-pointer"
    style={{
      boxShadow: "0px 0px 30px 1px rgba(0, 0, 0, 0.15)",
    }}
  >
    <Link href="tel:+385992476644">
    <div className=" flex flex-col items-center">
    <div className="flex items-center justify-center w-[70px] h-[70px] bg-white-one rounded-full mb-6">
      <Image
        src="/icons/mobile-phone.png"
        width={40}
        height={40}
        alt="contact"
      />
    </div>
    <h3 className="text-xl font-semibold text-primary uppercase">
    Visit Our Office
    </h3>
    <p className="text-gray-one text-lg"> Josipa Jurja Strossmayera 65a
    <br className="text-center" /> 31000 Osijek</p>
    </div>
    </Link>
    
  </div>


            {/* E-mail Us*/}
            <div
              id="email"
              className="bg-white shadow-md rounded-[20px] py-16 px-8  flex-1  hover:scale-105 "
              style={{
                boxShadow: "0px 0px 30px 1px rgba(0, 0, 0, 0.15)",
              }}
            >
              
              <Link
            href="mailto:example@example.com">
              <div className="flex flex-col  items-center" >
              <div className="flex items-center justify-center w-[70px] h-[70px] bg-white-one rounded-full  mb-6">
                <Image
                  src="/icons/email.png"
                  width={40}
                  height={40}
                  alt="email"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary  uppercase">
                E-mail Us
              </h3>
              <p className="text-gray-one text-lg">someemail@gmail.com</p>
              </div>
              </Link>
             
            </div>
              {/* Visit Our Office*/}
              <div
              id="location"
              className="bg-white shadow-md rounded-[20px] py-16 px-8  flex-1 flex flex-col  items-center hover:scale-105 "
              style={{
                boxShadow: "0px 0px 30px 1px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="flex items-center justify-center w-[70px] h-[70px] bg-white-one rounded-full   mb-6">
                <Image
                  src="/icons/location.png"
                  width={40}
                  height={40}
                  alt="location"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary  uppercase">
                Visit Our Office
              </h3>
              <p className="text-gray-one text-lg text-center">
                Josipa Jurja Strossmayera 65a
                <br className="text-center" /> 31000 Osijek
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto mt-28 pb-28 px-4 sm:px-6" id="pdf">
        <div className="mb-16">
          <iframe
            src="/information.pdf"
            className="w-full h-[70vh]  border rounded-md"
            style={{
              overflow: "hidden",
              border: "1px solid #ccc",
            }}
            title="Information PDF"
          ></iframe>
        </div>
        <div className="">
          <a
            href="/information.pdf"
            download="Information.pdf"
            className="text-white bg-primary px-12 py-3  text-lg rounded-md font-bold leading-6 transition-colors duration-300 font-spartan"
          >
            Download PDF
          </a>
        </div>
      </div>

      <section></section>
    </>
  );
}
