import Link from "next/link";
import GoogleMapComponent from "@/components/ui/google-map";

export default function Contact() {
  return (
    <>
      <GoogleMapComponent />
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">
          View or Download Information PDF
        </h1>
        <div className="mb-6">
          <iframe
            src="/information.pdf"
            width="100%"
            height="600px"
            style={{ border: "1px solid #ccc" }}
            title="Information PDF"
          ></iframe>
        </div>
        <Link
          href="/information.pdf"
          download="Information.pdf"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
        >
          Download PDF
        </Link>
      </div>
    </>
  );
}
