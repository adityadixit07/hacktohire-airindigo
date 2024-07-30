from djongo import models

class Flight(models.Model):
    flight_number = models.CharField(max_length=10, unique=True)
    airline = models.CharField(max_length=50)
    departure = models.CharField(max_length=50)
    arrival = models.CharField(max_length=50)
    scheduled_time = models.DateTimeField()
    status = models.CharField(max_length=20, default='On Time')
    gate = models.CharField(max_length=5)

    def __str__(self):
        return f"{self.airline} {self.flight_number}"

class Passenger(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE, related_name='passengers')

    def __str__(self):
        return self.name