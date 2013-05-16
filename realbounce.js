/*
	Real Bounce Tracker for Google Analytics
	Author: Matteo Crippa
	Url: http://www.matteocrippa.it/post/real-bounce-tracker
	Version: 0.2
*/
var tTimeout = 30; // Bounce time in seconds
var tAsync = true; // Are you using Google Analytics with Async Call?
var tName = '_gaq'; // Put here var tracker name (default values are: _gaq for Async and pageTracker for the default call)

if(tAsync)
	tracker = 'push([\'_trackEvent\',\'RealBounce\',\''+tTimeout+'sec\'])';
else
	tracker = '_trackEvent(\'RealBounce\',\''+tTimeout+'sec\')';

setTimeout(tName+'.'+tracker,(tTimeout*1000));