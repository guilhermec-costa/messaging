import fastify from "fastify";
import { RabbitMQBroker } from "./application/RabbitMQBroker";
import { IMessageBroker } from "./infra/IMessageBroker";

(async function() {
  const app = fastify({
    logger: {
      level: "info",
      enabled: true
    },
  })

  const rabbitMqBroker: IMessageBroker = new RabbitMQBroker()

  const port = Number(process.env.PORT) || 3000;
  app.listen({
    port
  }).catch(() => {
    console.error(`Failed to start server at port ${port}`);
  })
})();