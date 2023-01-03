import { FC } from 'react';

const AdminLayout: FC<any> = ({ children }) => {
  return (
    <>
      <main className="bg-light p-9" style={{ minHeight: 360 }}>
        {children}
      </main>
    </>
  );
};

export default AdminLayout;
