import Button from "./Button";
function Friend({ friend, removeFriend, selecteFriend, selectedFriend }) {
  const handleSelect = () => {
    selecteFriend(friend);
  };
  const handleRemove = () => {
    removeFriend(friend.id);
  };
  return (
    <li className={selectedFriend?.id === friend.id ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <div>
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)}₺
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {Math.abs(friend.balance)}₺
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even.</p>}
      </div>
      <Button onClick={handleSelect}>Select</Button>
      <Button onClick={handleRemove}>Remove</Button>
    </li>
  );
}

export default Friend;
