import { ChatInfo, Message, User } from "../../api/types";

export interface ChatPageProps {
  chatList: ChatInfo[],
  selectedChatId: number,
  selectedChatUserList: User[],
  searchList: User[],
  selectedChat: ChatInfo,
  messages:   Message[]
}
