import React from "react";
import Layout from "../Layouts/PageLayout";
import TitleContainer from "@/components/TitleContainer";
import styles from "../CSS-Files/Home.module.css";

const handleViewMoreClick = (sectionId) => {
  // Logic for handling view more click
  console.log(`View More clicked for section ${sectionId}`);
};

function Home() {
  return (
    <Layout>
      <div className="content">
        <div className="allCategories">
          <TitleContainer
            onViewMoreClick={() => handleViewMoreClick(section.id)}
          >
            All Categories
          </TitleContainer>
          <div className="">
            <div className="categoryWrapper flex flex-row gap-7">
              <div className="categoryCard flex flex-col items-center">
                <a href="" className="">
                  <img
                    className={styles.allCategoriesImg}
                    src="/images/jordan.webp"
                    alt=""
                  />
                </a>
                <a href="">AIR JORDAN</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
