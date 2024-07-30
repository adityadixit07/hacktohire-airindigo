from django.db import models

class Flight(models.Model):
    flight_number=models.CharField(max_length=10)
    status=models.CharField(max_length=30)
    gate=models.CharField(max_length=10)
    departure_time=models.DateTimeField()
    arrival_time=models.DateTimeField()

    def __str__(self):
        return self.flight_number