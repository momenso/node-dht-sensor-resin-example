#!/bin/sh
curl -SLO "http://www.airspayce.com/mikem/bcm2835/bcm2835-1.52.tar.gz" \
	&& tar zxvf bcm2835-1.52.tar.gz \
  && rm bcm2835-1.52.tar.gz
cd bcm2835-1.52
./configure
make
make install
