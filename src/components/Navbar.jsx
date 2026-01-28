import { useEffect, useState } from "react";

const sections = ["home", "about", "resume", "projects","contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

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

  return (
		<>
			<nav class="navbar navbar-expand-lg custom-navbar sticky-top">
				<div class="container">
					{/* <!-- Logo --> */}
					<a class="navbar-brand fw-bold" href="/">Rudeus</a>

					{/* <!-- Toggle Button --> */}
					<button class="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
						<span class="navbar-toggler-icon"></span>
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
							{/* <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
							<li class="nav-item"><a class="nav-link" href="HH">About</a></li>
							<li class="nav-item"><a class="nav-link" href="#HHh">Resume</a></li>
							<li class="nav-item"><a class="nav-link" href="#">Projects</a></li>
							<li class="nav-item">
								<a class="btn btn-warning rounded-pill px-4" href="#">Contact</a>
							</li> */}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
