import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <section className=" pb-20">
        <div className=" max-w-screen-xl mx-auto">
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
              <Link href="mailto:example@example.com" className="flex flex-col items-center">
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
           
              </Link>
              <div
            className=" w-[1px] h-[150px] bg-primary mx-16"
           
          ></div>
              <Link  href="#pdf" className="flex flex-col items-center">
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
          
              
              </Link>
             
            </div>
            
            </div>
            <div className="w-[50%]  pl-[50px]  pt-[50px] ">
              <div className="bg-primary  rounded-[20px] relative h-[500px]  flex pt-20 items-center pl-[345px] "  >
              <Image
                src="/images/contact1.png"
                width={485}
                height={515}
             
               
                alt="call us"
                priority
                className="absolute left-[-125px] bottom-0"
                
              />
              <div >
              <Link href="tel:+385992476644"  className="flex flex-col items-center pt-8  ">
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
              </Link>
       </div>
             
              </div>
            </div>
          </div>
        </div>
      </section>

     
          

         
      
       
      <section className="  bg-white bg-[url('/images/shape-15.png')] bg-cover bg-center bg-no-repeat  pt-28 pb-28" id="pdf">
        <div className="max-w-screen-xl mx-auto  ">
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
      </section>

      
    </>
  );
}
