
import "./Work.css";
import Works from "../Work/Works";

function Work() {

  return (
    <section className="work section " id="portfolio">
      <h2 className="section_title">Portfolio</h2>
      <span className="section_subtitle">Most Recent Work</span>

      <Works />
    </section>
  );
}

export default Work;
