const townHall = require('./townHall.js');
const townHallUtils = require('../utils/townHallUtils.js');
const chai = require('chai');
const expect = chai.expect;
const localEvents = [{
  "City":"Elkton",
  "Date":"Thu, Apr 6, 2017",
  "District":"VA-06",
  "Location":"Elkton Area Community Center",
  "Member":"Bob Goodlatte",
  "Notes":"<p>Held 1st Thursday every month. Rep. Goodlatte not in attendance; staff attends. More info here: <a href=\"http://goodlatte.house.gov/constituent-services/open-door-meetings.htm\" target=\"_blank\">Link</a></p>",
  "Party":"Republican",
  "RSVP":"",
  "State":"Virginia",
  "StateAb":"VA",
  "Time":"11:30 AM",
  "Zip":"22827",
  "address":"20593 Blue and Gold Dr, Elkton, VA 22827",
  "dateObj": (new Date()).getTime() + 100000, // make sure it's in the future
  "dateString":"Thu Apr 06 2017",
  "dateValid":true,
  "eventId":"100096",
  "eventName":"",
  "lastUpdated":1491974202086,
  "lastUpdatedHuman":"Tue Apr 11 2017 22:16:40 GMT-0700 (PDT)",
  "lat":38.4065494,
  "lng":-78.61709150000002,
  "meetingType":"Office Hours",
  "repeatingEvent":"Held 1st Thursday every month",
  "streetAddress":"20593 Blue and Gold Dr.",
  "timeEnd":"NA",
  "timeEnd24":"13:30:00",
  "timeStart24":"11:30:00",
  "timeZone":"EDT",
  "updatedBy":"",
  "yearMonthDay":"2017-04-06",
  "zoneString":"America/New_York"
},
{
  "City":"Fincastle",
  "Date":"Tue, Apr 11, 2017",
  "District":"06",
  "Location":"Botetourt Co. Courthouse, Second Floor Conference Room",
  "Member":"Bob Goodlatte",
  "Notes":"<p>Held 2nd Tuesday every month. Rep. Goodlatte not in attendance; staff attends. More info here: <a href=\"http://goodlatte.house.gov/constituent-services/open-door-meetings.htm\" target=\"_blank\">More Information</a></p>",
  "Party":"Republican",
  "RSVP":"",
  "State":"Virginia",
  "StateAb":"VA",
  "Time":"9:00 AM",
  "Zip":"24090",
  "address":"1 E Main St, Fincastle, VA 24090",
  "dateObj": (new Date()).getTime() + 100001, // make sure it's in the future
  "dateString":"Tue Apr 11 2017",
  "dateValid":true,
  "eventId":"100097",
  "eventName":"",
  "lastUpdated":1491974220303,
  "lastUpdatedHuman":"Tue Apr 11 2017 22:16:59 GMT-0700 (PDT)",
  "lat":37.498796,
  "lng":-79.877583,
  "meetingType":"Office Hours",
  "repeatingEvent":"Held 2nd Tuesday every month",
  "streetAddress":"1 Main St.",
  "timeEnd":"NA",
  "timeEnd24":"11:00:00",
  "timeStart24":"9:00:00",
  "timeZone":"EDT",
  "updatedBy":"",
  "yearMonthDay":"2017-04-11",
  "zoneString":"America/New_York"
},
{
  "City":"Madison Heights",
  "Date":"Tue, Apr 4, 2017",
  "District":"VA-6",
  "Location":"Goodwill",
  "Member":"Bob Goodlatte",
  "Notes":"<p>Held 1st Tuesday every month. Rep. Goodlatte not in attendance; staff attends. More info here: <a href=\"http://goodlatte.house.gov/constituent-services/open-door-meetings.htm\" target=\"_blank\">More Information</a></p>",
  "Party":"Republican",
  "RSVP":"",
  "State":"Virginia",
  "StateAb":"VA",
  "Time":"11:00 AM",
  "Zip":"22727",
  "address":"River James Shopping Center, 174 River James Dr, Madison Heights, VA 24572",
  "dateObj": (new Date()).getTime() - 100002, // make sure it's in the past
  "dateString":"Tue Apr 04 2017",
  "dateValid":true,
  "eventId":"100098",
  "eventName":"",
  "lastUpdated":1491974234423,
  "lastUpdatedHuman":"Tue Apr 11 2017 22:17:12 GMT-0700 (PDT)",
  "lat":37.4353746,
  "lng":-79.12645239999999,
  "meetingType":"Office Hours",
  "repeatingEvent":"Held 1st Tuesday every month",
  "streetAddress":"174 River James Shopping Center",
  "timeEnd":"NA",
  "timeEnd24":"13:00:00",
  "timeStart24":"11:00:00",
  "timeZone":"EDT",
  "updatedBy":"",
  "yearMonthDay":"2017-04-04",
  "zoneString":"America/New_York"
},
{
  "City":"Buchanan",
  "Date":"Tue, Apr 11, 2017",
  "District":"6",
  "Location":"Town Hall",
  "Member":"Bob Goodlatte",
  "Notes":"<p>Held 2nd Tuesday every month. Rep. Goodlatte not in attendance; staff attends. More info here: <a href=\"http://goodlatte.house.gov/constituent-services/open-door-meetings.htm\" target=\"_blank\">Link</a></p>",
  "Party":"Republican",
  "RSVP":"",
  "State":"Virginia",
  "StateAb":"VA",
  "Time":"10:30 AM",
  "Zip":"24066",
  "address":"19753 Main St, Buchanan, VA 24066",
  "dateObj": (new Date()).getTime() + 100003, // make sure it's in the future
  "dateString":"Tue Apr 11 2017",
  "dateValid":true,
  "eventId":"100099",
  "eventName":"",
  "lastUpdated":1491974250863,
  "lastUpdatedHuman":"Tue Apr 11 2017 22:17:29 GMT-0700 (PDT)",
  "lat":37.52801900000001,
  "lng":-79.679953,
  "meetingType":"Office Hours",
  "repeatingEvent":"Held 2nd Tuesday every month",
  "streetAddress":"19753 Main St.",
  "timeEnd":"NA",
  "timeEnd24":"12:30:00",
  "timeStart24":"10:30:00",
  "timeZone":"EDT",
  "updatedBy":"",
  "yearMonthDay":"2017-04-11",
  "zoneString":"America/New_York"
},
{
  "City":"Grottoes",
  "Date":"Tue, Apr 18, 2017",
  "District":"VA-06",
  "Location":"Town Hall",
  "Member":"Bob Goodlatte",
  "Notes":"<p>Held 3rd Tuesday of every month. Rep. Goodlatte not in attendance; staff attends. More info here: <a href=\"http://goodlatte.house.gov/constituent-services/open-door-meetings.htm\" target=\"_blank\">More Information</a></p>",
  "Party":"Republican",
  "RSVP":"",
  "State":"Virginia",
  "StateAb":"VA",
  "Time":"9:30 AM",
  "Zip":"24441",
  "address":"601 Dogwood Ave, Grottoes, VA 24441",
  "dateObj": (new Date()).getTime() + 100004, // make sure it's in the future
  "dateString":"Tue Apr 18 2017",
  "dateValid":true,
  "eventId":"100105",
  "eventName":"",
  "lastUpdated":1489792200000,
  "lastUpdatedHuman":"2017-03-17T23:10:00.000Z",
  "lat":38.2661339,
  "lng":-78.8273514,
  "meetingType":"Office Hours",
  "streetAddress":"601 Dogwood Ave",
  "timeEnd":"NA",
  "timeEnd24":"11:30:00",
  "timeStart24":"9:30:00",
  "timeZone":"EDT",
  "yearMonthDay":"2017-04-18",
  "zoneString":"America/New_York"
},
{
  "City":"Luray",
  "Date":"Mon, Apr 17, 2017",
  "District":"VA-06",
  "Location":"Luray Town Hall",
  "Member":"Bob Goodlatte",
  "Notes":"<p>1st&3rd Monday every month. Rep. Goodlatte not in attendance; staff attends. More info here: <a href=\"http://goodlatte.house.gov/constituent-services/open-door-meetings.htm\" target=\"_blank\">Link</a></p>",
  "Party":"Republican",
  "RSVP":"",
  "State":"Virginia",
  "StateAb":"VA",
  "Time":"9:00 AM",
  "Zip":"22835",
  "address":"45 E Main St, Luray, VA 22835",
  "dateObj": (new Date()).getTime() + 100005, // make sure it's in the future
  "dateString":"Mon Apr 17 2017",
  "dateValid":true,
  "eventId":"100106",
  "eventName":"",
  "lastUpdated":1487696401000,
  "lastUpdatedHuman":"2017-02-21T17:00:01.000Z",
  "lat":38.6656566,
  "lng":-78.458302,
  "meetingType":"Office Hours",
  "streetAddress":"45 E. Main St.",
  "timeEnd":"NA",
  "timeEnd24":"11:00:00",
  "timeStart24":"9:00:00",
  "timeZone":"EDT",
  "yearMonthDay":"2017-04-17",
  "zoneString":"America/New_York"
},
{
  "City":"Forest",
  "Date":"Tue, Apr 18, 2017",
  "District":"VA-06",
  "Location":"Forest Public Library",
  "Member":"Bob Goodlatte",
  "Notes":"<p>Held 3rd Tuesday every month. Rep. Goodlatte not in attendance; staff attends. More info here: <a href=\"http://goodlatte.house.gov/constituent-services/open-door-meetings.htm\" target=\"_blank\">Link</a></p>",
  "Party":"Republican",
  "RSVP":"",
  "State":"Virginia",
  "StateAb":"VA",
  "Time":"10:00 AM",
  "Zip":"24551",
  "address":"15583 Forest Rd, Forest, VA 24551",
  "dateObj": (new Date()).getTime() + 100006, // make sure it's in the future
  "dateString":"Tue Apr 18 2017",
  "dateValid":true,
  "eventId":"100107",
  "eventName":"",
  "lastUpdated":1487696401000,
  "lastUpdatedHuman":"2017-02-21T17:00:01.000Z",
  "lat":37.3649641,
  "lng":-79.2850156,
  "meetingType":"Office Hours",
  "streetAddress":"15583 Forest Rd.",
  "timeEnd":"NA",
  "timeEnd24":"12:00:00",
  "timeStart24":"10:00:00",
  "timeZone":"EDT",
  "yearMonthDay":"2017-04-18",
  "zoneString":"America/New_York"
},
{
  "City":"Waynesboro",
  "Date":"Tue, Apr 18, 2017",
  "District":"VA-06",
  "Location":"Public Library, First Floor Conference Room",
  "Member":"Bob Goodlatte",
  "Notes":"<p>Held every 3rd Tuesday. Rep. Goodlatte not in attendance; staff attends. More info here: <a href=\"http://goodlatte.house.gov/constituent-services/open-door-meetings.htm\" target=\"_blank\">Link</a></p>",
  "Party":"Republican",
  "RSVP":"",
  "State":"Virginia",
  "StateAb":"VA",
  "Time":"11:30 AM",
  "Zip":"22980",
  "address":"600 S Wayne Ave, Waynesboro, VA 22980",
  "dateObj": (new Date()).getTime() + 100007, // make sure it's in the future
  "dateString":"Tue Apr 18 2017",
  "dateValid":true,
  "eventId":"100108",
  "eventName":"",
  "lastUpdated":1487696401000,
  "lastUpdatedHuman":"2017-02-21T17:00:01.000Z",
  "lat":38.0617283,
  "lng":-78.8933156,
  "meetingType":"Office Hours",
  "streetAddress":"600 South Wayne Ave",
  "timeEnd":"NA",
  "timeEnd24":"13:30:00",
  "timeStart24":"11:30:00",
  "timeZone":"EDT",
  "yearMonthDay":"2017-04-18",
  "zoneString":"America/New_York"
},
{
  "City":"Front Royal",
  "Date":"Wed, Apr 19, 2017",
  "District":"VA-06",
  "Location":"Samuels Public Library",
  "Member":"Bob Goodlatte",
  "Notes":"<p>Held every Weds. Rep. Goodlatte not in attendance; staff attends. More info here: <a href=\"http://goodlatte.house.gov/constituent-services/open-door-meetings.htm\" target=\"_blank\">Link</a></p>",
  "Party":"Republican",
  "RSVP":"",
  "State":"Virginia",
  "StateAb":"VA",
  "Time":"10:00 AM",
  "Zip":"22630",
  "address":"330 E Criser Rd, Front Royal, VA 22630",
  "dateObj": (new Date()).getTime() + 100008, // make sure it's in the future
  "dateString":"Wed Apr 19 2017",
  "dateValid":true,
  "eventId":"100109",
  "eventName":"",
  "lastUpdated":1487696401000,
  "lastUpdatedHuman":"2017-02-21T17:00:01.000Z",
  "lat":38.9064678,
  "lng":-78.1882217,
  "meetingType":"Office Hours",
  "streetAddress":"330 E. Criser Rd.",
  "timeEnd":"NA",
  "timeEnd24":"12:00:00",
  "timeStart24":"10:00:00",
  "timeZone":"EDT",
  "yearMonthDay":"2017-04-19",
  "zoneString":"America/New_York"
},
{
  "City":"Buena Vista",
  "Date":"Thu, Apr 20, 2017",
  "District":"VA-06",
  "Location":"City Hall, Circuit Courtroom",
  "Member":"Bob Goodlatte",
  "Notes":"<p>Held 3rd Thursday every month. Rep. Goodlatte not in attendance; staff attends. More info here: <a href=\"http://goodlatte.house.gov/constituent-services/open-door-meetings.htm\" target=\"_blank\">Link</a></p>",
  "Party":"Republican",
  "RSVP":"",
  "State":"Virginia",
  "StateAb":"VA",
  "Time":"11:00 AM",
  "Zip":"24416",
  "address":"2039 Sycamore Ave, Buena Vista, VA 24416",
  "dateObj": (new Date()).getTime() + 100009, // make sure it's in the future
  "dateString":"Thu Apr 20 2017",
  "dateValid":true,
  "eventId":"100110",
  "eventName":"",
  "lastUpdated":1487696401000,
  "lastUpdatedHuman":"2017-02-21T17:00:01.000Z",
  "lat":37.7342468,
  "lng":-79.35599979999999,
  "meetingType":"Office Hours",
  "streetAddress":"2039 Sycamore Ave",
  "timeEnd":"NA",
  "timeEnd24":"13:00:00",
  "timeStart24":"11:00:00",
  "timeZone":"EDT",
  "yearMonthDay":"2017-04-20",
  "zoneString":"America/New_York"
},
{
  "City":"Lexington",
  "Date":"Thu, Apr 20, 2017",
  "District":"VA-06",
  "Location":"Rockbridge Co. Administration Building, Second Floor",
  "Member":"Bob Goodlatte",
  "Notes":"<p>Held 3rd Thursday every month. Rep. Goodlatte not in attendance; staff attends. More info here: <a href=\"http://goodlatte.house.gov/constituent-services/open-door-meetings.htm\" target=\"_blank\">Link</a></p>",
  "Party":"Republican",
  "RSVP":"",
  "State":"Virginia",
  "StateAb":"VA",
  "Time":"9:00 AM",
  "Zip":"24450",
  "address":"150 S Main St, Lexington, VA 24450",
  "dateObj": (new Date()).getTime() + 100010, // make sure it's in the future
  "dateString":"Thu Apr 20 2017",
  "dateValid":true,
  "eventId":"100111",
  "eventName":"",
  "lastUpdated":1487696401000,
  "lastUpdatedHuman":"2017-02-21T17:00:01.000Z",
  "lat":37.7828239,
  "lng":-79.443781,
  "meetingType":"Office Hours",
  "streetAddress":"150 South Main St.",
  "timeEnd":"NA",
  "timeEnd24":"11:00:00",
  "timeStart24":"9:00:00",
  "timeZone":"EDT",
  "yearMonthDay":"2017-04-20",
  "zoneString":"America/New_York"
},
{
  "City":"Woodstock",
  "Date":"Thu, Apr 20, 2017",
  "District":"VA-06",
  "Location":"Town Hall, Town Council Chambers",
  "Member":"Bob Goodlatte",
  "Notes":"<p>Held every 3rd Thursday. Rep. Goodlatte not in attendance; staff attends. More info here: <a href=\"http://goodlatte.house.gov/constituent-services/open-door-meetings.htm\" target=\"_blank\">Link</a></p>",
  "Party":"Republican",
  "RSVP":"",
  "State":"Virginia",
  "StateAb":"VA",
  "Time":"9:30 AM",
  "Zip":"22664",
  "address":"135 N Main St, Woodstock, VA 22664",
  "dateObj": (new Date()).getTime() + 100011, // make sure it's in the future
  "dateString":"Thu Apr 20 2017",
  "dateValid":true,
  "eventId":"100112",
  "eventName":"",
  "lastUpdated":1487696401000,
  "lastUpdatedHuman":"2017-02-21T17:00:01.000Z",
  "lat":38.8831083,
  "lng":-78.50525520000001,
  "meetingType":"Office Hours",
  "streetAddress":"135 North Main St.",
  "timeEnd":"NA",
  "timeEnd24":"11:30:00",
  "timeStart24":"9:30:00",
  "timeZone":"EDT",
  "yearMonthDay":"2017-04-20",
  "zoneString":"America/New_York"
},
{
  "City":"Vinton",
  "Date":"Tue, Apr 25, 2017",
  "District":"VA-06",
  "Location":"Town Hall, Town Conference Room",
  "Member":"Bob Goodlatte",
  "Notes":"<p>Held 4th Tuesday every month. Rep. Goodlatte not in attendance; staff attends. More info here: <a href=\"http://goodlatte.house.gov/constituent-services/open-door-meetings.htm\" target=\"_blank\">Link</a></p>",
  "Party":"Republican",
  "RSVP":"",
  "State":"Virginia",
  "StateAb":"VA",
  "Time":"8:30 AM",
  "Zip":"24179",
  "address":"311 S Pollard St, Vinton, VA 24179",
  "dateObj": (new Date()).getTime() + 100012, // make sure it's in the future
  "dateString":"Tue Apr 25 2017",
  "dateValid":true,
  "eventId":"100113",
  "eventName":"",
  "lastUpdated":1487696401000,
  "lastUpdatedHuman":"2017-02-21T17:00:01.000Z",
  "lat":37.2786543,
  "lng":-79.89869809999999,
  "meetingType":"Office Hours",
  "streetAddress":"311 South Pollard St.",
  "timeEnd":"NA",
  "timeEnd24":"10:30:00",
  "timeStart24":"8:30:00",
  "timeZone":"EDT",
  "yearMonthDay":"2017-04-25",
  "zoneString":"America/New_York"
},
{
  "City":"Bridgewater",
  "Date":"Tue, May 2, 2017",
  "District":"VA-06",
  "Location":"Municipal Building",
  "Member":"Bob Goodlatte",
  "Notes":"<p>Held 1st Tuesday every month. Rep. Goodlatte not in attendance; staff attends. More info here: <a href=\"http://goodlatte.house.gov/constituent-services/open-door-meetings.htm\" target=\"_blank\">Link</a></p>",
  "Party":"Republican",
  "RSVP":"",
  "State":"Virginia",
  "StateAb":"VA",
  "Time":"11:30 AM",
  "Zip":"22812",
  "address":"201 Green St, Bridgewater, VA 22812",
  "dateObj": (new Date()).getTime() + 100013, // make sure it's in the future
  "dateString":"Tue May 02 2017",
  "dateValid":true,
  "eventId":"100114",
  "eventName":"",
  "lastUpdated":1487696401000,
  "lastUpdatedHuman":"2017-02-21T17:00:01.000Z",
  "lat":38.385476,
  "lng":-78.97470059999999,
  "meetingType":"Office Hours",
  "streetAddress":"201 Green St.",
  "timeEnd":"NA",
  "timeEnd24":"13:30:00",
  "timeStart24":"11:30:00",
  "timeZone":"EDT",
  "yearMonthDay":"2017-05-02",
  "zoneString":"America/New_York"
},
{
  "City":"Washington",
  "Date":"Thu, Apr 6, 2017",
  "District":"Senate",
  "Location":"Russell Senate Office Building",
  "Member":"Patty Murray",
  "Notes":"<p>Arrive by 8:15; RSVP to 202-224-1425</p>",
  "Party":"Democrat",
  "RSVP":"",
  "State":"Virginia",
  "StateAb":"DC",
  "Time":"8:30 AM",
  "Zip":"20002",
  "address":"2536 Massachusetts Ave NW, Washington, DC 20008",
  "dateObj": (new Date()).getTime() + 100014, // make sure it's in the future
  "dateString":"Thu Apr 06 2017",
  "dateValid":true,
  "eventId":"100128",
  "eventName":"Weekly Coffee with Senator Murray",
  "lastUpdated":1491974269324,
  "lastUpdatedHuman":"Tue Apr 11 2017 22:17:42 GMT-0700 (PDT)",
  "lat":37.498796,
  "lng":-79.9776,
  "meetingType":"DC Event",
  "repeatingEvent":"Weekly Coffee with Senator Murray",
  "streetAddress":"Room 154",
  "timeEnd":"NA",
  "timeEnd24":"10:30:00",
  "timeStart24":"8:30:00",
  "timeZone":"EST",
  "updatedBy":"",
  "yearMonthDay":"2017-04-06",
  "zoneString":"America/New_York"
}];
describe('townHall component', () => {
  describe('eventList', () => {
    it('should display a list of events when found', () => {
      let state = {localEvents: localEvents};
      let result = townHall(state);
      let thirteenthLi = result.querySelector('.town-hall ul > li:nth-child(13)');
      expect(thirteenthLi).to.be.defined;
    });
    
    it('should display nothing when no events are found', () => {
      let state = {localEvents: []};
      let result = townHall(state);
      let ul = result.querySelector('.town-hall ul');
      expect(ul).not.to.exist;
    });
  });
});
describe('townHallUtils component', () => {
  describe('calculateDistance', () => {
    it('should accurately calculate the distance between two lat/long points', () => {
      let point1 = {
        "lat":38.4065494,
        "lng":-78.61709150000002,
      };
      let point2 = {
        "lat":37.498796,
        "lng":-79.877583,
      };
      let actualDistance = 93;
      let distance = townHallUtils.calculateDistance(point1.lat, point1.lng, point2.lat, point2.lng);
      expect(parseInt(distance)).to.equal(actualDistance);
    });
  });
  describe('parseCivicData', () => {
    it ('should accurately parse civic api data with a division', () => {
      let divisions = [
        "ocd-division/country:us/state:va/cd:6",
        "ocd-division/country:us",
        "ocd-division/country:us/state:va"
      ];
      let parsedData = townHallUtils.parseCivicData(divisions);
      expect(parsedData.congressional_district).to.equal('VA-06');
      expect(parsedData.country).to.equal('US');
      expect(parsedData.stateAbbr).to.equal('VA');
      expect(parsedData.state).to.equal('Virginia');
    });
    it ('should accurately parse civic api data without a division', () => {
      let divisions = [
        "ocd-division/country:us",
        "ocd-division/country:us/state:va"
      ];
      let parsedData = townHallUtils.parseCivicData(divisions);
      expect(parsedData.congressional_district).not.to.be.defined;
      expect(parsedData.country).to.equal('US');
      expect(parsedData.stateAbbr).to.equal('VA');
      expect(parsedData.state).to.equal('Virginia');
    });
  });
  describe('mapDistanceAndDistrict', () => {
    it ('should map distance and district to an event', () => {
      let userLocale = {
        "lat":37.498796,
        "lng":-79.877583,
      };
      let mappedEvents = localEvents.map(townHallUtils.mapDistanceAndDistrict(userLocale.lat, userLocale.lng));
      expect(mappedEvents[0].District).to.equal('VA-06');
      expect(mappedEvents[1].District).to.equal('VA-06');
      expect(mappedEvents[2].District).to.equal('VA-06');
      expect(mappedEvents[3].District).to.equal('VA-06');
      expect(mappedEvents[14].District).to.equal('Senate');
      expect(parseInt(mappedEvents[0].distance)).to.equal(93);
      expect(parseInt(mappedEvents[1].distance)).to.equal(0);
      expect(parseInt(mappedEvents[2].distance)).to.equal(41);
      expect(parseInt(mappedEvents[3].distance)).to.equal(11);
      expect(parseInt(mappedEvents[14].distance)).to.equal(5);
    });
    it ('should return a distance of null for events when lat/long are not present', () => {
      let userLocale = {
        "lat":37.498796,
        "lng":-79.877583,
      };
      let mappedEvents = localEvents.slice(0, 4);
      delete mappedEvents[2].lng;
      delete mappedEvents[2].lat;
      mappedEvents = mappedEvents.map(townHallUtils.mapDistanceAndDistrict(userLocale.lat, userLocale.lng));
      expect(mappedEvents[2].distance).to.be.null;
    });
  });
  describe('filterEvents', () => {
    it ('should filter events according to a given set of divisions', () => {
      let divisionsRaw = [
        "ocd-division/country:us/state:va/cd:6",
        "ocd-division/country:us",
        "ocd-division/country:us/state:va"
      ];
      let divisions = townHallUtils.parseCivicData(divisionsRaw);
      let events = localEvents.filter(townHallUtils.filterEvents(divisions));
      expect(events.length).to.equal(14);
    });
    it ('should apply division filters and distance filters', () => {
      let divisionsRaw = [
        "ocd-division/country:us/state:va/cd:6",
        "ocd-division/country:us",
        "ocd-division/country:us/state:va"
      ];
      let userLocale = {
        "lat":37.498796,
        "lng":-79.877583,
      };
      let divisions = townHallUtils.parseCivicData(divisionsRaw);
      expect(divisions.congressional_district).to.equal('VA-06');
      expect(divisions.country).to.equal('US');
      expect(divisions.stateAbbr).to.equal('VA');
      expect(divisions.state).to.equal('Virginia');
      let events = townHallUtils.filterForLocalEvents(localEvents, divisions, userLocale.lat, userLocale.lng);
      
      expect(events.length).to.equal(14);
      expect(events[0].eventId).to.equal('100097');
      expect(events[1].eventId).to.equal('100128');
      expect(events[2].eventId).to.equal('100099');
      expect(events[3].eventId).to.equal('100113');
      expect(events[4].eventId).to.equal('100111');
      expect(events[5].eventId).to.equal('100110');
      expect(events[6].eventId).to.equal('100107');
      expect(events[7].eventId).to.equal('100108');
      expect(events[8].eventId).to.equal('100105');
      expect(events[9].eventId).to.equal('100114');
      expect(events[10].eventId).to.equal('100096');
      expect(events[11].eventId).to.equal('100106');
      expect(events[12].eventId).to.equal('100112');
      expect(events[13].eventId).to.equal('100109');
    });
    it ('should disregard Senators\' events if lat/long are not present', () => {
      let divisionsRaw = [
        "ocd-division/country:us/state:va/cd:6",
        "ocd-division/country:us",
        "ocd-division/country:us/state:va"
      ];
      let userLocale = {
        "lat":37.498796,
        "lng":-79.877583,
      };
      
      let divisions = townHallUtils.parseCivicData(divisionsRaw);
      expect(divisions.congressional_district).to.equal('VA-06');
      expect(divisions.country).to.equal('US');
      expect(divisions.stateAbbr).to.equal('VA');
      expect(divisions.state).to.equal('Virginia');
      let events = localEvents;
      delete events[14].lat;
      delete events[14].lng;
      events = townHallUtils.filterForLocalEvents(events, divisions, userLocale.lat, userLocale.lng);
      expect(events.length).to.equal(13);
      expect(events[0].eventId).to.equal('100097');
      expect(events[1].eventId).to.equal('100099');
      expect(events[2].eventId).to.equal('100113');
      expect(events[3].eventId).to.equal('100111');
      expect(events[4].eventId).to.equal('100110');
      expect(events[5].eventId).to.equal('100107');
      expect(events[6].eventId).to.equal('100108');
      expect(events[7].eventId).to.equal('100105');
      expect(events[8].eventId).to.equal('100114');
      expect(events[9].eventId).to.equal('100096');
      expect(events[10].eventId).to.equal('100106');
      expect(events[11].eventId).to.equal('100112');
      expect(events[12].eventId).to.equal('100109');
    });
  });
});