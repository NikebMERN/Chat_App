import React from "react";
import * as C from "./styles";
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const SidebarHeader = ({ setUserChat }) => {
  const [user] = useAuthState(auth);
  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChat);

  const handleCreateChat = () => {
    let emailInput = prompt("Choose an account by User Name");

    if (!emailInput) return;

    if (!EmailValidator.validate(emailInput)) {
      return alert("Email invalide!");
    } else if (emailInput === user.email) {
      return alert("Something Went Wrong!! Please Try Later.");
    } else if (chatExists(emailInput)) {
      return alert("Chat exists!");
    }

    db.collection("chats").add({
      users: [user.email, emailInput],
    });
  };

  const chatExists = (emailChat) => {
    return !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
  };

  return (
    <C.Container>
      <C.Avatar
        src={user?.photoURL}
        onClick={() => [auth.signOut(), setUserChat(null)]}
      />
      <C.Options>
        <a href="http://localhost:3000/"><MdDonutLarge title="Public Chat" /></a>
        <MdChat onClick={handleCreateChat} title="New Chat" />
        <MdMoreVert />
      </C.Options>
    </C.Container>
  );
};

export default SidebarHeader;
