import React from "react";
import * as C from "./styles";
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";

const ChatHeader = ({ photoURL, name }) => {
  return (
    <C.Container>
      <C.UserInfo title={name}>
        {photoURL ? <C.Avatar src={photoURL} alt="Avatar Can't Found" /> : <MdPerson />}
        <C.NameContent>
          <C.Name>{name}</C.Name>
        </C.NameContent>
      </C.UserInfo>
      <C.Options>
        <MdSearch />
        <MdMoreVert />
      </C.Options>
    </C.Container>
  );
};

export default ChatHeader;
