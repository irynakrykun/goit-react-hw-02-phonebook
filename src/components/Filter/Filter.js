import PropTypes from 'prop-types';

const Filter = ({ onChange, value }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <label>
        <input type="text" onChange={onChange} value={value}></input>
      </label>
    </>
  );
};
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default Filter;
