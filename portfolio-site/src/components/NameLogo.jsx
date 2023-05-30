import React from "react";

const NameLogo = ({ className, size }) => {
  return (
    <div className={className}>
      <p
        className={`inline text-white font-black ${
          size !== true
            ? size
            : " font-normal text-[18px] leading-[28px] tblt:font-bold tblt:text-[24px] tblt:leading-[32px] dskt:text-[48px] dskt:leading-[56px] dskt:tracking-[-1.5px]"
        }`}
      >
        jake
      </p>
      <p
        className={`inline text-grey font-black ${
          size !== true
            ? size
            : " font-normal text-[18px] leading-[28px] tblt:font-bold tblt:text-[24px] tblt:leading-[32px] dskt:text-[48px] dskt:leading-[56px] dskt:tracking-[-1.5px]"
        }`}
      >
        silberstein
      </p>
    </div>
  );
};

export default NameLogo;
