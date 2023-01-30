import React, { useEffect, useState } from "react";

import useWindowDimensions from "../Hooks/useWindowDimensions";
import Logo from "../assets/Images/Logo.png";
import { Fade as Hamburger } from "hamburger-react";

const Header = () => {
  const [breakPointFlag, setBreakPointFlag] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width >= 768) {
      setBreakPointFlag(true);
    } else {
      setBreakPointFlag(false);
    }
  }, [width]);

  return (
    <div className="w-[100%] h-[110px] border-b-[1px] border-gray-200 bg-slate-50 flex justify-between items-center space-x-10">
      <img
        src={Logo}
        alt="Logo"
        className="w-[90px] h-[90px] object-contain mx-5 lg:mx-10"
      />
      {breakPointFlag ? (
        <ul className="flex justify-start items-center gap-12 w-[100%] text-md lg:text-lg">
          <li className="hover:Header-Items-Hover cursor-pointer">
            آزمون آیین نامه اصلی
          </li>
          <li className="hover:Header-Items-Hover cursor-pointer">
            نمونه سوالات آیین نامه
          </li>
          <li className="hover:Header-Items-Hover cursor-pointer">وبلاگ</li>
          <li className="hover:Header-Items-Hover cursor-pointer">
            تماس با ما
          </li>
        </ul>
      ) : (
        <Hamburger direction="right" duration={0.3} color="#335cca" />
      )}
    </div>
  );
};

export default Header;
