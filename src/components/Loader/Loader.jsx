import { CirclesWithBar } from 'react-loader-spinner';
import s from './loader.module.css';
function Loader() {
  return (
    <div className={s.loader}>
      <CirclesWithBar
        height="100"
        width="100"
        color="#fafafa"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor="#3f51b5"
        innerCircleColor=""
        barColor="#3f51b5"
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
}
export default Loader;
