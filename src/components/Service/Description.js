import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./description.css";
import FeedbackItem from "./FeedbackItem";
import { feedbacks } from "./feedbacks";

const Description = ({ service }) => {
  const { description } = service;
  return (
    <div className="mx-4 mb-4 text-base font-fontFamily">
      <Tabs>
        <TabList className="tab-list">
          <Tab>Описание</Tab>
          <Tab>Отзывы (2)</Tab>
          {/*<Tab>{`Отзывы (${feedbacks.length})`}</Tab>*/}
        </TabList>

        <TabPanel>
          <h2>{description}</h2>
        </TabPanel>
        <TabPanel>
          {feedbacks.map((item, idx) => (<FeedbackItem item={item} key={idx}/>))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Description;
