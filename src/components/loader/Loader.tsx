import "./loader.style.css";
import loading from "../../assets/need-for-speed-loading-screen.gif";

export const Loader = () => {
  return (
    <div className="wrapper_loader">
      <div className="loader">
        <img src={loading} alt="Loading.." />
      </div>
    </div>
  );
};
