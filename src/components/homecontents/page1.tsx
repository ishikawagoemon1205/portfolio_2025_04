import Image from "next/image";

export default function Page1() {
  return (
    <div className="w-full h-full flex items-center justify-center px-4 sm:px-8 md:px-16">
      <div className="w-full h-auto sm:h-[440px] flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0">
        <div className="w-full sm:w-[50%] flex flex-col justify-center items-center sm:items-start space-y-[30px] text-center sm:text-left">
          <p className="text-4xl sm:text-[80px]">ATSUHIRO<br />ISHIKAWA</p>
          <div className="w-[100px] h-[4px] bg-black mx-auto sm:mx-0"></div>
          <p className="text-base sm:text-xl">Software engineer / Web engineer</p>
        </div>
        <div className="w-full sm:w-[50%] flex items-center justify-center sm:justify-end">
          <Image
            src="/circle_profile_img.png"
            alt="Profile image"
            width={440}
            height={440}
            className="object-cover rounded-[10px] w-full sm:w-[440px] sm:h-[440px]"
          />
        </div>
      </div>
    </div>
  );
}
