This code originates from files at http://mapscripting.com/examples. The files are example code for the book Mac Scripting 101 by Adam DuVander. The example files can be viewed and tested from http://mapscripting.com/map-scripting-101-examples. While reading the book and trying out the example code I found many of the examples no longer worked. This is mostly due to the fact that the last official and stable release of Mapstraction (2.0.18) is from 2011 as of Feb 2014. Meanwhile the Google API has changed and broken some of the code. Mapstraction now is again under active development. This github repository contains fixes I made to bring the code up to date with Mapstraction version 2.1, and get the examples to work correctly. 

All of the code is working except for:

/examples/proximity/localsearch_yahoo.html - Yahoo Maps API is now obsolete and no longer supported by Mapstraction. A Google API version was created as a substitute: /examples/proximity/localsearch_googlev3.html

These three Mashups are also not working:

1.) /examples/mashups/earthquake.html - The feed http://earthquake.usgs.gov/earthquakes/catalogs/7day-M2.5.xml, has been deprecated; code needs to be adapted to new feed: http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.quakeml
2.) /examples/mashups/twitter.html
3.) /examples/mashups/upcoming.html
