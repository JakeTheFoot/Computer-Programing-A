import React from "react";
import { useEffect } from "react";
import Photo from "./images/profile-image.png";
import NameLogo from "./components/NameLogo";
import GithubLogo from "./components/GithubLogo";
import Spirals from "./images/spirals.svg";
import ContactMe from "./components/ContactMe";

const App = () => {
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener("touchmove", preventDefault, { passive: false });
    return () => {
      document.removeEventListener("touchmove", preventDefault);
    };
  }, []);

  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    window.addEventListener("wheel", preventDefault, { passive: false });
    return () => {
      window.removeEventListener("wheel", preventDefault);
    };
  }, []);

  return (
    <div className="w-[100%] h-auto flex justify-center tblt:justify-end pr-0 tblt:pr-[29px] dskt:pr-[165px] overflow-y-scroll max-h-[100vh]">
      <div className="relative w-[174px] h-[384px] tblt:w-[233px] tblt:h-[377px] dskt:w-[445px] dskt:h-[720px] bg-dark-grey flex flex-col justify-end overflow-visible">
        <img src={Photo} alt="Me" />
        <div className="w-[530px] absolute left-[-350px] top-[106px] z-[-1] tblt:hidden">
          <img src={Spirals} alt="Spirals" />
        </div>
        <div className="hidden dskt:flex w-[130px] h-[130px] bg-none border-2 border-solid border-white absolute left-[-65px] bottom-[69px] rounded-full" />
        <div className="hidden dskt:flex w-[130px] h-[130px] bg-none border-2 border-solid border-white absolute right-[-65px] top-[158px]" />
        <NameLogo
          className="flex tblt:hidden dskt:hidden absolute top-[11px] left-[23px]"
          size="body"
        />
        <GithubLogo className="hidden tblt:flex dskt:hidden absolute top-[23px] right-[15.89px]" />
      </div>
      <GithubLogo className="flex tblt:hidden dskt:flex fixed top-[23px] right-[15.89px]" />
      <NameLogo
        className="hidden tblt:flex absolute top-[30px] tblt:left-[20px] dskt:left-[165px]"
        size={true}
      />
      <img
        src={Spirals}
        alt="Spirals"
        className="hidden absolute tblt:flex tblt:left-[-100px] tblt:top-[133px] z-[-1]"
      />
      <div className="flex tblt:hidden w-[113px] h-[113px] bg-none border-2 border-solid border-white fixed right-[-65px] top-[284px] rounded-full" />
      <div className="flex flex-col w-[343px] tblt:w-[508px] dskt:w-[739px] fixed top-[423px] tblt:top-[133px] tblt:left-[20px] dskt:left-[165px]">
        <h1 className="block text-center tblt:text-left text-white font-bold text-[36px] leading-[-1.14px] tblt:text-[55px] tblt:leading-[-2.5px] dskt:text-[80px]">
          Nice to meet you!
        </h1>
        <h1 className="block text-center tblt:text-left text-white font-bold text-[36px] leading-[-1.14px] tblt:text-[55px] tblt:leading-[-2.5px] dskt:text-[80px]">
          I'm Jake Silberstein
        </h1>
        <div className="bg-purple w-[278px] h-[4px] tblt:w-[418px] tblt:h-[7.5px] dskt:w-[612px] absolute bottom-0 right-1 tblt:right-0" />
      </div>
      <div className="flex flex-col w-[343px] tblt:w-[579px] fixed top-[570px] tblt:top-[400px] tblt:left-[20px] dskt:left-[165px] dskt:pt-[50px]">
        <h2 className="block text-center tblt:text-left text-grey text-[11px] tblt:text-[18px] tblt:font-medium">
          With extensive programming experience since age 9, I've cultivated a
          fervent passion for machine learning. Committed to continuous
          learning, I aspire to leverage my competencies in this field to
          eventually build my career.
        </h2>
      </div>
      <ContactMe className="absolute top-[682px] tblt:top-[588px] tblt:left-[29px] dskt:top-[584px] dskt:left-[165px]" />
      <div className="px-[16px] tblt:pl-[64px] dskt:pl-[330px] absolute top-[747px] w-[100%]">
        <div className="w-[100%] h-[1px] bg-grey" />
      </div>
    </div>
  );
};

export default App;
