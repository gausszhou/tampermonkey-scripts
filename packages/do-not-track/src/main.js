(function() {
    'use strict';
    window.doNotTrack = 1;
    Object.defineProperty(navigator, 'doNotTrack', { get() {return 1 }});
})();