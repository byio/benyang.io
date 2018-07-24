import React from 'react';
import Link from 'gatsby-link';
import LikeIcon from '@material-ui/icons/Favorite';
import CodeIcon from '@material-ui/icons/Code';
import LiveIcon from '@material-ui/icons/LiveTv';
import ContactIcon from '@material-ui/icons/RingVolume';
import MoreIcon from '@material-ui/icons/ExpandMore';

import styles from './Card.module.css';
import { works } from '../../assets/works';

const Card = ({
  id,
  imgURL,
  title,
  description,
  githubURL,
  liveURL
}) => (
  <div className={styles.wrapper}>
    {/* image */}
    <img key="" alt="" src={imgURL}/>
    {/* description */}
    <div>
      <h2>{title}</h2>
      <MoreIcon />
      <p>{description}</p>
    </div>
    {/* interactions */}
    <div className={styles.iconBar}>
      <LikeIcon className={styles.sideMargins} />
      <a
        className={styles.sideMargins}
        href={githubURL}
        target="_blank"
      >
        <CodeIcon />
      </a>
      <a
        className={styles.sideMargins}
        href={liveURL}
        target="_blank"
      >
        <LiveIcon />
      </a>
      <ContactIcon className={styles.sideMargins} />
    </div>
  </div>
);

export default Card;
