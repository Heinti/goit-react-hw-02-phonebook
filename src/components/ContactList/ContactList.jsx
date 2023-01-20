import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';


export const ContactList = ({ data, onDelete }) => {
  return (
    <section>
      <ul>
        {data.map(({ id, name, number }) => (
          <li key={id} className={css.list__li}>
            <p>
              {name}: {number}
              <button className={css.list__Btn} type="button" onClick={() => onDelete(id)}>
                delete
              </button>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
