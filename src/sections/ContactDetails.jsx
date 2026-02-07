import { socials } from "../constants";
import { Particles } from "../components/Particles";

const ContactDetails = () => {
  return (
    <div className="h-screen relative flex flex-col items-center justify-center gap-16 bg-black">
      <Particles quantity={150} color="#ffffff" />

      <div className="text-center z-10 relative">
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-wide">
          Contact Me
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Let’s connect and build something meaningful
        </p>
      </div>

      <ul className="flex gap-6 z-10 relative">
        {socials.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={index} className="list-none">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`
                  relative block w-56 h-20 bg-neutral-900
                  pl-6 flex items-center gap-4
                  shadow-[-20px_20px_10px_rgba(0,0,0,0.6)]
                  transform -rotate-[30deg] skew-x-[25deg]
                  transition-all duration-500
                  ${item.color}
                  hover:translate-x-5 hover:-translate-y-3
                  hover:shadow-[-50px_50px_40px_rgba(0,0,0,0.8)]
                  group
                `}
              >
                <span className="absolute left-[-20px] top-[10px] w-[20px] h-full bg-neutral-700 skew-y-[-45deg]" />
                <span className="absolute bottom-[-20px] left-[-10px] w-full h-[20px] bg-neutral-700 skew-x-[-45deg]" />
                <Icon className="text-3xl text-gray-300 group-hover:text-white transition" />
                <span className="tracking-widest text-gray-300 group-hover:text-white transition">
                  {item.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactDetails;