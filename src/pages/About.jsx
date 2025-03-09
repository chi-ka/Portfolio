import React, {useState} from "react";
import "../styles/About.css"
import Footer from "../components/footer";
import Header from "../components/Header";

function About(){



const Certificates = [
    {
        type: "Certificate of Completion",
        title: "The Complete Full-Stack Web Development Bootcamp",
        by: "Dr. Angela Yu",
        date: "2025"
    },
    {
        type: "IBM Course",
        title: "Python for Data Science, AI & Development",
        by: "IBM",
        date: "2024"
    },
    {
        type: "Diploma of Completion",
        title: "RPA Developer Advanced",
        by: "UiPath",
        date: "2022"
    },
    {
        type: "Diploma of Completion",
        title: "RPA Developer Foundation",
        by: "UiPath",
        date: "04/22/2022"
    },
    {
        type: "Google Course",
        title: "Crash Course on Python",
        by: "Google",
        date: "2021"
    },
    {
        type: "Diploma of Completion",
        title: "Get Started with RPA Development",
        by: "UiPath",
        date: "2021"
    },
    {
        type: "Diploma of Completion",
        title: "A Day in the Life of an RPA Developer",
        by: "UiPath",
        date: "2021"
    }
];

const accordionData = [
    {
        id: "whoIAm",
        title: "Who I Am",
        content: `
            Hey there! I'm <strong>Chika Umobi</strong>, a tech enthusiast with a strong background in 
            <strong>Robotic Process Automation (RPA), Python development, and web development.</strong>
            <p>I specialize in building <strong>automation solutions, dynamic web applications, and scalable systems</strong> 
            that improve efficiency and user experience.</p>
            <p>With a deep understanding of RPA tools like UiPath, Power Automate, and Python scripting, 
            I help businesses automate repetitive tasks, streamline workflows, and enhance productivity.</p>
            <p>At the same time, my expertise in web technologies like JavaScript, React, and Node.js allows me to 
            craft sleek, responsive websites and web applications.</p>
            <p>I thrive at the intersection of automation and software development, constantly looking for ways to integrate 
            smart solutions that save time and drive innovation.</p>
        `,
        expanded: true,
        show:"accordion-collapse collapse show"
    },
    {
        id: "myEducation",
        title: "My Education",
        content: `
            <p><strong>First Class</strong> <br/>
            <strong>Bachelor of Engineering</strong> (Chemical Engineering) <br/>
            <strong>University of Benin</strong></p>
            <p>I hold a degree in <strong>Chemical Engineering</strong> from the <strong>University of Benin</strong>, 
            where I developed a strong analytical mindset and problem-solving skills.</p>
            <p>My background in engineering gave me a deep understanding of process optimization, data analysis, 
            and system efficiency, which naturally led me to explore automation and software development.</p>
            <p>Over time, I transitioned into the tech space, specializing in Robotic Process Automation (RPA), 
            Python development, and web development.</p>
            <p>Through continuous learning, certifications, and hands-on projects, I have built expertise in streamlining 
            business processes, automating workflows, and developing scalable web applications.</p>
        `,
        expanded: false,
        show:"accordion-collapse collapse"
    },
    {
        id: "myJourneyExperience",
        title: "My Journey & Experience",
        content: `
            <p>My tech journey started with a passion for problem-solving and efficiency. Early on, I was drawn to 
            automation and software development, realizing how technology can transform the way businesses operate.</p>
            <p>That curiosity led me to specialize in <strong>RPA, Python development, and web development</strong>—
            a combination that allows me to create intelligent, scalable, and efficient solutions.</p>
            <p>Over the years, I’ve worked on projects ranging from automating business processes to developing custom 
            Python scripts for data processing and system integrations.</p>
            <p>My web development expertise has enabled me to build user-friendly and dynamic web applications that 
            solve real-world problems.</p>
            <p>Whether it’s automating manual workflows, optimizing backend processes, or crafting engaging web experiences, 
            I love tackling challenges that push the boundaries of what technology can do.</p>
            <p>My goal is always the same: <strong>to build smart, efficient, and scalable solutions that make life easier.</strong></p>
        `,
        expanded: false,
        show:"accordion-collapse collapse"
    },
    {
        id: "Certifications",
        title: "Certifications",
        content: "CERTIFICATIONS_PLACEHOLDER",
        expanded: false,
        show:"accordion-collapse collapse"
    },
    {
        id: "BeyondTech",
        title: "Beyond Tech",
        content: `When I’m not coding or building automation solutions,
                I love to take long walks. Walking helps me clear my mind, spark creativity, and recharge for the next challenge. 
                It’s my way of stepping back from the screen and enjoying the world around me.
                <p>I’m also a big fan of watching movies—whether it’s a gripping thriller, an inspiring documentary, or a mind-bending sci-fi film. 
                Movies fuel my imagination and offer a great way to unwind after a day of problem-solving.
                For me, balance is key.</p> I also enjoy staying up-to-date with AI advancements and exploring how emerging technologies can be leveraged for automation and efficiency. 
                Reading about the latest trends in software development, robotics, and process optimization keeps me inspired to innovate.`,
        expanded: false,
        show:"accordion-collapse collapse"
    }
];

const [btnColors, setBtnColors] = useState(
        accordionData.map((_, index) => (index === 0 ? "#084088" : "#0d6ee9"))
);

function btnChange(index) {
    setBtnColors(prevColors => 
            prevColors.map((_, i) => (i === index ? "#084088" : "#0d6ee9"))
    );
}



return (
    <div id = "about"
        style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            width: "100%",
    }}
    >
        <Header tag="About Me" />
        <div className="container py-4">
            <div className="p-5 mb-4 bg-body-tertiary ">
                <div className="accordion" id="myData">
                    <div className="d-flex flex-row justify-content-between">
                        {accordionData.map((item, index) => (
                            <div className="flex-grow-1 m-0" key={index}>
                                <button         
                                    className="btn rounded-0 p-4"
                                    style={{ backgroundColor: btnColors[index], color: "white" }}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${item.id}`}
                                    aria-expanded={item.expanded}
                                    aria-controls={item.id}
                                    onClick={() => btnChange(index)}
                                >
                                    {item.title}
                                </button>
                            </div>
                        ))}
                    </div>

                    {accordionData.map((item, index) => (
                        <div className="accordion-item border border-top-0 g-2" key={index}>
                            <div id={item.id} className={item.show} data-bs-parent="#myData">
                                <div className="about-content card card-body rounded-0" style={{ maxHeight: "300px", overflowY: "auto" }}>
                                    <p>
                                    {item.content === "CERTIFICATIONS_PLACEHOLDER" ? (
                                            <div>
                                                <h1>Certifications</h1>
                                                {Certificates.map((cert, i) => (
                                                    <p key={i}>
                                                        <em>{cert.type}</em> <br />
                                                        <strong className="fs-5">{cert.title}</strong> <br />
                                                        By {cert.by} <br />
                                                        {cert.date}
                                                    </p>
                                                ))}
                                            </div>
                                        ) : (
                                            <div dangerouslySetInnerHTML={{ __html: item.content }} />
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
    </div>
    
);
}



export default About;