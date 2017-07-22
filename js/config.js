/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.04
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "Fidelis Network";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/touhou01.jpg",
	"backgrounds/images/touhou02.jpg",
	"backgrounds/images/touhou03.jpg",
	"backgrounds/images/touhou04.jpg",
	"backgrounds/images/touhou05.jpg",
	"backgrounds/images/touhou06.jpg",
	"backgrounds/images/touhou07.jpg",
	"backgrounds/images/touhou08.jpg",
	"backgrounds/images/touhou09.jpg",
	"backgrounds/images/touhou10.jpg",
	"backgrounds/images/touhou11.jpg",
	"backgrounds/images/touhou12.jpg",
	"backgrounds/images/touhou13.jpg",
	"backgrounds/images/touhou14.jpg",
	"backgrounds/images/touhou15.jpg",
	"backgrounds/images/touhou16.jpg",
	"backgrounds/images/touhou17.jpg",
	"backgrounds/images/touhou18.jpg",
	"backgrounds/images/touhou19.jpg",
	"backgrounds/images/touhou20.jpg",
	"backgrounds/images/touhou21.jpg",
	"backgrounds/images/touhou22.jpg",
	"backgrounds/images/touhou23.jpg",
	"backgrounds/images/touhou24.jpg",
	"backgrounds/images/touhou25.jpg",
	"backgrounds/images/touhou26.jpg",
	"backgrounds/images/touhou27.jpg",
	"backgrounds/images/touhou28.jpg",
	"backgrounds/images/touhou29.jpg",
	"backgrounds/images/touhou30.jpg",
	"backgrounds/images/touhou31.jpg",
	"backgrounds/images/touhou32.jpg",
	"backgrounds/images/touhou33.jpg",
	"backgrounds/images/touhou34.jpg",
	"backgrounds/images/touhou35.jpg",
	"backgrounds/images/touhou36.jpg",
	"backgrounds/images/touhou37.jpg",
	"backgrounds/images/touhou38.jpg",
	"backgrounds/images/touhou39.jpg",
	"backgrounds/images/touhou40.jpg",
	"backgrounds/images/touhou41.jpg",
	"backgrounds/images/touhou42.jpg",
	"backgrounds/images/touhou43.jpg",
	"backgrounds/images/touhou44.jpg",
	"backgrounds/images/touhou45.jpg",
	"backgrounds/images/touhou46.jpg",
	"backgrounds/images/touhou47.jpg",
	"backgrounds/images/touhou48.jpg",
	"backgrounds/images/touhou49.jpg",
	"backgrounds/images/touhou50.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = false;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = false;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = false;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{ogg: "songs/Transformers.ogg", name: ""},
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;