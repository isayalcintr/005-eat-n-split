import Friend from "./Friend";
function FriendsList({ friends, removeFriend, selecteFriend, selectedFriend }) {
  return (
    <ul>
      {friends.length > 0 &&
        friends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            removeFriend={removeFriend}
            selecteFriend={selecteFriend}
            selectedFriend={selectedFriend}
          />
        ))}
    </ul>
  );
}
export default FriendsList;
