"use strict";chrome.runtime.onMessage.addListener(function(e,n,c){var t=e.cleanEndScreen?"none":"block";document.querySelectorAll(".ytp-ce-element").forEach(function(e){e.style.display=t}),c({result:"success"})});