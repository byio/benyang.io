import React from 'react';
import LikeIcon from '@material-ui/icons/Favorite';
import CodeIcon from '@material-ui/icons/Code';
import LiveIcon from '@material-ui/icons/LiveTv';
import ContactIcon from '@material-ui/icons/RingVolume';
import MoreIcon from '@material-ui/icons/ExpandMore';

import { works } from '../../assets/works';

const Card = () => (
  <div>
    {/* image */}
    <img key="" alt="" src=""/>
    {/* description */}
    <div>
      <h2>{works[0].title}</h2>
      <p>{works[0].description}</p>
    </div>
    {/* interactions */}
    <div>
      <LikeIcon />
      <CodeIcon />
      <LiveIcon />
      <ContactIcon />
      <MoreIcon />
    </div>
  </div>
);

export default Card;
