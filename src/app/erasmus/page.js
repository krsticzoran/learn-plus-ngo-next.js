import { Container } from "@/components/layout/container";

import { ongoingErasmusProjects as projects } from "@/data/erasmus";
import Image from "next/image";

import Erasmus1 from "@/assets/images/erasmus1.jpeg"; 
import Erasmus2 from "@/assets/images/erasmus2.jpg"; 
import Erasmus3 from "@/assets/images/erasmus3.jpg"; 
import CustomButton from "@/components/ui/custom-button";

export default function ErasmusPage() {

    return (
        <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-2.5">
            <div className="flex justify-center-center items-center bg-green-muted rounded-4xl p-6 lg:p-12 text-5xl text-white font-ibm-plex-sans"><h1>Ongoing Projects</h1></div>
            {projects.map((proj, id) => (
        <div
          key={id}
          className="bg-white rounded-4xl p-6 lg:p-12"
        >
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
      ))}
           <div className="flex justify-center-center items-center text-white bg-blue-muted font-ibm-plex-sans rounded-4xl p-6 lg:p-12 text-5xl"><h1>Previous Projects</h1></div>
           {projects.slice(1).map((proj, idx) => (
        <div
          key={idx}
          className="bg-white rounded-4xl overflow-hidden relative"
        >
        <div className="relative mx-6  mt-6  h-60 mb-8 rounded-4xl overflow-hidden">
  <Image
    src={idx % 3 === 0 ? Erasmus1 : idx % 3 === 1 ? Erasmus2 : Erasmus3}
    alt={`Erasmus Project ${idx + 1}`}
    fill
    className="object-cover w-full h-full "
  />
</div>
                  <div className="px-6 lg:px-12">
          <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
          {proj.projectCode && (
            <p className="text-sm text-gray-500 mb-2">{proj.projectCode}</p>
          )}
        <div className="mb-6">
          <p className="text-sm mb-28">
            <span className="font-medium">Duration:</span> {proj.start} - {proj.end}
          </p>
          <div className="absolute bottom-6 lg:bottom-12 left-6 lg:left-12">
          <CustomButton variant="tertiary" href="/#membership-heading" >
          Find Out More
            </CustomButton>
            </div>
            </div>
          </div>
        
        </div>
      ))}
        </Container>
        
    )
}