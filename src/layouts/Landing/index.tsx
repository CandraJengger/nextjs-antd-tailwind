import { FC } from 'react';

const LandingLayout: FC<any> = ({ children }) => {
  return (
    <>
      <main className="bg-light p-9" style={{ minHeight: 360 }}>
        {children}
      </main>
    </>
  );
};

export default LandingLayout;
