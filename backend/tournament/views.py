from rest_framework import viewsets
from .models import Team, Player, Match, PointsTable, Rule, Organizer, Sponsor, Gallery
from .serializers import (
    TeamSerializer,
    PlayerSerializer,
    MatchSerializer,
    PointsTableSerializer,
    RuleSerializer,
    OrganizerSerializer,
    SponsorSerializer,
    GallerySerializer
)


class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer


class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all().order_by('match_number')
    serializer_class = MatchSerializer


class PointsTableViewSet(viewsets.ModelViewSet):
    queryset = PointsTable.objects.all().order_by('-points', '-net_run_rate')
    serializer_class = PointsTableSerializer


class RuleViewSet(viewsets.ModelViewSet):
    queryset = Rule.objects.all()
    serializer_class = RuleSerializer


class OrganizerViewSet(viewsets.ModelViewSet):
    queryset = Organizer.objects.all()
    serializer_class = OrganizerSerializer


class SponsorViewSet(viewsets.ModelViewSet):
    queryset = Sponsor.objects.all()
    serializer_class = SponsorSerializer


class GalleryViewSet(viewsets.ModelViewSet):
    queryset = Gallery.objects.all().order_by('-created_at')
    serializer_class = GallerySerializer