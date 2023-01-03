import { Footer } from 'antd/lib/layout/layout';
import { WICARA_URL } from '../../../../config';

const CopyrightFooter = () => {
  return (
    <Footer className="container mx-auto bg-transparent text-left">
      <span className=" font-semibold text-grey2">
        {' '}
        © {new Date().getFullYear()}{' '}
        <a
          className="font-weight-bold ml-1 text-light"
          href={WICARA_URL}
          target="_blank"
          rel="noreferrer"
        >
          Widya Wicara
        </a>
      </span>
    </Footer>
  );
};

export default CopyrightFooter;
