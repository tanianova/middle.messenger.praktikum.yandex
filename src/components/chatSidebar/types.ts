import { ChatInfo } from "../../api/types";

export interface ChatSidebarProps {
  chatList: ChatInfo[];
  selectedChatId: number;
}
