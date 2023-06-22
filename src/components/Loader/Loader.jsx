import { Puff } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <Puff
      wrapperClass={css.loader}
      height="50"
      width="50"
      radius={1}
      color="black"
      ariaLabel="puff-loading"
      wrapperStyle={{ css }}
      visible={true}
    />
  );
};
