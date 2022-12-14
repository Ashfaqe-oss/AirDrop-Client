import React from 'react'
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex font-poppins flex-row justify-start items-center white-glassmorphism p-3 pb-6 m-5 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 rounded-full ml-3 flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5  flex flex-col flex-1">
      <h3 className="mt-2 text-zinc-200 text-lg">{title}</h3>
      <p className="mt-2 text-zinc-400 text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="flex text-poppins w-full justify-center items-center graddient=bg-services font-poppins">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-center items-start md:ml-11">
          <h1 className="text-white text-3xl sm:text-5xl py-2 p-8 m-5 text-gradient">
            Services that we
            <br />
            always improve
          </h1>
          <p className="test-left my-2 p-8  m-5 text-zinc-300 font-medium md:w-9/12 w-11/12 text-base">
            The best choice for buying and selling your crypto assets, with the
            various super friendly services we offer
          </p>
        </div>

        <div className="mt-10">
          <ServiceCard
            color="bg-[#2952E3]"
            title="100% Security Guarantee"
            icon={<BsShieldFillCheck fontSize={21} className="test-white" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />

          <ServiceCard
            color="bg-[#8945F8]"
            title="Best exchange rates"
            icon={<BiSearchAlt fontSize={21} className="test-white" />}
            subtitle="Providing you with the best exchange rates that no other market player provides(it's literally free)"
          />

          <ServiceCard
            color="bg-[#F84550]"
            title="Faster transactions"
            icon={<RiHeart2Fill fontSize={21} className="test-white" />}
            subtitle="It goes through the blockchain and gets verified in a snap ! we've got that in zipping speed .."
          />
        </div>
      </div>
    </div>
  );
};

export default Services