const printPerson = ({handleDelete, person}) => {
  return (
    <div
      style={{
        backgroundColor: 'aliceblue',
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        margin: '10px 10px',
        padding: '0px 10px',
      }}
    >
      <h1>{person.name}</h1>
      <button
        onClick={() => handleDelete (person.id)}
        style={{
          backgroundColor: 'lightblue',
          borderRadius: '10px',
          color: 'red',

          height: '50%',
          alignSelf: 'center',
        }}
      >
        remove
      </button>
    </div>
  );
};

export default printPerson;
