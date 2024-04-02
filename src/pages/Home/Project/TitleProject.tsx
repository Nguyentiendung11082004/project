import React from "react";

const TitleProject = () => {
  return (
    <div className="title__project">
      <div className="title__project__left">
        <div className="heading">[AI-001] AI CHAT BOT</div>
        <div className="title__project__left__content">
          <div className="time">
            <div className="start-date">
            <p className="title">Project start date <span className="content">01/10/2023</span></p>

            </div>
            <div className="end-date">
            <p className="title">Project end date <span className="content">N/A</span></p>

            </div>
          </div>
          <div className="time-country">
            <div className="timezone">
            <p className="title">Timezone :  <span className="content">UTC + 00</span></p>

            </div>
            <div className="country">
            <p className="title">Country <span className="content">USA</span></p>

            </div>
          </div>
        </div>
      </div>
      <div className="title__project__right">
        <div className="title__project__right__time">
          <div className="start-time">
          <p className="title">Start working time : <span className="content">20:00 (UTC + 7 )</span></p>

          </div>
          <div className="end-time">
           <p className="title">End working time : <span className="content">20:00 (UTC+7)</span></p>
          </div>
        </div>
        <div className="title__project__right__position">
            <div className="role">
            <p className="title">Role : <span className="content">Developer</span></p>

            </div>
            <p className="title">Level :  <span className="content">Senior</span></p>
           
        </div>
      </div>
    </div>
  );
};

export default TitleProject;
