import React from 'react';
import LikeIcon from '@material-ui/icons/Favorite';
import CodeIcon from '@material-ui/icons/Code';
import LiveIcon from '@material-ui/icons/LiveTv';
import ContactIcon from '@material-ui/icons/RingVolume';
import MoreIcon from '@material-ui/icons/ExpandMore';


const Card = () => (
  <div>
    {/* image */}
    <img key="" alt="" src=""/>
    {/* description */}
    <div>
      <h2>Project Name</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo justo velit, a aliquet nisi consequat et. Fusce ipsum urna, finibus vitae sem eget, viverra convallis felis. In vitae egestas lacus, ut dignissim libero. Sed nec est sollicitudin, accumsan odio nec, molestie leo.</p>
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
