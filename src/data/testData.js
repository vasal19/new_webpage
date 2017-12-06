import logo from './../img/logo.jpg';
import background from './../img/background.jpg';

var imgData = {
  background: background,
  logo: logo
}

var events = [
  {name: "name1",
   description: "This is a short description"
 },
 {
   name: "name2",
   description: "This is a nother description"
 },
 // {
 //   name: "name3",
 //   description: "Yet another description"
 // }
]

var messages = {
  title: "IEEE Student Branch of ATEITH",
  moto: "Advancing technology for humanity",
  newEvents: "Upcoming Events",
  noNewEvents: "No upcoming events"
}

//var events = [];
export default {imgData, events, messages};
