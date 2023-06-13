import propTypes from "prop-types";
import styles from "./Filter.module.css";

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={styles.filter}>
      <h2 className="filter_header">Search Contact by Name</h2>
      <input
        className={styles.filter_input}
        value={value}
        onChange={onChangeFilter}
        type="text"
      />
    </div>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChangeFilter: propTypes.func.isRequired,
};
