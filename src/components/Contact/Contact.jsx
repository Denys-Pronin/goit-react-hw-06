import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, deleteContact }) => {
  return (
    <div>
      <div>
        <span>
          <FaUser />
          {name}
        </span>
        <span>
          <FaPhoneAlt />
          {number}
        </span>
      </div>
      <button onClick={deleteContact} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
