export default function page2() {

    return(
        <>
            <div className="w-full h-[100px]"></div>
            <div className="w-full h-[calc(100%-100px)] space-y-[5px]">
                <p className="text-[50px]">About Me</p>
                <p className="text-[22px]">
                    Hello! I'm Atsuhiro Ishikawa, a frontend engineer passionate about creating intuitive and high-performance web applications. I enjoy writing clean, scalable code and designing UI that delivers smooth user experiences.
                    I have worked on multiple web application development projects through in-house development, SES companies, and personal projects. My expertise lies in building user-centered designs while optimizing for performance and responsiveness.
                </p>
                {/* <Link href="/#about"><p className="text-[30px]" style={{color: RED_MODE_COLOR}}>Read more .....</p></Link> */}
            </div>
        </>
    )
}