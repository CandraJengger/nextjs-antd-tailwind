import React from 'react';
import { Typography } from 'antd';
import { Props } from './title.props';

const { Title: ATitle } = Typography;

const Title: React.FC<Props> = ({ type = 'title-content', text }) => {
  const getType = () => {
    if (type === 'title-content') return 1;
    if (type === 'title-section') return 2;
    if (type === 'title-subsection') return 3;
    return 1;
  };

  return <ATitle level={getType()}>{text}</ATitle>;
};

export default Title;
