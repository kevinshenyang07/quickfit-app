# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import redirect
# from django.http import HttpResponse


def landing_page(request):
    return redirect("www.quickfit.pro")
