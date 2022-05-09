import React from 'react';
import { Title } from '../../atoms';

export type Props = {
  title: string;
  children?: React.ReactNode | undefined;
};

const SectionWrapper: React.FC<Props> = ({ title, children }) => {
  const generateIdSection = () =>
    `section-${title.toLowerCase().replaceAll(' ', '-')}`;
  return (
    <section className="mb-6" id={generateIdSection()}>
      <Title type="title-section" text={title} />
      <div>{children}</div>
    </section>
  );
};

export default SectionWrapper;
