import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <p className={css.filterText}>Find contacts by name</p>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        value={filter}
        onChange={onChange}
      />
    </>
  );
};

export default Filter;
