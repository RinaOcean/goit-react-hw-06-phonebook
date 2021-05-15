import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';

import './ContactsListItem.scss';

const ContactsListItem = ({ onDelete, items }) => (
  <>
    {items.map(({ id, name, number }) => {
      return (
        <li key={id} className="ContactsListItem">
          {name}: {number}
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      );
    })}
  </>
);

ContactsListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchFromProps = dispatch => ({
  onDelete: id => dispatch(actions.removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchFromProps)(ContactsListItem);
