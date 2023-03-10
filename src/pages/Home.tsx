import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Banner3 from "../assets/Images/Banner3.jpg";
import Banner4 from "../assets/Images/Banner4.jpg";
import { reStartQuiz } from "../Redux/QuizSlice/QuizSlice";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="px-10 md:px-16 lg:px-20 xl:px-28 fade-in one">
      <p className="mt-10 lg:text-[1.1rem]">
        آزمون آیین نامه برای متوجه شدن میزان دانش شما در مورد قوانین راهنمایی و
        رانندگی طراحی می شود و شرکت در آزمون آیین نامه رانندگی اصلی موفق به
        قبولی شما شود. در این صفحه بخش های مختلف مثل تابلوها و علائم، فنی و
        فرهنگی در قالب تست های آنلاین فراهم شده تا با شرکت در آزمون های آیین
        نامه اصلی و آنلاین بتوانید 100% قبول بشوید.
      </p>
      <h1 className="text-[#2d4aaa] text-[1.3rem] md:text-[2rem] font-bold mt-5">
        آزمون آیین نامه اصلی
      </h1>
      <p className="mt-5 lg:text-[1.1rem]">
        ما در این سایت به شما کمک می کنیم با آزمون های آزمایشی آیین نامه اصلی
        رانندگی در سال 1401 خود را محک بزنید و یا ازمون ایین نامه آنلاین بخوانید
        و آن ها را یاد بگیرید تا باعث افزایش دانش شما در این زمینه بشود.
      </p>

      <p className="mt-5 lg:text-[1.1rem]">
        بعد از این که به کتاب مسلط شده و مفاهیم آن را درک می کنید، نیاز است تست
        بزنید و با سوالات آشنایی پیدا کنید برای این کار ضروری است بپردازید به
        دانلود آزمون های آیین نامه اصلی را با جواب یا به صورت آنلاین در سایت ما
        سوالات را دنبال کنید. آزمون اصلی بخش فنی دارد و سوالات سختتری نسبت به
        آزمون مقدماتی ارائه می شود و شاید فرصت کافی برای مطالعه تست های آیین
        نامه نداشته باشید پس بهترین روش مطالعه تست های آیین نامه است که تعداد
        زیادی سوال در این صفحه قرار دارد که با شرکت در هر آزمون با جواب آن ها را
        مشاهده خواهید کرد. ازمون ایین نامه اصلی به صورت حفظی، تحلیلی و مفهومی
        است پس تنها با حفظ کردن شاید نتوانید به تمام سوالات به درستی پاسخ دهید،
        بهترین راه حل کردن نمونه تست های آیین نامه می باشد که به شما کمک می کند
        بخش مفهومی و تحلیلی تست ها را هم یاد بگیرید.
      </p>
      <div className="flex flex-col justify-center items-start text-xl font-semibold text-[#fff] bg-[#2d4aaa] rounded-md mt-5 p-4">
        <h1>شما برای پاسخگویی به هر سال مدت زمان 30 ثانیه فرصت دارید</h1>
        <h1>با کلیک بر روی دکمه ی شروع آزمون شما وارد صفحه آزمون میشوید</h1>
      </div>
      <div className="flex justify-center items-center gap-7 p-4 border-[1px] border-[#2d4aaa]">
        <Link to="/quiz">
          <button
            onClick={() => dispatch(reStartQuiz())}
            className="w-[230px] h-[70px] bg-amber-400 text-white text-xl font-bold rounded-md mt-5 hover:bg-white hover:text-amber-400 hover:border-[1px] hover:border-[#ffbe46] transition-all ease-in duration-300 outline-none">
            شروع آزمون
          </button>
        </Link>

        <button className="w-[230px] h-[70px] bg-lime-600 text-white text-xl font-bold rounded-md mt-5 hover:bg-white hover:text-lime-600 hover:border-[1px] hover:border-[#7ec938] transition-all ease-in duration-300 outline-none">
          دریافت کتاب آیین نامه
        </button>
      </div>
      <h1 className="text-[#2d4aaa] text-[1.3rem] md:text-[2rem] font-bold mt-5">
        مراحل گذراندن ازمون ایین نامه رانندگی
      </h1>
      <p className="mt-5 lg:text-[1.1rem]">
        برای گذراندن آیین نامه رانندگی نیاز است آزمون اصلی آن را قبول بشید و بعد
        آموزش رانندگی به صورت عملی امتحان گرفته خواهد شد. شما با نمونه تست های
        آیین نامه که در این صفحه وجود دارد می توانید تمرین کنید و به راحتی از
        سوالات پر تکرار این آزمون استفاده کنید و به شما در قبولی آزمون کمک کند.
        ویدئو آیین نامه رانندگی به مجموعه قوانین و مقرراتی می گویند که باعث
        رانندگی صحیح و افزایش ایمنی در خیابان ها خواهد شد و رعایت این قوانین
        برای متقاضیان گواهینامه رانندگی برای خودرو ها ضروری می باشد. ازمون ایین
        نامه اصلی از کتاب آموزش رانندگی طراحی می شود و دانش متقاضی را در مفاهیم
        و دستورات این کتاب می سنجد. این آزمون شامل موارد فنی، قوانین راهنمایی و
        رانندگی، ایمنی، تعمیرات، فرهنگ سازی رانندگی و بسیاری از موارد دیگر که در
        کتاب آمده می باشد. مشاهده سوالات مشابه و تست آیین نامه اصلی می تواند به
        شما کمک کند با نحوه سوالات آشنا شوید و در آزمون های تستی خود را محک
        بزنید، همچنین مواردی که بلد نیستید را یاد بگیرید. ازمون ایین نامه اصلی
        فنی بخشی از ازمون اصلی ایین نامه می باشد که سوالات مربوط به فنی در آزمون
        مقدماتی نمی باشد. متقاضیان در آزمون مقدماتی آیین نامه نیاز نیست به
        سوالات فنی مسلط باشند و در آزمون اصلی ایین نامه باید بخش فنی را هم یاد
        بگیرند.
      </p>

      <div className="flex justify-center items-center mt-10">
        <img src={Banner3} alt="Banner3" />
      </div>

      <h1 className="text-[#2d4aaa] text-[1.3rem] md:text-[2rem] font-bold mt-5">
        جزئیات امتحان آیین نامه رانندگی
      </h1>
      <p className="mt-5 lg:text-[1.1rem]">
        آزمون به صورت تستی و حضوری گرفته می شود و متقاضیان باید سر جلسه آماده
        باشند، ممکن است این آزمون برای شما هم استرس زا باشد که امری طبیعی هست،
        با حل کردن آزمون های تستی آیین نامه این صفحه می توانید از استرس خود کاهش
        دهید. ازمون ایین نامه در سه بخش انجام می شود: بخش مقدماتی تئوری: در این
        بخش یک امتحان از ازمون ایین نامه مقدماتی از شما گرفته می شود که 30 سوال
        تستی می باشد و متقاضی باید به 26 سوال، پاسخ درست دهد. بخش آزمون ایین
        نامه اصلی: این هم سوالات آیین نامه که شامل بخش فنی هم می باشد است و
        مانند مقدماتی حداقل نیاز میباشد 26 سوال، پاسخ صحیح داده شود. در آزمون
        آیین نامه اصلی نیاز است مواردی مانند ترافیک، تابلوهای راهنمایی و رانندگی
        و اصلاحاتی در حوزه راه و جاده یاد گرفته باشید همچنین از مواردی مثل راه
        اصلی و فرعی، علائم، مسیرهای ماشین و پیاده روها و وضعیت های مختلف با خبر
        باشید، که برخی از تست آنلاین آیین نامه را در بر میگیرند، تا بتوانید به
        خوبی از پس این امتحان قبول شوید.
      </p>
      <h1 className="text-[#2d4aaa] text-[1.3rem] md:text-[2rem] font-bold mt-5">
        چگونه در تست آیین نامه اصلی موفق باشیم؟
      </h1>
      <p className="mt-5 lg:text-[1.1rem]">
        در این بخش باهم بررسی می کنیم چه عواملی رعایت بشه تا موفقیت با در آزمون
        آیین نامه قطعی باشد. موفقیت در تست ایین نامه نیازمند خواندن و تکرار و
        تمرین دارد که با داشتن تست های آیین نامه اصلی، می توانید این روند را
        سریعتر کنید. موفقیت در آزمون می تواند به عوامل مختلفی بستگی داشته باشد و
        آشنایی با سوالات و تست ها می تواند به شما در موفقیت کمک کند. شرکت در
        آزمون های آنلاین رایگان بهترین راه برای موفقیت در تست آیین نامه این است
        که ابتدا به کتاب مسلط باشید و سپس تست های رایگان این صفحه را شرکت کنید،
        این تست ها برگرفته از آزمون ها و خود کتاب می باشد و با شرکت در این آزمون
        ها 20 دقیقه فرصت دارید که به 30 سوال پاسخ دهید، دقیقا مانند آیین نامه که
        به صورت آنلاین و تستی می باشد شبیه سازی شده است. دانلود و مطالعه سوالات
        دانلود تست آیین نامه اصلی به شما کمک می کند تا با سوالات تستی در این
        زمینه آشنا شوید و موقع برگذاری آزمون آیین نامه اصلی خود موفقیت بیشتری
        داشته باشید. به تنهایی مطالعه این سوالات هم می تواند به شما در قبولی در
        آزمون کمک کند. در سوالات مربوط به تابلوهای راهنمایی رانندگی ممکن است
        دچار ضعف باشید، با شرکت در این آزمون های آنلاین و رایگان می توانید روی
        آن ها فکر کنید و آن ها را بخوانید، قطعا یاد خواهید گرفت و ضعف شما برطرف
        خواهد شد. آزمون اصلی شامل سوالات فنی هم می باشد که کل سوالات فنی خودروها
        جمعاوری شده و در اختیار کاربران قرار گرفته است. پیشنهاد می کنم بعد از
        مطالعه منبع اصلی کتاب، این سوالات تستی را شرکت کرده و هر کدام که اشتباه
        انتخاب کردید را یاد بگیرید. بخش های آزمون آیین نامه اصلی آیین نامه شامل
        بخش های مختلی است که هر کدام از این بخش ها سوالات خاص خودش را دارد در
        این قسمت با این بخش بندی آشنا خواهید شد. شرکت در آزمون های آنلاین رایگان
        بهترین راه برای موفقیت در تست آیین نامه این است که ابتدا به کتاب مسلط
        باشید و سپس تست های رایگان این صفحه را شرکت کنید، این تست ها برگرفته از
        آزمون ها و خود کتاب می باشد و با شرکت در این آزمون ها 20 دقیقه فرصت
        دارید که به 30 سوال پاسخ دهید، دقیقا مانند آیین نامه که به صورت آنلاین و
        تستی می باشد شبیه سازی شده است. دانلود و مطالعه سوالات دانلود تست آیین
        نامه اصلی به شما کمک می کند تا با سوالات تستی در این زمینه آشنا شوید و
        موقع برگذاری آزمون آیین نامه اصلی خود موفقیت بیشتری داشته باشید. به
        تنهایی مطالعه این سوالات هم می تواند به شما در قبولی در آزمون کمک کند.
        در سوالات مربوط به تابلوهای راهنمایی رانندگی ممکن است دچار ضعف باشید، با
        شرکت در این آزمون های آنلاین و رایگان می توانید روی آن ها فکر کنید و آن
        ها را بخوانید، قطعا یاد خواهید گرفت و ضعف شما برطرف خواهد شد. آزمون اصلی
        شامل سوالات فنی هم می باشد که کل سوالات فنی خودروها جمعاوری شده و در
        اختیار کاربران قرار گرفته است. پیشنهاد می کنم بعد از مطالعه منبع اصلی
        کتاب، این سوالات تستی را شرکت کرده و هر کدام که اشتباه انتخاب کردید را
        یاد بگیرید. بخش های آزمون آیین نامه اصلی آیین نامه شامل بخش های مختلی
        است که هر کدام از این بخش ها سوالات خاص خودش را دارد در این قسمت با این
        بخش بندی آشنا خواهید شد.
      </p>
      <div className="flex justify-center items-center mt-5">
        <img src={Banner4} alt="Banner4" className="mt-10" />
      </div>

      <h1 className="text-[#2d4aaa] text-[1.3rem] md:text-[2rem] font-bold mt-5">
        جزئیات ازمون ایین نامه
      </h1>
      <p className="mt-5 lg:text-[1.1rem]">
        ازمون ایین نامه متشکل شده از سوالات تحلیلی، تجربی، مفهومی و حفظی می باشد
        که نیاز است به آن ها مسلط باشید تا بتوانید در آزمون موفق باشید.سوالات
        تحلیلی بخش تحلیلی که می تواند سختترین نوع سوالات باشد با درک کردن برخی
        مفاهیم به راحتی می توانید به آن ها پاسخ دهید اما باید از این نوع سوالات
        حل کرده باشید و نهایت دقت لازم را داشته باشید. این نوع سوالات در آزمون
        هایی که در همین صفحه بالا قرار دارد بسیار زیاد وجود دارد، کافیست این
        سوالات را تمرین کنید. مثلا سوالات مربوط به حق تقدم، شرایط و حوادث جزو
        این دسته از سوالات می باشد که کافیست مفاهیم را بلد باشید و از این نوع
        سوالات قبلا حل کرده باشید تا به راحتی پاسخ دهید.
      </p>
      <h1 className="text-[#2d4aaa] text-[1.3rem] md:text-[2rem] font-bold mt-5">
        سوالات تجربی
      </h1>
      <p className="mt-5 lg:text-[1.1rem]">
        مجموعه سوالاتی گفته میشه که در هنگام یادگیری رانندگی عملی با آن ها
        مواجعه شده اید. این موارد اصول رانندگی است و طبق تجربه خود باید به آن ها
        پاسخ دهید. این بخش از سوالات نیازی ندارد که چیزی را مطالعه کنید و تنها
        باید تجربه داشته باشید و در بخش عملی به خوبی بعضی موارد را یاد گرفته
        باشید. که در آزمون تستی آیین نامه این صفحه هم از این نوع سوالات پر تکرار
        قرار گرفته است.
      </p>
      <h1 className="text-[#2d4aaa] text-[1.3rem] md:text-[2rem] font-bold mt-5">
        سوالات مفهومی
      </h1>
      <p className="mt-5 lg:text-[1.1rem]">
        سوالات مفهومی که برای خیلی از افراد سخت و دشوار است، با تمرین کردن در
        آزمون ها، به راحتی از پس آن برخواهید آمد چرا که بعضی از مفاهیم به شکل
        های مختلف طرح می شود و فقط کافیست مفاهیم در قالب تمونه سوالات این صفحه
        یاد بگیرید تا سوالات هر طوری از آن مفهوم در آیین نامه اصلی طرح شد
        بتوانید به آن پاسخ کامل دهید.
      </p>
      <h1 className="text-[#2d4aaa] text-[1.3rem] md:text-[2rem] font-bold mt-5">
        سوالات حفظی
      </h1>
      <p className="mt-5 lg:text-[1.1rem]">
        در این قسمت سوالات حفظی که سختی چندانی ندارد و می توانید نکات برجسته
        کتاب را بخوانید یا در آزمون ها شرکت کنید و سوالاتی که همینطور تکرار
        میشود را به خاطر بسپارید تا به راحتی به این سوالات پاسخ درست دهید. به
        طور مثال قوانین و تابلوها از این دسته سوالات می باشد که باید آن ها را
        حفظ کنید اما با تمرین در آزمون های آیین نامه آنلاین، می توانید راحتتر
        این موارد را حفظ کنید. بتوانید به آن پاسخ کامل دهید.
      </p>
      <h1 className="text-[#2d4aaa] text-[1.3rem] md:text-[2rem] font-bold mt-5">
        تست آزمون آنلاین آیین نامه چگونه است؟
      </h1>
      <p className="my-10 lg:text-[1.1rem]">
        در بالای همین صفحه، ازمون های آنلاین ایین نامه گذاشته شده و با کلیک روی
        هر کدام می توانید در آزمون شرکت کنید و خود را محک بزنید. حتی از این
        آزمون آنلاین برای یادگیری هم می توانید استفاده کنید به این صورت که هر
        کدام از سوالات را بخوانید و روی راهنمای کلیک کنید تا پاسخ مشخص شود. برای
        شرکت رایگان در آزمون و تست انلاین آیین نامه کافیست هر کدام که مدنظرتون
        هست را انتخاب کنید و به سوالات پاسخ دهید همچنین می توانید آن ها را
        مطالعه کنید.
      </p>
    </div>
  );
};

export default Home;
