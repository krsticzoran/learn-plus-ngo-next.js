import Image from "next/image";

export default function MembershipInfoCard({ data }) {
  return (
    <>
      <div className="flex items-center ">
        <div className="flex items-center justify-center w-[70px] h-[70px] bg-blue-one rounded-full hover:bg-secondary transition-colors duration-300">
          <Image src={data.iconSrc} width={40} height={40} alt={data.title} />
        </div>
        <p className="text-white text-lg font-extrabold leading-6 ml-6">
          {data.title}
        </p>
      </div>

      {Array.isArray(data.description) ? (
        <ul role="list">
          {data.description.map((el, i) => (
            <li
              key={i}
              role="listitem"
              className={`text-lg leading-7 ${i === 0 ? "mt-4" : "mt-2"} text-gray-two`}
            >
              {el}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg leading-7 mt-4 text-gray-two">
          {data.description}
        </p>
      )}
    </>
  );
}
