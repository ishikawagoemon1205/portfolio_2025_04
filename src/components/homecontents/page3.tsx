import Link from "next/link"
import {RED_MODE_COLOR} from "@/_constants/colors";

export default function page3() {

    return(
        <>
            <div className="w-full h-[100px]"></div>
            <div className="w-full h-[calc(100%-100px)] space-y-[5px]">
                <p className="text-[50px]">Skills & Tools</p>
                <p className="text-[22px]">
                    🛠 Frontend Development<br/>
                    ・Languages & Frameworks: HTML, CSS, JavaScript, TypeScript<br/>
                    ・Libraries: Vue.js, Nuxt.js, React, Next.js, TailwindCSS, Flutter<br/>
                    ・Strengths: UI/UX design, animation, component-based architecture<br/>
                    🛠 Backend Development<br/>
                    ・Languages & Tools: Node.js, Firebase, AWS (Lambda, DynamoDB)<br/>
                    ・Strengths: API design, database modeling, authentication (Firebase Auth)<br/>
                    🛠 Design & Dev Process<br/>
                    ・Lean MVPs: Rapid validation using Lean Startup methodologies
                    ・UI/UX Design: Prototyping in Figma with a focus on usability
                    ・Project Management: GitHub / GitLab for team collaboration
                    ・Continuous Improvement: Performance tuning and feature iterations based on analytics
                </p>
                {/* <Link href="/#about"><p className="text-[30px]" style={{color: RED_MODE_COLOR}}>Read more .....</p></Link> */}
            </div>
        </>
    )
}