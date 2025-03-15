import Button from "./components/Button";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const addFriend = (friend) => setFriends([...friends, friend]);
  const removeFriend = (id) =>
    setFriends(friends.filter((friend) => friend.id !== id));
  const selecteFriend = (friend) => {
    setSelectedFriend(friend);
    setShowAddForm(false);
  };
  const toggleAddForm = () => setShowAddForm(!showAddForm);
  const updateBalance = (id, amount) => {
    setFriends(
      friends.map((friend) =>
        friend.id === id ? { ...friend, balance: amount } : friend
      )
    );
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          removeFriend={removeFriend}
          selecteFriend={selecteFriend}
          selectedFriend={selectedFriend}
        />

        {showAddForm && <FormAddFriend addFriend={addFriend} />}
        <Button onClick={toggleAddForm}>
          {showAddForm ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill friend={selectedFriend} updateBalance={updateBalance} />
      )}
    </div>
  );
}
export default App;
