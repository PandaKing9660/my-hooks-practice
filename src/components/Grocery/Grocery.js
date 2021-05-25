import {useState, useEffect} from 'react';
import Alert from './Alert';
import Item from './Item';

const initialValue = () => {
  const initial = localStorage.getItem ('list');
  if (initial) {
    return JSON.parse (initial);
  } else {
    return [];
  }
};

const Grocery = () => {
  const [name, setName] = useState ('');
  const [list, setList] = useState (initialValue ());
  const [alert, setAlert] = useState ({msg: '', isTrue: false, type: ''});
  const [isEditing, setIsEditing] = useState (false);
  const [editId, setEditId] = useState (null);

  const handleSubmit = e => {
    e.preventDefault ();
    if (!name) {
      console.log ('wrong');
      makeAlert (true, 'please enter valid values', 'red');
    } else if (name && isEditing) {
      setList (
        list.map (item => {
          if (item.id === editId) {
            item.name = name;
          }
          return item;
        })
      );
      setName ('');
      setIsEditing (false);
      makeAlert (true, 'item edited', 'green');
    } else {
      setList ([...list, {name: name, id: new Date ().getTime ().toString ()}]);
      setName ('');
      makeAlert (true, 'Item Added', 'green');
    }
  };

  const onDelete = id => {
    setList (list.filter (item => item.id !== id));
  };

  const onEdit = id => {
    const person = list.find (item => item.id === id);
    setIsEditing (true);
    setName (person.name);
    setEditId (id);
  };

  const makeAlert = (isTrue = false, msg = '', type = '') => {
    setAlert ({isTrue, msg, type});
  };
  useEffect (
    () => {
      localStorage.setItem ('list', JSON.stringify (list));
    },
    [list]
  );

  return (
    <div style={{textAlign: 'center'}}>
      {alert.isTrue
        ? <Alert msg={alert.msg} type={alert.type} makeAlert={makeAlert} />
        : ''}
      <h1>Your List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => setName (e.target.value)}
        />
        <button type="submit">{isEditing ? 'Editing' : 'Submit'}</button>
      </form>
      {list.map (item => {
        return (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
};

export default Grocery;
