const kafka = require('kafka-node');
const bp = require('body-parser');
const Producer = kafka.Producer;
const KeyedMessage = kafka.KeyedMessage;
const Client = kafka.KafkaClient;

const send = (topic, key, value) => {
  console.log('%c 🍾 value: ', 'font-size:20px;background-color: #B03734;color:#fff;', value);
  console.log('%c 🍬 key: ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', key);
  console.log('%c 🥠 topic: ', 'font-size:20px;background-color: #B03734;color:#fff;', topic);
  try {

    const client = new Client();
    const partition = 0;
    const attributes = 0;
    const producer = new Producer(client, { requireAcks: 1 });
    producer.on('ready', function () {
      var keyedMessage = new KeyedMessage(key, value);

      producer.send([
        {
          topic,
          partition,
          messages: [
            keyedMessage
          ],
          attributes
        }], function (err, result) {
          if (err) {
            console.log('Erro ao enviar dados: ', err);
          }
          console.log('Item enviado com sucesso: ', result);
        });
    });

    producer.on('error', function (err) {
      console.log('Erro no produtor: ', err);
    });

  }
  catch (e) {
    console.log('Ops! Erro: ', e);
  }
};

module.exports = {
  send
};

