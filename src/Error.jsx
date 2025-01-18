import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
              <div className="boxShadow px-10 w-full min-h-[835px] py-16 flex flex-col justify-center rounded-xl"
             style={{
                backgroundImage: "url(https://i.ibb.co/02DvRcV/404.jpg)", backgroundSize: "cover",backgroundPosition: "center"
              }}>

            <h1 className="text-[2rem] sm:text-[3rem] font-[600] text-white w-full lg:w-[50%]">Go Home , You’re
                Drunk!</h1>

            <Link to="/"> <button className="py-3 px-8 w-max rounded-full bg-[#51c271] hover:bg-[#4ec46f] text-white mt-5">BACK TO
                HOME
            </button></Link>

        </div>
        </div>
    );
};

export default Error;