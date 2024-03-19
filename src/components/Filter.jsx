import PropTypes from "prop-types";

export const Filter = ({ filter, onChange }) => {
  return (
    <div className="relative my-4 rounded-md shadow-sm">
      <input
        type="text"
        placeholder="search name..."
        value={filter}
        onChange={onChange}
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.any,
  onChange: PropTypes.func,
};
