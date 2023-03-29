import { ChatInfo } from "../../api/types";

export interface ChatItemProps {
  data: ChatInfo;
  selectedChatId?: number;
  events?: Record<string, EventListenerOrEventListenerObject>;
}
