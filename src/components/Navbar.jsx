import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
const sections = ["home", "about", "resume", "projects","contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [Menu, setMenu] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const functionClose = ()=>{
    setMenu(false)
  }
  return (
		<>
			<nav class="navbar navbar-expand-lg custom-navbar sticky-top">
				<div class="container">
					{/* <!-- Logo --> */}
					<a class="navbar-brand fw-bold" href="/">Rudeus</a>

					{/* <!-- Toggle Button --> */}
					<button class="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
						<span className="Menustyle">{Menu?<button onClick={()=>functionClose()} className="btn-menu"><IoClose /></button>:<button onClick={()=>setMenu(true)} className="btn-menu"><GiHamburgerMenu /></button>}</span>
					</button>

					{/* <!-- Menu --> */}
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav ms-auto gap-lg-4 text-left">
                            {sections.map((item) => (
              <li key={item} className="nav-item">
                <button
                  onClick={() => scrollToSection(item)}
                  className={`nav-link ${
                    active === item ? "active" : ""
                  }`}
                >
                  {item.toUpperCase()}
                </button>
              </li>
            ))}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
