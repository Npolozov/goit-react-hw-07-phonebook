import { RotatingLines } from 'react-loader-spinner';

export const Loadder = () => {
  return (
    <RotatingLines
      strokeColor="blue"
      strokeWidth="5"
      animationDuration="0.75"
      width="30"
      height="30"
    />
  );
};
