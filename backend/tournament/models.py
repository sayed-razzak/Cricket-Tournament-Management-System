from django.db import models


class Team(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='team_logos/')
    captain = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)

    owner_name = models.CharField(max_length=100, blank=True, null=True)
    owner_photo = models.ImageField(upload_to='owner_photos/', blank=True, null=True)

    def __str__(self):
        return self.name


class Player(models.Model):
    ROLE_CHOICES = [
        ('batter', 'Batter'),
        ('bowler', 'Bowler'),
        ('all_rounder', 'All Rounder'),
        ('wicket_keeper', 'Wicket Keeper'),
    ]

    team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='players')
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='player_photos/')
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    batting_style = models.CharField(max_length=100, blank=True)
    bowling_style = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name


class Match(models.Model):
    STATUS_CHOICES = [
        ('upcoming', 'Upcoming'),
        ('live', 'Live'),
        ('finished', 'Finished'),
    ]

    team1 = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='team1_matches')
    team2 = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='team2_matches')
    match_number = models.IntegerField()
    date = models.DateTimeField()
    venue = models.CharField(max_length=200)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='upcoming')
    team1_score = models.CharField(max_length=50, blank=True)
    team2_score = models.CharField(max_length=50, blank=True)
    result = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.team1} vs {self.team2}"


class PointsTable(models.Model):
    team = models.OneToOneField(Team, on_delete=models.CASCADE)
    matches = models.IntegerField(default=0)
    wins = models.IntegerField(default=0)
    losses = models.IntegerField(default=0)
    points = models.IntegerField(default=0)
    net_run_rate = models.FloatField(default=0)

    def __str__(self):
        return self.team.name


class Rule(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.title


class Organizer(models.Model):
    name = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='organizer_photos/')
    instagram_url = models.URLField(blank=True)

    def __str__(self):
        return self.name


class Announcement(models.Model):
    title = models.CharField(max_length=150)
    message = models.TextField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Sponsor(models.Model):
    brand_name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='sponsor_logos/')
    description = models.TextField(blank=True)

    def __str__(self):
        return self.brand_name


class Gallery(models.Model):
    title = models.CharField(max_length=150, blank=True)
    image = models.ImageField(upload_to='gallery/')
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title if self.title else f"Gallery {self.id}"
