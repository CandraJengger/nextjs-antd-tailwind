import React from 'react';
import { Button } from '../../atoms';
import { SectionWrapper } from '../../moleculs';

const SectionButton = () => {
  return (
    <SectionWrapper title="Button">
      <div>
        <Button type="default" className="mx-4" text="Default" />
        <Button type="primary" className="mx-4" text="Primary" />
        <Button type="secondary" className="mx-4" text="Secondary" />
        <Button type="danger" className="mx-4" text="Danger" />
        <Button type="success" className="mx-4" text="Success" />
        <Button type="warning" className="mx-4" text="Warning" />
        <Button type="ghost" className="mx-4" text="Ghost" />
      </div>
    </SectionWrapper>
  );
};

export default SectionButton;
