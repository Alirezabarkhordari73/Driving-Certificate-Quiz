import React from "react";

import { FcAbout } from "react-icons/fc";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import { SiAparat } from "react-icons/si";
import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";

import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mt-auto bg-slate-50 w-[100%] min-h-[200px] border-t-[1px] border-gray-200 gap-8 py-8 px-5 flex flex-col justify-start items-center lg:flex-row lg:justify-center lg:items-start md:flex-row md:justify-center md:items-start">
      <div className="w-[100%] h-[100%] md:w-[30%]">
        <ul className="flex justify-start items-center flex-col">
          <div>
            <li className="text-[1.1rem] font-semibold text-[#264b99]">
              درباره ما :
            </li>
            <li className="mt-5">
              هدف وب سایت آموزشگاه آنلاین آیین نامه رانندگی ایرانیان،آموزش آیین
              نامه راهنمایی و رانندگی با جدیدترین آزمون آیین نامه اصلی سال 1401
              با پاسخنامه می باشد.نمونه سوال آیین نامه رانندگی با جواب،سوالات
              آیین نامه رانندگی اصلی با جواب،نمونه سوالات ایین نامه با
              پاسخ،سوالات آیین نامه رانندگی مقدماتی با جواب ، دانلود رایگان
              سوالات آیین نامه رانندگی با جواب،چنانچه قصد شرکت در آزمون آیین
              نامه راهنمایی و رانندگی را دارید پیشنهاد می کنیم جهت آمادگی قبل از
              شرکت در آزمون آیین نامه و صرف هزینه وقت در آزمون های وب سایت شرکت
              نموده تا با نوع سوالات آشنا شوید.
            </li>
          </div>
        </ul>
      </div>
      <div className="w-[100%] h-[100%] md:w-[30%]">
        <ul className="flex justify-start items-center flex-col">
          <div>
            <div>
              <div>
                {/* <FcAbout /> */}
                <h6 className="text-[1.1rem] font-semibold text-[#264b99]">
                  نماد اعتماد الکترونیکی :
                </h6>
              </div>
              <p className="mt-5">
                یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
                متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
                مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛
              </p>
            </div>
          </div>
        </ul>
      </div>
      <div className="w-[100%] h-[100%] md:w-[30%]">
        <ul className="flex justify-start items-center flex-col">
          <div>
            <div>
              {/* <FaPhoneSquareAlt className="Phone-icon" /> */}
              <h6 className="text-[1.1rem] font-semibold text-[#264b99]">
                ارتباط با ما :
              </h6>
            </div>
            <p className="mt-5">
              جهت ارتباط با پشتیبانی گیم کالا به پیج اینستاگرام گیم کالا دایرکت
              یا پیام دهید :
            </p>
            <div className="mt-2">
              {/* <MdEmail /> */}
              <p className="text-[1.1rem] font-semibold text-[#264b99]">
                آدرس ایمیل
              </p>
              <p className="mt-1">aliirezaa.barkhordarii@gmail.com</p>
            </div>
            <div className="mt-2">
              {/* <FaPhoneSquareAlt /> */}
              <p className="text-[1.1rem] font-semibold text-[#264b99]">
                شماره های تماس
              </p>
              <p className="mt-1">07136362638</p>
              <p>07136362638</p>
            </div>
            <div className="flex justify-start items-center gap-5 text-2xl mt-2">
              <BsFacebook className="icons" />
              <BsTelegram className="icons" />
              <SiAparat className="icons" />
              <AiOutlineInstagram className="icons" />
              <AiFillTwitterCircle className="icons" />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
