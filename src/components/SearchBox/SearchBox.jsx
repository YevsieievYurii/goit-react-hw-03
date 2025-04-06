const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Пошук за ім’ям"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBox;
