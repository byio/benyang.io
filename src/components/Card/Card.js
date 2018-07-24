import React from 'react';
import Link from 'gatsby-link';
import LikeIcon from '@material-ui/icons/Favorite';
import CodeIcon from '@material-ui/icons/Code';
import LiveIcon from '@material-ui/icons/LiveTv';
import ContactIcon from '@material-ui/icons/RingVolume';
import MoreIcon from '@material-ui/icons/ExpandMore';

import { works } from '../../assets/works';

const Card = ({
  imgURL,
  title,
  description,
  githubURL,
  liveURL
}) => (
  <div>
    {/* image */}
    <img key="" alt="" src={imgURL}/>
    {/* description */}
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    {/* interactions */}
    <div>
      <LikeIcon />
      <a
        href={githubURL}
        target="_blank"
      >
        <CodeIcon />
      </a>
      <a
        href={liveURL}
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
