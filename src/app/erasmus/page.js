import { Container } from "@/components/layout/container";

import { ongoingErasmusProjects as projects } from "@/data/erasmus";
import Image from "next/image";

import Erasmus1 from "@/assets/images/erasmus1.jpeg"; 
import Erasmus2 from "@/assets/images/erasmus2.jpg"; 
import Erasmus3 from "@/assets/images/erasmus3.jpg"; 


export default function ErasmusPage() {

    return (
        <Container className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5 mb-2.5">
        <h1 className="sr-only">Erasmus Projects</h1>
            <section className="flex justify-center items-center bg-green-muted rounded-4xl p-6 lg:p-12 text-3xl sm:text-4xl xxl:text-5xl font-medium h-80 lg:h-96">
                <h2>Ongoing Projects</h2>
                </section>

            {projects.map((proj, id) => (
        <article
          key={id}
          className="bg-white rounded-4xl p-6 lg:p-12 h-80 lg:h-96"
        >
            <div className="overflow-auto h-full no-scrollbar">
          <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
          {proj.projectCode && (
            <p className="text-sm text-gray-500 mb-2">{proj.projectCode}</p>
          )}
          <p className="text-sm mb-2">
            <span className="font-medium">Duration:</span> {proj.start} - {proj.end}
          </p>
          <p className="text-sm mb-2">
            <span className="font-medium">Coordinator:</span> {proj.coordinator}
          </p>
          <div className="text-sm">
            <span className="font-medium">Partners:</span>
            <ul className="list-disc ml-5 mt-1">
              {proj.partners.map((partner, i) => (
                <li key={i}>{partner}</li>
              ))}
            </ul>
          </div>
          </div>
        </article>
      ))}
       
           <section className="flex justify-center items-center text-white bg-blue-muted rounded-4xl p-6 lg:p-12 text-3xl sm:text-4xl xxl:text-5xl h-80 lg:h-96 font-medium"><h2>Previous Projects</h2></section>
           {projects.slice(1).map((proj, id) => (
     <article
     key={id}
     className="bg-white rounded-4xl overflow-hidden relative group cursor-pointer"
   >
    
     <div className="relative h-80 lg:h-96">
       <Image
         src={id % 3 === 0 ? Erasmus1 : id % 3 === 1 ? Erasmus2 : Erasmus3}
         alt={`Erasmus Project ${id + 1}`}
         fill
         className="object-cover"
         sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
       />
       
       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
       
       <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
         
         {proj.projectCode && (
           <div className="absolute top-6 right-6">
             <span className="text-xs font-mono text-white/80 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
               {proj.projectCode}
             </span>
           </div>
         )}
         
         <div className="text-white">
           <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-white drop-shadow-lg">
             {proj.title}
           </h3>
           
           <p className="text-white/90 mb-6 drop-shadow-md">
             <span className="font-medium">Duration:</span> {proj.start} - {proj.end}
           </p>
          </div>
        </div>
        </div>
       </article>
      ))}     
        </Container>
    )
}