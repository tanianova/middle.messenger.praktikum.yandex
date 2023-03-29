import { ChatInfo, User } from "../../api/types";

export interface ChatHeaderProps {
  chatList: ChatInfo[];
  selectedChatId?: number;
  selectedChat?: ChatInfo;
  selectedChatUserList?: User[]
}
