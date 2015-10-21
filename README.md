##README - TubeHacker

###Work out the best time to leave your house.

####Concept

***This project was a 24 hour 'hackathon' as part of the General Assembly Web Development Immersive course (WDI15 - August - October 2015). The theme we were given was 'travel'.***

You know that feeling when you get to the tube station and it's totally packed? Sucks right?

Sometimes leaving ten minutes earlier or later can make all the difference. Experienced commuters know that there's usually a pattern for a particular station through the week.

TubeHacker uses crowdsourced data to reveal these patterns. Users can then log in, choose a station and a time and then view how busy the station is likely to be for an hour around that. They can then adjust their departure time accordingly.

####Team
- Paco Contreras http://github.com/pacocontrerasdct
- Luke Haines http://github.com/lukehaines2
- Sam Rae http://github.com/samrae7

####Stack
- Mongo database
- Node
- Express
- Angular

####Still to do
* incorporate more stations. At present only Vauxhall and Paddington work
* Allow users to upload ratings (currently uses seeded data only)
* chart currently displays every rating, so multiple times are shown. When there are ratings for the same time slot the value shown should be an average for that time slot
* make the times displayed change accoording to the user input
* add colour key

#####Problems encountered

We tried to incorporate two Angular Chart modules (angular-chart and tc-angular-chart) without success. For some reason the charts were there in the page but were not being populated with data. This two and a half hours after which we gave up and produced a very simple graph using inline styling with angular so that the data is presented dynamically - the height and colour of each bar represents a 'busy-ness' rating.

