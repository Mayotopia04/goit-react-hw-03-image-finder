import { Vortex } from "react-loader-spinner";
import css from "../Loader/Loader.module.css";

export const Loader = () => {
    return (
        <div className={css.loaderWrap}>
            <Vortex
                visible={true}
                height="80"
                width="80"
                colors={["red", "green", "blue", "yellow", "orange", "purple"]}
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
            />
        </div>
    );
};