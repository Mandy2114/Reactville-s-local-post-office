import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = { boxholder: '', boxSide: 'Small' };

const MailboxForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(formData);
    setFormData(initialState);
    navigate('/mailboxes');
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  return (
    <main>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">
          Enter a Boxholder
        </label>
        <input
          required
          type="text"
          id="boxholder"
          name="boxholder"
          placeholder="boxholder name"
          onChange={handleChange}
        />
        <label htmlFor="boxSize">
          Select a Box Size:
        </label>
        <select
          required
          name="boxSize"
          id="boxSize"
          onChange={handleChange}
          value={formData.boxSide}
        >
          <option value='Small'>Small</option>
          <option value='Medium'>Medium</option>
          <option value='Large'>Large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
export default MailboxForm;