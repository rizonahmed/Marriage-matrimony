import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaDatabase, FaFemale } from "react-icons/fa";
import { BiMale } from "react-icons/bi";
import { MdWorkspacePremium } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminDash = () => {
  const [totalBiodata, setTotalBiodata] = useState(0);
  const [maleBiodata, setMaleBiodata] = useState(0);
  const [femaleBiodata, setFemaleBiodata] = useState(0);
  const [premiumBiodata, setPremiumBiodata] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    axios
      .get("https://find-partner-server.vercel.app/biodata")
      .then((response) => {
        const biodata = response.data;
        setTotalBiodata(biodata.length);
        setMaleBiodata(
          biodata.filter((item) => item.biodataType === "Male").length
        );
        setFemaleBiodata(
          biodata.filter((item) => item.biodataType === "Female").length
        );
      })
      .catch(error => {
      });

    axios
      .get("https://find-partner-server.vercel.app/premium")
      .then((response) => setPremiumBiodata(response.data.length))
      .catch(error => {
      });
    axios
      .get("https://find-partner-server.vercel.app/allPayments")
      .then((response) => {
        const revenue = response.data.length * 5;
        setTotalRevenue(revenue);
      })
      .catch(error => {
      });
    
    }, []);

  const pieChartData = {
    labels: [
      "Male Biodata",
      "Female Biodata",
      "Premium Biodata",
      "Total Revenue",
      "Total Biodata",
    ],
    datasets: [
      {
        data: [
          maleBiodata,
          femaleBiodata,
          premiumBiodata,
          totalRevenue,
          totalBiodata,
        ],
        backgroundColor: ["#4F46E5", "#ffa5d3", "#0303", "#9650d0", "#2080b4"],
        hoverOffset: 10,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <div className="stat bg-white shadow-lg p-4 rounded-lg text-center">
          <div className="stat-figure text-primary">
            <FaDatabase className="mx-auto font-bold text-2xl"></FaDatabase>
          </div>
          <div className="stat-title text-xl ">Total Biodata</div>
          <div className="stat-value text-[#2080b4] font-bold">{totalBiodata}</div>
        </div>

        <div className="stat bg-white shadow-lg p-4 rounded-lg text-center">
          <div className="stat-figure text-secondary">
            <BiMale className="mx-auto font-bold text-2xl"></BiMale>
          </div>
          <div className="stat-title text-xl">Male Biodata</div>
          <div className="stat-value text-[#4F46E5] font-bold">{maleBiodata}</div>
        </div>

        <div className="stat bg-white shadow-lg p-4 rounded-lg text-center">
          <div className="stat-figure text-accent">
            <FaFemale className="mx-auto font-bold text-2xl"></FaFemale>
          </div>
          <div className="stat-title text-xl">Female Biodata</div>
          <div className="stat-value text-[#ffa5d3] font-bold">{femaleBiodata}</div>
        </div>

        <div className="stat bg-white shadow-lg p-4 rounded-lg text-center">
          <div className="stat-figure text-info">
            <MdWorkspacePremium className="mx-auto font-bold text-2xl"></MdWorkspacePremium>
          </div>
          <div className="stat-title text-xl">Premium Biodata</div>
          <div className="stat-value font-bold">{premiumBiodata}</div>
        </div>

        <div className="stat bg-white shadow-lg p-4 rounded-lg text-center">
          <div className="stat-figure text-success">
            <RiMoneyDollarCircleLine className="mx-auto font-bold text-2xl"></RiMoneyDollarCircleLine>
          </div>
          <div className="stat-title text-xl">Total Revenue</div>
          <div className="stat-value text-[#9650d0] font-bold">${totalRevenue}</div>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className=" p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Biodata and Revenue Distribution
        </h2>
        <div className="max-w-lg mx-auto">
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
