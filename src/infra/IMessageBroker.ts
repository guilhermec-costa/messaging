export interface IMessageBroker {
  send(): Promise<void>;
}