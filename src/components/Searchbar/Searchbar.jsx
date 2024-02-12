import css from "../Searchbar/Searchbar.module.css";
import { FaSearch } from "react-icons/fa";
import PropTypes from "prop-types";

export const Searchbar = ({ onSubmit }) => {
    return (
        <header className={css.searchBar}>
            <form className={css.searchForm} onSubmit={onSubmit} >
                <button type="submit" className={css.searchFormButton}>
                    <FaSearch />
                    <span className={css.searchFormButtonLabel}>Search</span>
                </button>

                <input 
                type="text"
                className={css.searchFormInput}
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="search" />
            </form>
        </header>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};