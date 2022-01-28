import {useState} from 'react';

const GoogleSheetConnection = () => {
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');

  const handleSubmit = e => {
    e.preventDefault ();
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbxq1v5hjuVdRN6qK9jBL-NWmXQjtDlSRYVNrZU_1hnSs1x5WutPuzFFSpdaV9qLX0spNQ/exec';
    const form = document.forms['practice-sheet'];

    fetch (scriptURL, {method: 'POST', body: new FormData (form)})
      .then (response => console.log (response))
      .catch (error => console.error ('Error!', error.message));

    fetch (scriptURL, {method: 'GET'})
      .then (response => console.log (response))
      .catch (err => console.log (err));

    console.log (name, email);
  };

  return (
    <div>
      <h1 className="m-2 p-2 text-dark center">Login</h1>
      <form className="container-sm cnt" method="post" name="practice-sheet">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            name="name"
            onChange={e => setName (e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="form-group">

          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={e => setEmail (e.target.value)}
            value={email}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={e => handleSubmit (e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GoogleSheetConnection;
