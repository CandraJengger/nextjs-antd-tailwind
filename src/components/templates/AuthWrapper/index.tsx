import { FC } from 'react';
import { Gap } from 'src/components/atoms';
import Props from './AuthWrapper.props';

const AuthWrapper: FC<Props> = ({ title, subtitle, children }) => {
  return (
    <section className="flex flex-col items-center pt-20 px-4">
      <h1 className="text-2xl font-semibold mb-3">{title}</h1>
      <h2 className=" text-base font-light w-72 text-center">{subtitle}</h2>
      <Gap width={10} height={50} />
      <div>{children}</div>
    </section>
  );
};

export default AuthWrapper;
