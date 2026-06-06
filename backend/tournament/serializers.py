from rest_framework import serializers
from django.utils import timezone
from .models import Team, Player, Match, PointsTable, Rule, Organizer, Sponsor, Gallery, Announcement


class PlayerSerializer(serializers.ModelSerializer):
    team_name = serializers.CharField(source='team.name', read_only=True)
    team_logo = serializers.ImageField(source='team.logo', read_only=True)

    class Meta:
        model = Player
        fields = '__all__'


class TeamSerializer(serializers.ModelSerializer):
    players = PlayerSerializer(many=True, read_only=True)

    class Meta:
        model = Team
        fields = '__all__'


class MatchSerializer(serializers.ModelSerializer):
    team1_name = serializers.CharField(source='team1.name', read_only=True)
    team2_name = serializers.CharField(source='team2.name', read_only=True)
    team1_logo = serializers.ImageField(source='team1.logo', read_only=True)
    team2_logo = serializers.ImageField(source='team2.logo', read_only=True)
    match_date = serializers.SerializerMethodField()
    match_time = serializers.SerializerMethodField()

    def get_local_datetime(self, obj):
        if timezone.is_aware(obj.date):
            return timezone.localtime(obj.date)
        return obj.date

    def get_match_date(self, obj):
        return self.get_local_datetime(obj).strftime('%d %b %Y')

    def get_match_time(self, obj):
        return self.get_local_datetime(obj).strftime('%I:%M %p').lstrip('0')

    class Meta:
        model = Match
        fields = '__all__'


class PointsTableSerializer(serializers.ModelSerializer):
    team_name = serializers.CharField(source='team.name', read_only=True)
    team_logo = serializers.ImageField(source='team.logo', read_only=True)

    class Meta:
        model = PointsTable
        fields = '__all__'


class RuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rule
        fields = '__all__'


class OrganizerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organizer
        fields = '__all__'


class SponsorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sponsor
        fields = '__all__'


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = '__all__'


class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = '__all__'
