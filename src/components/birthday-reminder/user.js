const User = props => {
  const {name, age, image, id} = props.person;
  return (
    <div className="person">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{age}</p>
      <button
        onClick={() => props.onClickEvent (id)}
        style={{color: 'red', backgroundColor: 'pink'}}
      >
        delete
      </button>
    </div>
  );
};

export default User;
