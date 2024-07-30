from rest_framework import viewsets
from .models import Flight, Passenger
from .serializers import FlightSerializer, PassengerSerializer
from kafka_producer.producer import produce_message

class FlightViewSet(viewsets.ModelViewSet):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer

    def perform_update(self, serializer):
        instance = serializer.save()
        # Produce a Kafka message when flight status is updated
        produce_message(f"Flight {instance.flight_number} status updated to {instance.status}")

class PassengerViewSet(viewsets.ModelViewSet):
    queryset = Passenger.objects.all()
    serializer_class = PassengerSerializer