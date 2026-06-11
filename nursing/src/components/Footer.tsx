import React from "react";
import Logo from "../assets/Background+Border.webp";
import LocationIcon from "../assets/Container-5.webp";
import PhoneIcon from "../assets/Component 1.svg";  

const Footer = () => {
  return (
    <footer className="w-full bg-[#120D0D] text-white border-t border-[#B33A3B]">
      {/* MAIN FOOTER */}
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 py-[30px] md:py-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE */}
          <div className="max-w-[500px]">
            {/* LOGO */}
            <img
              src={Logo}
              alt="SRI Logo"
              className="w-[110px] object-contain mb-6"
            />

            {/* DESCRIPTION */}
            <p className="text-[#A6A09B] text-[13px] leading-[1.9] font-[300] w-full md:max-w-[380px] mb-6">
            Shri Ram Institute, Dehradun (Estd. 1999) has nurtured careers
with academic trust for more than 26 years. Our dedicated
College of Nursing delivers professional, state-aligned clinical
instruction.
            </p>

            {/* TAG BUTTONS */}
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#292524] border border-[#44403B] rounded-[6px] text-[11px] tracking-wide px-4 py-2 text-[#D6D3D1] transition-all duration-300 font-[700]">
                INC APPROVED
              </button>

              <button className="bg-[#292524] border border-[#44403B] rounded-[6px] text-[11px] tracking-wide px-4 py-2 text-[#D6D3D1] transition-all duration-300 font-[700]">
                UGC REGISTERED
              </button>

              <button className="bg-[#292524] border border-[#44403B] rounded-[6px] text-[11px] tracking-wide px-4 py-2 text-[#D6D3D1] transition-all duration-300 font-[700]">
                GOVT HOSPITALS
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full flex flex-col gap-[24px]">
            {/* TITLE */}
            <h3 className="Montserrat-font text-[12px] font-[900] text-[#F5F5F4] ls-[1.2px] tracking-[1px] uppercase pb-[8px] border-b border-[#292524]">
              Campus Coordinates
            </h3> 
 
            <div className="flex items-start gap-4 ">
              <img
                src={LocationIcon}
                alt="Location"
                className="w-4 mt-2"
              />

              <p className="text-[#A8A2A2] text-[14px] leading-[1.8]">
                Campus Address <br />
                32, Majra, Sewla Kalan Road, Dehradun, Uttarakhand
              </p>
            </div>
 
            <div className="flex items-start gap-4">
              <img
                src={PhoneIcon}
                alt="Phone"
                className="w-4 mt-2"
              />

              <p className="text-[#A8A2A2] text-[14px] leading-[1.8]">
                Admission Counselor Direct <br />
            <a href="+91-7055547000" target="_blank" className="text-[#D6D3D1] font-[700]"> +91-7055547000</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="bg-[#0C0A09] border-t border-[#292524]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* COPYRIGHT */}
          <p className="text-[#6E6767] text-[11px] leading-[1.7] text-center md:text-left">
            © 2026 Shri Ram College of Nursing and Institute. All institutional
            rights reserved. Est. 1994.
            <br />
           Disclaimer: Shri Ram College of Nursing is fully recognized by the Indian Nursing Council (INC) and the Uttarakhand State Nursing Council (USMC). Clinical training logs represent actual partnerships with state-verified medical registry providers.
All final seats allocations conform strictly to institutional metrics.
          </p> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;