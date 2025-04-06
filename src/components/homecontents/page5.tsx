import Link from "next/link"

import {RED_MODE_COLOR} from "@/_constants/colors";

export default function page5() {

    return(
        <>
            <div className="w-full h-[100px]"></div>
            <div className="w-full h-[calc(100%-100px)] space-y-[5px]">
                <p className="text-[50px]">Project Experience</p>
                <p className="text-[20px]">
                    📌 ASL Corporation (SES Company)<br/>
                    At ASL Corporation, I worked on internal development using Nuxt.js for a business management app. I also developed an internal approval system with HTML, CSS, and JavaScript during my assignment to Panasonic, improving workflow efficiency..<br/>
                    📌 Freelance Design Projects<br/>
                    For my freelance projects, I focused on design and front-end development. I redesigned a gallery website using HTML, CSS, and JavaScript to improve user experience. Additionally, I developed a WordPress-based website for a driving school, increasing site traffic.<br/>
                    📌 Freelance Development Projects (MUSUBIME Corporation × Waseda University Collaborative Research)<br/>
                    At MUSUBIME Corporation, I developed a Flutter-based industrial waste management app as part of a collaborative project with Waseda University, digitizing operations and improving data management efficiency.<br/>
                    📌 Yumirlink Corporation (Now)<br/>
                    At Yumirlink Corporation, I work as a front-end developer for a company that offers various messaging solutions, including email and SMS. My responsibilities include developing web applications using Next.js and Django, as well as backend development for database monitoring scripts.
                </p>
                {/* <Link href="/#about"><p className="text-[30px]" style={{color: RED_MODE_COLOR}}>Read more .....</p></Link> */}
            </div>
        </>
    )
}