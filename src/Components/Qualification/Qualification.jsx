import React, { useState } from "react";
import "./Qualification.css";

function Qualification() {
  const [toggleState, SetToggleState] = useState(1);
  const toggleTab = (index) => {
    SetToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Design</h3>
                <span className="qualification_subtitle">
                  Spain - Institute
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021 - present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Art director</h3>
                <span className="qualification_subtitle">
                  Spain - Institute
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021 - present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Design</h3>
                <span className="qualification_subtitle">
                  Spain - Institute
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021 - present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Art director</h3>
                <span className="qualification_subtitle">
                  Spain - Institute
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021 - present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Design</h3>
                <span className="qualification_subtitle">
                  Spain - Institute
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021 - present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Art director</h3>
                <span className="qualification_subtitle">
                  Spain - Institute
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021 - present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Design</h3>
                <span className="qualification_subtitle">
                  Spain - Institute
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>2021 - present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
