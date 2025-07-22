import Image from "next/image";

export default function MembershipInfoCard({ data }) {
  return (
    <>
      <div className="flex items-center">
        <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-blue-one transition-colors duration-300 hover:bg-secondary">
          <Image src={data.iconSrc} width={40} height={40} alt={data.title} />
        </div>
        <p className="ml-6 text-lg font-extrabold leading-6 text-white">
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
        <p className="mt-4 text-lg leading-7 text-gray-two">
          {data.description}
        </p>
      )}
    </>
  );
}
