import "./resume.css";

const resumeData = [
    {
        year: "2014–2015",
        title: "Master Degree of Design",
        course: "Cambridge University",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
        year: "2014–2015",
        title: "Art & Creative Director",
        course: "Cambridge University",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
];

export default function Resume() {
    return (
        <section id="resume" className="resume-section">
            <div className="resume-container">

                {/* Header */}
                <div className="resume-header">
                    <h1>Resume</h1>
                    <span className="bg-title">Resume</span>
                    <p>
                        A small river named Duden flows by their place and supplies it with the
                        necessary regelialia. It is a paradisematic country, in which roasted
                        parts of sentences fly into your mouth.
                    </p>
                </div>

                {/* Cards */}
                <div className="resume-grid">
                    {resumeData.map((item, index) => (
                        <div key={index} className="resume-card">
                            <span className="year">{item.year}</span>
                            <h3>{item.title}</h3>
                            <h5>{item.course}</h5>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="resume-btn-wrapper">
                    <button className="btn-download">Download CV</button>
                </div>
            </div>
        </section>
    );
}
