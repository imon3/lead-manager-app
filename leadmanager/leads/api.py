from rest_framework import viewsets, permissions
from leads.models import Lead
from .serializers import LeadSerializer

# Lead Viewset

# --get all info
# class LeadViewSet(viewsets.ModelViewSet):
#     queryset = Lead.objects.all()
#     permission_classes = [
#         permissions.AllowAny
#     ]
#     serializer_class = LeadSerializer


class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
