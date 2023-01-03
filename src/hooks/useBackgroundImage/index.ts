import { useEffect } from 'react';
import { IbDefault } from 'src/assets';

const useBackgroundImage = () => {
  useEffect(() => {
    document.body.style.backgroundImage = 'url(' + `${IbDefault.src}` + ')';
    document.body.style.width = '100%';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.removeAttribute('style');
    };
  });

  return;
};

export default useBackgroundImage;
