import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../services/firebase";
import * as C from "./styles";
import { MdPerson } from "react-icons/md";

const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[0];

const SidebarChatsItem = ({ id, users, user, setUserChat, active }) => {
  const [getUserItem] = useCollection(
    db.collection("users").where("email", "==", getUser(users, user))
  );

  const Avatar = getUserItem?.docs?.[0]?.data();
  const item = getUser(users, user);

  const handleNewChat = () => {
    const userChat = {
      chatId: id,
      name: item.split("@")[0],
      photoURL: Avatar?.photoURL,
    };

    setUserChat(userChat);
  };

  return (
    <C.Container onClick={handleNewChat} className={active} title={item.split("@")[0]}>
      {Avatar ? <C.Avatar src={Avatar?.photoURL} alt="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.freeiconspng.com%2Fthumbs%2Flive-chat-icon%2Flive-chat-icon-0.png&imgrefurl=https%3A%2F%2Fwww.freeiconspng.com%2Fimages%2Flive-chat-icon&tbnid=SZFWm-2v-zUIkM&vet=12ahUKEwifgaTiubD6AhUZahoKHWYcDSEQMygWegUIARCQAg..i&docid=Jx00kjOPhz6mPM&w=320&h=235&q=chat%20favicon&ved=2ahUKEwifgaTiubD6AhUZahoKHWYcDSEQMygWegUIARCQAg" /> : <MdPerson />}
      <C.Name>{item.split("@")[0]}</C.Name>
    </C.Container>
  );
};

export default SidebarChatsItem;
