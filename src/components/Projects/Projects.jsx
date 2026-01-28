import "./project.css";
import zoro from "../../assets/zoro.jpg"
const projectData = [
    {
        img : zoro,
        title : "kkk",
        desc :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, perspiciatis cum dignissimos similique dolorum asperiores minima quasi molestias corrupti libero?"
    },
    {
        img :zoro,
        title : "kkk",
        desc :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, perspiciatis cum dignissimos similique dolorum asperiores minima quasi molestias corrupti libero?"
    },
    {
        img :zoro,
        title : "kkk",
        desc :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, perspiciatis cum dignissimos similique dolorum asperiores minima quasi molestias corrupti libero?"
    },
    {
        img :zoro,
        title : "kkk",
        desc :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, perspiciatis cum dignissimos similique dolorum asperiores minima quasi molestias corrupti libero?"
    }
];

export default function Projects() {
    return (
        <section id="project" className="project-section">
            <div className="project-container">

                {/* Header */}
                <div className="project-header">
                    <h1>project</h1>
                    <span className="bg-title">project</span>
                    <p>
                        A small river named Duden flows by their place and supplies it with the
                        necessary regelialia. It is a paradisematic country, in which roasted
                        parts of sentences fly into your mouth.
                    </p>
                </div>

                {/* Cards */}
                <div className="project-grid">
                    {projectData.map((item, index) => (
                        <div key={index} className="project-card">
                            <div className="img-style">
                                <img src={item.img} alt="Does not show" />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
