import { ChatInfo } from "../../api/types";

export interface ChatItemProps {
  data: ChatInfo;
  events?: Record<string, EventListenerOrEventListenerObject>;
}
