import React, { useState } from "react";
import BgImage from "../assets/Section.webp";
import CheckIcon from '../assets/Component2.svg';
import Arrow from '../assets/Component3.svg'
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Exact same fields matching the new premium UI
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    program: "Clinical Hospital & Surgical Nursing",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; 
    setIsSubmitting(true);
    try {
      const payload = new URLSearchParams({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        city: formData.city.trim(),
        course: formData.program,
        pageUrl: window.location.href,
        submittedAt: new Date().toISOString().slice(0, 10),
      });
      
      // Yahan aap apna fetch/Google Apps Script call track kar sakte hain
      navigate("/thank-you");
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      className=" overflow-hidden bg-cover bg-no-repeat bg-center lg:bg-center bg-left-top "
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    > 
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 py-14 lg:py-24">  
        <div className="grid lg:grid-cols-2 gap-12 items-center"> 
          <div>
            
            {/* TOP TAG */}
            <div className="inline-flex items-center gap-2 bg-[#F8EAEA] border border-[#d6616233] text-[#B33A3B] rounded-full px-4 py-2 text-[11px] mb-6 font-black tracking-[1px]">
              <div className="w-[8px] h-[8px] rounded-full bg-[#B33A3B]" /> 
              ADMISSIONS OPEN FOR B.SC NURSING 2026
            </div>

            {/* HEADING */}
            <h1 className="text-[34px] sm:text-[42px] md:text-[54px] leading-[1.05] font-black text-[#0C0A09] Montserrat-font max-w-[700px] tracking-[-1px] leading-[30px] md:leading-[58.32px]">
              Build a Respected Career<br className="hidden md:block"/> in Healthcare with {""}
              <span className="bg-gradient-to-r from-[#B33A3B] to-[#931B1C] bg-clip-text text-transparent">
                 {""}B.Sc Nursing
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-[#44403B] text-[14px] md:text-[17px] leading-[27.63px] font-normal  mt-6">
            Prepare for a rewarding future through high-quality nursing instruction,
comprehensive clinical exposure, and professional healthcare skills
development at Shri Ram College of Nursing.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8 max-w-[560px]">
              
              {/* CARD */}
              <div className="px-4 py-4 rounded-[12px] border border-[rgba(231, 229, 228, 0.80)] bg-white shadow-sm">
                <div className="flex items-center gap-3"> 
                  <div className="w-[32px] h-[32px] rounded-full bg-[#e6f7ee] flex items-center justify-center text-[#1c9b5f] text-[12px] shrink-0 mt-1">
                    <img src={CheckIcon} className="h-100 w-100 object-cover" alt="" />
                  </div> 
                  <div>
                    <h4 className="text-[12px] font-bold leading-[18px] text-[#1C1917] inter-font mb-0">
                    Clinical Training with Leading Govt. Hospital
                    </h4> 
                  </div>
                </div>
              </div> 

              {/* CARD */}
              <div className="px-4 py-4 rounded-[12px] border border-[rgba(231, 229, 228, 0.80)] bg-white shadow-sm">
                <div className="flex items-center gap-3"> 
                  <div className="w-[32px] h-[32px] rounded-full bg-[#e6f7ee] flex items-center justify-center text-[#1c9b5f] text-[12px] shrink-0 mt-1">
                    <img src={CheckIcon} className="h-100 w-100 object-cover" alt="" />
                  </div> 
                  <div>
                    <h4 className="text-[12px] font-bold leading-[18px] text-[#1C1917] inter-font mb-0">
                  26+ Years Educational Legacy
                    </h4> 
                  </div>
                </div>
              </div>

              {/* CARD */}
              <div className="px-4 py-4 rounded-[12px] border border-[rgba(231, 229, 228, 0.80)] bg-white shadow-sm">
                <div className="flex items-center gap-3"> 
                  <div className="w-[32px] h-[32px] rounded-full bg-[#e6f7ee] flex items-center justify-center text-[#1c9b5f] text-[12px] shrink-0 mt-1">
                    <img src={CheckIcon} className="h-100 w-100 object-cover" alt="" />
                  </div> 
                  <div>
                    <h4 className="text-[12px] font-bold leading-[18px] text-[#1C1917] inter-font mb-0">
                   Prime Dehradun Location
                    </h4> 
                  </div>
                </div>
              </div>

              {/* CARD */}
              <div className="px-4 py-4 rounded-[12px] border border-[rgba(231, 229, 228, 0.80)] bg-white shadow-sm">
                <div className="flex items-center gap-3"> 
                  <div className="w-[32px] h-[32px] rounded-full bg-[#e6f7ee] flex items-center justify-center text-[#1c9b5f] text-[12px] shrink-0 mt-1">
                    <img src={CheckIcon} className="h-100 w-100 object-cover" alt="" />
                  </div> 
                  <div>
                    <h4 className="text-[12px] font-bold leading-[18px] text-[#1C1917] inter-font mb-0">
                   Modern Nursing Learning
Environment
                    </h4> 
                  </div>
                </div>
              </div>
            </div>

            {/* LINK */}
            <button className="flex items-center gap-2 mt-8 text-[#B33A3B] text-[14px] font-black leading-[20.25px] hover:underline">
              Learn why students choose us <img src={Arrow} alt="" />
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end" id="AdmissionForm">
            
            {/* FORM CARD */}
           <div className="w-full max-w-[420px] bg-white rounded-[24px] border border-stone-200/50 shadow-[0_20px_50px_0_rgba(179,58,59,0.08)] relative">
            
            {/* Top Badge/Rating Floating */}
            <div className="absolute -top-[15px] -right-[20px] h-[48px] w-[48px] bg-[#fef3c6cc] border border-[#FEE685] text-[#BB4D00] text-[12px] font-bold p-2 rounded-full flex items-center gap-1 shadow-sm z-10">
              <span>★</span> 4.9
            </div>

            {/* Premium Header Maroon Area */}
            <div className="bg-[#B33A3B] p-6 md:p-8 text-white relative rounded-t-[24px]">
              <div className="flex items-center gap-3 mb-1">
                {/* Book Icon Replica */}
             <div className="flex flex-col gap-2">
                 <span className=""><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <g clip-path="url(#clip0_246_4817)">
    <path d="M9 5.25V15.75" stroke="#FFD230" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.25 13.5C2.05109 13.5 1.86032 13.421 1.71967 13.2803C1.57902 13.1397 1.5 12.9489 1.5 12.75V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H6C6.79565 2.25 7.55871 2.56607 8.12132 3.12868C8.68393 3.69129 9 4.45435 9 5.25C9 4.45435 9.31607 3.69129 9.87868 3.12868C10.4413 2.56607 11.2044 2.25 12 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V12.75C16.5 12.9489 16.421 13.1397 16.2803 13.2803C16.1397 13.421 15.9489 13.5 15.75 13.5H11.25C10.6533 13.5 10.081 13.7371 9.65901 14.159C9.23705 14.581 9 15.1533 9 15.75C9 15.1533 8.76295 14.581 8.34099 14.159C7.91903 13.7371 7.34674 13.5 6.75 13.5H2.25Z" stroke="#FFD230" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_246_4817">
      <rect width="18" height="18" fill="white"/>
    </clipPath>
  </defs>
                </svg></span>
                <h3 className="text-[18px] text-white  font-black -tracking-[0.5px] leading-none Montserrat-font">
                  Book Free Counseling
                </h3>
                <p className="text-[#F8EAEA] text-[12px] font-light">
                Get personalized guidance from our admissions committee.
              </p>
              </div>
              
              {/* Estd Badge */}
              <div className="shrink-0 border border-white/30 bg-white/10 text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full">
                ESTD 1999
              </div>
             </div>
            </div>

            {/* Form Fields Area */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4 md:space-y-6 bg-white rounded-b-[24px]">
              
              {/* FULL NAME */}
              <div>
                <label className="text-[11px] font-bold text-gray-700 tracking-wide uppercase block">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Elizabeth George"
                  className="w-full mt-1.5 bg-[rgba(250, 250, 249, 0.50)] border border-[rgba(231, 229, 228, 0.80)] rounded-[12px] px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#B33A3B] transition-all"
                />
              </div>

              {/* TWIN GRID FIELDS: PHONE & EMAIL */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 ">
                <div className="sm:col-span-6">
                  <label className="text-[11px] font-bold text-gray-700 tracking-wide uppercase block">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative mt-1.5 flex items-center">
                    <span className="absolute left-4 text-sm text-gray-400 font-medium">+91</span>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"maxLength={10}  
      value={formData.phone}
      onChange={(e) => { 
        const onlyNums = e.target.value.replace(/[^0-9]/g, "");
        setFormData({ ...formData, phone: onlyNums });
      }}  
                      placeholder="9012345678"
                      className="w-full bg-white border border-stone-200 rounded-[12px] pl-12 pr-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#B33A3B] transition-all"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label className="text-[11px] font-bold text-gray-700 tracking-wide uppercase block">
                    Email ID
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full mt-1.5 bg-white border border-stone-200 rounded-[12px] px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#B33A3B] transition-all"
                  />
                </div>
              </div>

              {/* CITY / CURRENT HABITAT */}
              <div>
                <label className="text-[11px] font-bold text-gray-700 tracking-wide uppercase block">
                  City / Current Habitat <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Dehradun"
                  className="w-full mt-1.5 bg-white border border-stone-200 rounded-[12px] px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#B33A3B] transition-all"
                />
              </div>

              {/* SPECIAL INTEREST FOCUS */}
              <div>
                <label className="text-[11px] font-bold text-gray-700 tracking-wide uppercase block">
                  Special Interest Focus
                </label>
                <select required
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full mt-1.5 bg-white border border-stone-200 rounded-[12px] px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#B33A3B] appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1em_1em] bg-[right_1rem_center] bg-no-repeat transition-all"
                >
                  <option value="Clinical Hospital & Surgical Nursing">Clinical Hospital & Surgical Nursing</option>
                  <option value="B.Sc Nursing (4 Years)">B.Sc Nursing (4 Years)</option>
                  <option value="General Nursing & Midwifery (GNM)">General Nursing & Midwifery (GNM)</option>
                  <option value="Auxiliary Nurse Midwifery (ANM)">Auxiliary Nurse Midwifery (ANM)</option>
                </select>
              </div>

              {/* ACTION SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-[#B33A3B] hover:bg-[#931B1C] active:scale-[0.99] text-white font-bold py-3.5 rounded-[12px] text-sm tracking-wide flex items-center justify-center gap-2 transition-all shadow-[0_1px_2px_0_rgba(179,58,59,0.05)] uppercase disabled:opacity-70"
              >
                {isSubmitting ? "Processing..." : "Book Free Counseling"}
                {!isSubmitting && <ArrowRight size={16} />}
              </button>

              {/* TRUST FOOTER MINI BADGES */}
              <div className="pt-2 flex items-center justify-between gap-4 text-[10px] text-gray-400 font-medium mt-4 px-1">
                <span className="flex items-center gap-1 text-center font-[10px] text-[#A6A09B]">🛡️ 100%
Confidential</span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1 text-center font-[10px] text-[#A6A09B]">🚫 No Spam
Calls</span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1 text-center font-[10px] text-[#A6A09B]">🏫 Trusted by 1000+
Students</span>
              </div>

            </form>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;