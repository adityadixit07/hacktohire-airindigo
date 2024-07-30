from kafka import KafkaConsumer
from django.conf import settings
import json

consumer = KafkaConsumer(
    settings.KAFKA_TOPIC,
    bootstrap_servers=settings.KAFKA_BOOTSTRAP_SERVERS,
    value_deserializer=lambda x: json.loads(x.decode('utf-8'))
)

def consume_messages():
    for message in consumer:
        print(f"Received message: {message.value}")