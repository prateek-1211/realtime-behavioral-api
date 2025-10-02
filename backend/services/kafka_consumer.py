from confluent_kafka import Consumer
import json

conf = {
    'bootstrap.servers': "localhost:9092",
    'group.id': "behavior-group",
    'auto.offset.reset': 'earliest'
}

consumer = Consumer(conf)
consumer.subscribe(["user-events"])

def consume():
    while True:
        msg = consumer.poll(1.0)
        if msg is None: 
            continue
        if msg.error():
            print("Consumer error: {}".format(msg.error()))
            continue
        event = json.loads(msg.value().decode('utf-8'))
        print("Received event:", event)
