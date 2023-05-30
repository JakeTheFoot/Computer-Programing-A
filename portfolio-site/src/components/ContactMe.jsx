import React from "react";

const ContactMe = ({ className }) => {
  return (
    <div className={className}>
      <button className="w-[120px] h-[38px] bg-none text-white hover:text-purple text-[16px] tracking-[2.29px] font-bold">
        CONTACT ME
      </button>
      <div className="absolute bottom-0 bg-purple w-[120px] h-[2px]" />
    </div>
  );
};

export default ContactMe;
