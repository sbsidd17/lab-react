import React from "react";
import "./style.scss";
import PageHeader from "../../components/PageHeader";
import { AiFillProject } from "react-icons/ai";
import { filterListData, portfolioCardData } from "./portfolioData";
import { useState } from "react";
function Portfolio() {
  const [listHover, setListHover] = useState(1)
  const [hoverIndex, setHoverIndex] = useState(null);
  const [filterIndex, setFilterIndex] = useState(1);
  function filterClickHandle(id) {
    setFilterIndex(id);
    setListHover(id)
  }
  const filteredPortfolioCardData =
    filterIndex === 1
      ? portfolioCardData
      : portfolioCardData.filter((item) => {
          return item.id === filterIndex;
        });
  return (
    <div className="portfolio">
      <PageHeader name="My Portfolio" icon={<AiFillProject />} />
      <div className="portfolio-content">
        <div className="portfolio-content-filterSection">
          <ul>
            {filterListData.map((item, key) => {
              return (
                <li
                  onClick={() => {
                    filterClickHandle(item.id);
                  }}
                  className = {listHover === item.id ? "active" : ""}
                  key={key}
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="portfolio-content-cardContainer">
          {filteredPortfolioCardData.map((card, key) => {
            return (
              <div
                key={key}
                className="portfolio-content-cardContainer-content"
                onMouseEnter={() => {
                  setHoverIndex(key);
                }}
                onMouseLeave={() => {
                  setHoverIndex(null);
                }}
              >
                <div className="card">
                  <img src={card.imgUrl} alt="project_image" />
                </div>
                {hoverIndex === key && (
                  <div className="cardOlay">
                    <div>
                      <p>{card.cardName}</p>
                      <a href={card.projectUrl}>
                        <button>Visit Now</button>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
