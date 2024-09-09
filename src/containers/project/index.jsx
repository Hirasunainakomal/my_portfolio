import React from "react";
import PageHeaderContent from "../../components/pageheadercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
// import ImageFour from "../../images/image4.jpg";
// import ImageFive from "../../images/image5.jpg";
import "./style.scss";
import { useState } from "react";

const projectData = [
  {
    id: 2,
    name: "Bin Management System",
    image: ImageOne,
    link: "http://localhost:3001/auth/login",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
 
];

const Projects = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? projectData
      : projectData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="project" className="project">
      <PageHeaderContent
        headerText="My Project"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="project__content">
        <ul className="project__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="project__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="project__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="project__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">

                    <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;