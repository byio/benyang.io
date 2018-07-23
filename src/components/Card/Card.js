import React from 'react';
import Link from 'gatsby-link';
import LikeIcon from '@material-ui/icons/Favorite';
import CodeIcon from '@material-ui/icons/Code';
import LiveIcon from '@material-ui/icons/LiveTv';
import ContactIcon from '@material-ui/icons/RingVolume';
import MoreIcon from '@material-ui/icons/ExpandMore';

import { works } from '../../assets/works';

const Card = () => (
  <div>
    {/* image */}
    <img key="" alt="" src={works[0].imgURL}/>
    {/* description */}
    <div>
      <h2>{works[0].title}</h2>
      <p>{works[0].description}</p>
    </div>
    {/* interactions */}
    <div>
      <LikeIcon />
      <a
        href={works[0].githubURL}
        target="_blank"
      >
        <CodeIcon />
      </a>
      <a
        href={works[0].liveURL}
        target="_blank"
      >
        <LiveIcon />
      </a>
      <ContactIcon />
      <MoreIcon />
    </div>
  </div>
);

export default Card;
