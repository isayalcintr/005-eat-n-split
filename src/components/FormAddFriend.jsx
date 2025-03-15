import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ addFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) {
      alert("Please fill out all fields");
      return;
    }
    const id = Date.now();
    const friend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };
    addFriend(friend);
    e.target.reset();
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑Friend name</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🖼️ Image Url</label>
      <input
        type="text"
        placeholder="Image Url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add Friend</Button>
    </form>
  );
}

export default FormAddFriend;
