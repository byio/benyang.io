import React, { Component } from 'react';

import Card from '../Card/Card';

const CardList = ({ works }) => {
  const renderCards = works.map((work, i) => {
    return (
      <Card
        imgURL={works[i].imgURL}
        title={works[i].title}
        description={works[i].description}
        githubURL={works[i].githubURL}
        liveURL={works[i].liveURL}
      />
    );
  });

  return (
    <div>
      {renderCards}
    </div>
  );
};

export default CardList;
