import css from "./Button.module.css";
import PropTypes from "prop-types";

export const Button = ({ onClick }) => {
    return (
        <div className={css.buttonDiv}>
            <button className={css.button} onClick={onClick}>Load More</button>
        </div>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};