import React from 'react';
import { Avatar, Typography } from 'antd';

const {Title, Text} = Typography;

const Call = ({item}: {item: any}) => {
 const background = item.type === 'missing'?'#ffecec':item.type === 'outgoing'?'#e6ffc8':'#dee3ff';

  return (
    <div className="call shadow__sm d__flex row__gap">
        <Avatar shape="square" size="large" src="/chatup/img/avatar.jpg" />
        <div style={{flex: 1}} className="d__flex flex__column">
            <Title type={item.type==="missing"?'danger':undefined} className="m__0" level={5}>Nour Ben Mohammed</Title>
            <div className="details">
                <Text >{item.type} call</Text>
                <span>	&#8226; </span>
                <Text type='secondary'>3 minutes 23 seconds</Text>
            </div>
            <div style={{marginTop: '0.25rem'}}>
             <Text disabled>Yesterday, 12pm</Text>
            </div>
        </div>

        <div className="call__icon" style={{backgroundColor: background}}>
            <img src={`/chatup/img/icons/${item.type}.png`} alt="I" />
        </div>
    </div>
  )
}

export default Call;