import React, { useState } from "react";
import { Button, Modal } from "antd";
const ProfileInfo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [educationOpen, setEducationOpen] = useState(false);
  const showModalEu = () => {
    setEducationOpen(true);
  };
  const handleOkEu = () => {
    setEducationOpen(false);
  };
  const handleCancelEu = () => {
    setEducationOpen(false);
  };

  const [skillsOpen, setSkillsOpen] = useState(false);
  const showModalSk = () => {
    setSkillsOpen(true);
  };
  const handleOkSk = () => {
    setSkillsOpen(false);
  };
  const handleCancelSk = () => {
    setSkillsOpen(false);
  };

  return (
    <>
      <div className="profile">
        <div className="profile__info">
          <div className="profile__info__personal">
            <div className="profile__info__personal__img">
              <img src="src/assets/img/avatar.png" alt="" />
            </div>
            <div className="profile__info__personal__text">
              <div className="profile__info__personal__text__name">
                <p>Nguyen Nguyen</p>
                <span>On verify</span>
              </div>
              <div className="profile__info__personal__text__email">
                <p>Viet Nam : </p>
                <span>nguyennnit22@gmail.com</span>
              </div>
              <div className="profile__info__personal__text__location">
                <p>Developer : </p>
                <span>Senior</span>
              </div>
            </div>
          </div>
          <div className="profile__info__update">
            <Button onClick={showModal}>
              <img src="src/assets/icon/update.png" alt="" />
            </Button>
          </div>
        </div>

        <div className="profile__info__more ">
          <div className="profile__info__more__vitae">
            <p>Curriculum Vitae</p>
            <span>
              Link CV:{" "}
              <a>
                {" "}
                https://www.linkedin.com/in/l%C3%AA-tr%E1%BB%8Dng-120398160/{" "}
              </a>
            </span>
          </div>
          <div className="profile__info__more__education">
            <p className="heading">Education</p>
            <ul>
              <li>Vietnam Maritime University</li>
              <li>
                <p>Grade</p> <span>University</span>
              </li>
              <li>
                <p>GPA</p> <span>2.7</span>
              </li>
              <li>
                <p>Major</p> <span>infomation</span>
              </li>

              <li></li>
            </ul>
          </div>
          <div className="profile__info__more__skills">
            <div className="heading">Skills</div>
            <div className="skills-list">
              <div className="skills-item">
                <p>NodeJS</p>
                <span>8</span>
              </div>
              <div className="skills-item">
                <p>ReactJS</p>
                <span>8</span>
              </div>
              <div className="skills-item">
                <p>Typescrript</p>
                <span>8</span>
              </div>
            </div>
          </div>
          <div className="profile__info__more__workingtime">
            <div className="heading">Workingtime</div>
            <ul>
              <li>
                <p>Starttime</p> <span>20:00</span>
              </li>
              <li>
                <p>End time</p> <span>4:00</span>
              </li>
              <li>
                <p>Time zone</p> <span>UTC+07:00</span>
              </li>

              <li></li>
            </ul>
          </div>
          <div className="profile__info__more__language">
            <div className="heading">Language</div>
            <div className="english">
              <p>English</p>
              <div className="level">
                <p>Level:</p>
                <span>Interview</span>
              </div>
              <div className="des">
                <p>Description: </p>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </span>
              </div>
            </div>
            <div className="korea">
              <p>Korea</p>
              <div className="level">
                <p>Level:</p>
                <span>Interview</span>
              </div>
              <div className="des">
                <p>Description: </p>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </span>
              </div>
            </div>
          </div>
          <div className="profile__info__more__bank">
            <div className="heading">Bank</div>
            <ul>
              <li>
                <p>Name</p> <span>VPBank</span>
              </li>
              <li>
                <p>Number</p> <span>443949294942</span>
              </li>
              <li>
                <p>Agency</p> <span>Ung hoa</span>
              </li>

              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <Modal
        title="Edit profile"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal-edit"
      >
        <div className="profile__edit">
          <form>
            <div className="profile__edit__name">
              <div className="left">
                <div className="profile__edit__name__firstname">
                  <label htmlFor="">First name *</label> <br />
                  <input type="text" />
                </div>
                <div className="profile__edit__name__country">
                  <label htmlFor="">Country/Region *</label> <br />
                  <input type="text" />
                </div>
              </div>
              <div className="right">
                <div className="profile__edit__name__lastname">
                  <label htmlFor="">Last Name *</label> <br />
                  <input type="text" />
                </div>
                <div className="profile__edit__name__email">
                  <label htmlFor="">Email *</label> <br />
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="profile__edit__position">
              <div className="heading">Current Position</div>
              <div className="profile__edit__position__content">
                <div className="profile__edit__position__content__role">
                  <label htmlFor="">Role</label> <br />
                  <select name="" id="">
                    <option value="">Developer</option>
                  </select>
                </div>
                <div className="profile__edit__position__content__level">
                  <label htmlFor="">Level</label>
                  <select name="" id="">
                    <option value="">Senior</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="profile__edit__viate">
              <div className="heading">Curriculum Viate</div>
              <div>
                <p>Upload CV</p>
                <input type="file" />
              </div>
            </div>
            <div className="profile__edit__education">
              <div className="heading">Educations</div>
              <ul>
                <li>
                  <p>School</p> <span>Vietnam Maritime University</span>
                </li>
                <li>
                  <p>GPA</p> <span>2.7</span>
                </li>
                <li>
                  <p>Major</p> <span>Infomation Technology</span>
                </li>
              </ul>
              <Button onClick={showModalEu}> + Add new education</Button>
            </div>
            <div className="profile__edit__skills">
              <div className="heading">Skills</div>
              <div className="content">
                <p>
                  Skills : <span>Node js</span>
                </p>
                <Button onClick={showModalSk}>Add skills</Button>
              </div>
            </div>
            <div className="profile__edit__languages">
              <div className="heading">Languages</div>
              <p>English</p>
              <div className="level">
                <p>Level : </p>
                <span>Intermediate</span>
              </div>
              <div>
                <p>Description</p>
                <span>7.5 ielts</span>
              </div>
              <Button> + Add new Language</Button>
            </div>
            <div className="profile__edit__working">
              <div className="profile__edit__working__heading">
                Start Time
                <div>
                  <p>10</p>
                  <p>30</p>
                </div>
              </div>
              <div className="profile__edit__working__heading">
                End Time
                <div>
                  <p>10</p>
                  <p>30</p>
                </div>
              </div>
              <div className="profile__edit__working__heading">
                Time zone(GMT)
                <select name="" id="">
                  <option value="">7</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        title="Edit-profile Add new Education"
        open={educationOpen}
        onOk={handleOkEu}
        onCancel={handleCancelEu}
        className="addedu"
      >
        <div className="profile__add__education">
          <form>
            <div className="info">
              <label htmlFor="">School *</label>
              <input type="text" />
            </div>
            <div className="info">
              <label htmlFor="">GPA *</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Grade *</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Major *</label>
              <input type="text" />
            </div>

            {/* <div className="btn">

              <button>Back</button>
              <button>Submit</button>
            </div> */}
          </form>
        </div>
      </Modal>
      <Modal
        title="Add skills"
        open={skillsOpen}
        onOk={handleOkSk}
        onCancel={handleCancelSk}
        className="addskills"
      >
        <div className="profile__addskills">
          <form>
            <div className="profile__addskills__list">
              <div className="skills">
                <label htmlFor="">Skills * </label> <br />
                <select name="" id="">
                  <option value="">React JS</option>
                </select>
              </div>
              <div className="grade">
                <label htmlFor="">Grade * </label> <br />
                <select name="" id="">
                  <option value="">10</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ProfileInfo;
