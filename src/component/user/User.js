export default function User({item, history}) {
  let navigate = () => {
      history.push('/users/' + item.id);
  }
    return (
    <div>
        {item.name} <button onClick={navigate}>user details</button>
    </div>
  );
}