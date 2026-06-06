from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    TeamViewSet,
    PlayerViewSet,
    MatchViewSet,
    PointsTableViewSet,
    RuleViewSet,
    OrganizerViewSet,
    SponsorViewSet,
    GalleryViewSet,
    AnnouncementViewSet,
)

router = DefaultRouter()
router.register(r'teams', TeamViewSet)
router.register(r'players', PlayerViewSet)
router.register(r'matches', MatchViewSet)
router.register(r'points-table', PointsTableViewSet)
router.register(r'rules', RuleViewSet)
router.register(r'organizers', OrganizerViewSet)
router.register(r'sponsors', SponsorViewSet)
router.register(r'gallery', GalleryViewSet)
router.register(r'announcements', AnnouncementViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
