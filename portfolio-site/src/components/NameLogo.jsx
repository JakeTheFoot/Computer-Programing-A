import React from "react";

const NameLogo = ({ className, size = 19 }) => {
  return (
    <div className={className}>
      <p
        className={`inline text-white font-black lg:text-[32px] md:text-[32px] sm:text-[${size}px]`}
      >
        jake
      </p>
      <p
        className={`inline text-grey font-black lg:text-[32px] md:text-[32px] sm:text-[${size}px]`}
      >
        silberstein
      </p>
    </div>
  );
};

export default NameLogo;
