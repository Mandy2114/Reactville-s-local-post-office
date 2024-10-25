import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
//components
import NavBar from './components/NavBar.jsx';
import MailboxForm from './components/MailboxForm.jsx';
import MailboxList from './components/MailboxList.jsx';
import MailboxDetails from './components/MailboxDetails.jsx';
  
const mailboxObjectExample = {
  _id: 1,
  boxSize: 'Small',
  boxholder: 'R',
};
  
const App = () => {
  const [mailboxes, setMailboxes] = useState([
    mailboxObjectExample
  ]);

  const addBox = (mailboxData) => {
    mailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, mailboxData]);
  }

  return (
    <>
      <NavBar>
        <Routes>

          <Route path='/'
            element={<main><h1>Post Office</h1></main>}>
          </Route>

          <Route
            path='/mailboxes'
            element={<MailboxList
            mailboxes={mailboxes} />}>
          </Route>

          <Route
            path='/mailboxes/new'
            element={<MailboxForm
            addBox={addBox} />}>
          </Route>

          <Route
            path='/mailboxes/:mailboxId'
            element={<MailboxDetails
            mailboxes={mailboxes} />}>
          </Route>

        </Routes>
      </NavBar>
    </>
  )
};

export default App;