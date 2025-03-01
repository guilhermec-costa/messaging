import { IMessageBroker } from "../infra/IMessageBroker";
import amqp from "amqplib";

export class RabbitMQBroker implements IMessageBroker {

  private conn!: amqp.ChannelModel;

  public constructor(
  ) {
    amqp.connect("amqp://localhost")
    .then((_c) => {
      this.conn = _c;
    })
    .catch((err) => {
      console.error("Failed to start rabbitMQ: ", err);
    })
  };

  public async send(): Promise<void> {
    this.conn
  }
}