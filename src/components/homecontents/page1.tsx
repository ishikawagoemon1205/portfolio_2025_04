import Image from "next/image";

export default function page1() {

    return(
        <>
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-[440px] flex ">
                    <div className="w-[50%] h-full flex flex-col justify-center space-y-[30px]">
                        <p className="text-[80px]">ATSUHIRO<br/>ISHIKAWA</p>
                        <div className="w-[100px] h-[4px] bg-black"></div>
                        <p>Software engineer / Web engineer</p>
                    </div>
                    <div className="w-[50%] flex items-center justify-end">
                        <Image
                            src="/circle_profile_img.png"
                            alt="image001"
                            width={440}
                            height={440}
                            className="object-cover rounded-[10px]"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}