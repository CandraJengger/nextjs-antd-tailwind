import React from 'react';
import { Title } from '../../../atoms';

import Props from './SectionWrapper.props';

const SectionWrapper: React.FC<Props> = ({ title, children }) => {
  const generateIdSection = () =>
    `section-${title.replace(/\W/g, '-').toLowerCase()}`;
  return (
    <section className="mb-6" id={generateIdSection()}>
      <Title type="title-section" text={title} />
      <div>{children}</div>
    </section>
  );
};

export default SectionWrapper;
