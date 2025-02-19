import React from "react";

// react icons
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

// Basic Membership Card
const BasicMembershipCard = () => {
  return (
    <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] rounded-xl border bg-white border-[#e5eaf2] shadow-lg">
      <div className="w-full flex items-center justify-center flex-col p-6">
        <h2 className="text-[1.5rem] text-[#3B9DF8] font-[600]">Basic Matrimony Membership</h2>
        <p className="text-[#424242] text-[1rem]">Access to Wedding & Matrimony Services</p>

        <div className="flex mt-6 gap-1">
          <h2 className="font-[800] text-[4rem] leading-[4rem]">49.99</h2>
          <span className="text-[1.2rem] font-[500]">$</span>
        </div>
        <p className="text-[#424242] text-[0.9rem]">per year</p>
      </div>

      <h3 className="text-[1.2rem] font-[600] text-[#424242] mt-3 px-6">What You Will Get?</h3>
      <div className="flex gap-3 flex-col py-4 px-6">
        <p className="flex items-center gap-2 text-[#424242] text-[1rem]">
          <MdDone className="text-[#3B9DF8] text-[1.5rem]" /> Access to Basic Matrimonial Profiles
        </p>
        <p className="flex items-center gap-2 text-[#424242] text-[1rem]">
          <MdDone className="text-[#3B9DF8] text-[1.5rem]" /> RSVP to Regular Wedding Events
        </p>
        <p className="flex items-center gap-3 text-[#424242] text-[1rem]">
          <RxCross1 className="text-[#e73939] text-[1.2rem]" /> Personalized Matchmaking Service
        </p>
      </div>

      {/* Apply Now Button */}
      <div className="w-full text-center mt-4 mb-6">
        <button disabled className="px-12 py-2 text-[#fff] bg-gray-500 rounded-lg text-[1rem]">
        Coming Soon
        </button>
      </div>
    </div>
  );
};

// Standard Membership Card
const StandardMembershipCard = () => {
  return (
    <div className="w-full sm:w-[90%] md:w-[45%] lg:w-[30%] border rounded-xl bg-white border-[#e5eaf2] shadow-lg">
      <div className="w-full flex items-center justify-center flex-col p-6">
        <h2 className="text-[1.5rem] text-[#3B9DF8] font-[600]">Standard Matrimony Membership</h2>
        <p className="text-[#424242] text-[1rem]">Access to Premium Wedding & Matrimony Services</p>

        <div className="flex mt-6 gap-1">
          <h2 className="font-[800] text-[4rem] leading-[4rem]">99.99</h2>
          <span className="text-[1.2rem] font-[500]">$</span>
        </div>
        <p className="text-[#424242] text-[0.9rem]">per year</p>
      </div>

      <h3 className="text-[1.2rem] font-[600] text-[#424242] mt-3 px-6">What You Will Get?</h3>
      <div className="flex gap-3 flex-col py-4 px-6">
        <p className="flex items-center gap-2 text-[#424242] text-[1rem]">
          <MdDone className="text-[#3B9DF8] text-[1.5rem]" /> Access to Premium Matrimonial Profiles
        </p>
        <p className="flex items-center gap-2 text-[#424242] text-[1rem]">
          <MdDone className="text-[#3B9DF8] text-[1.5rem]" /> RSVP to Exclusive Wedding Events
        </p>
        <p className="flex items-center gap-2 text-[#424242] text-[1rem]">
          <MdDone className="text-[#3B9DF8] text-[1.5rem]" /> Personalized Matchmaking Assistance
        </p>
        <p className="flex items-center gap-3 text-[#424242] text-[1rem]">
          <RxCross1 className="text-[#e73939] text-[1.2rem]" /> Unlimited User Access
        </p>
      </div>

      {/* Apply Now Button */}
      <div className="w-full text-center mt-4 mb-6">
        <button disabled className="px-12 py-2 text-[#fff] bg-gray-500 rounded-lg text-[1rem]">
          Coming Soon
        </button>
      </div>
    </div>
  );
};

// Premium Membership Card
const PremiumMembershipCard = () => {
  return (
    <div className="w-full  sm:w-[90%] md:w-[45%] lg:w-[30%] border rounded-xl bg-white border-[#e5eaf2] shadow-lg">
      <div className="w-full flex items-center justify-center flex-col p-6">
        <h2 className="text-[1.5rem] text-[#3B9DF8] font-[600]">Premium Matrimony Membership</h2>
        <p className="text-[#424242] text-[1rem]">Exclusive Luxury Wedding & Matrimony Services</p>

        <div className="flex mt-6 gap-1">
          <h2 className="font-[800] text-[4rem] leading-[4rem]">199.99</h2>
          <span className="text-[1.2rem] font-[500]">$</span>
        </div>
        <p className="text-[#424242] text-[0.9rem]">per year</p>
      </div>

      <h3 className="text-[1.2rem] font-[600] text-[#424242] mt-3 px-6">What You Will Get?</h3>
      <div className="flex gap-3 flex-col py-4 px-6">
        <p className="flex items-center gap-2 text-[#424242] text-[1rem]">
          <MdDone className="text-[#3B9DF8] text-[1.5rem]" /> Access to Exclusive Matrimonial Profiles
        </p>
        <p className="flex items-center gap-2 text-[#424242] text-[1rem]">
          <MdDone className="text-[#3B9DF8] text-[1.5rem]" /> RSVP to Luxury Wedding Events
        </p>
        <p className="flex items-center gap-2 text-[#424242] text-[1rem]">
          <MdDone className="text-[#3B9DF8] text-[1.5rem]" /> Personalized Matchmaking Service
        </p>
        <p className="flex items-center gap-2 text-[#424242] text-[1rem]">
          <MdDone className="text-[#3B9DF8] text-[1.5rem]" /> Wedding Planner Recommendations
        </p>
        <p className="flex items-center gap-3 text-[#424242] text-[1rem]">
          <MdDone className="text-[#3B9DF8] text-[1.5rem]" /> 24/7 Customer Support
        </p>
        <p className="flex items-center gap-3 text-[#424242] text-[1rem]">
          <MdDone className="text-[#3B9DF8] text-[1.5rem]" /> Unlimited User Access
        </p>
      </div>

      {/* Apply Now Button */}
      <div className="w-full text-center mt-4 mb-6">
        <button className="px-12 py-2 text-[#fff] bg-gray-500 rounded-lg text-[1rem]" disabled>
           Coming Soon
        </button>
      </div>
    </div>
  );
};

const Membership = () => {
  return (
    <div className="w-10/12 mx-auto flex flex-wrap gap-6 justify-center mt-10 mb-10">
      <BasicMembershipCard />
      <StandardMembershipCard />
      <PremiumMembershipCard />
    </div>
  );
};

export default Membership;
