$(document).ready(function(){
    setInterval(function(){
        skipVideoAd();
        closeBannerAd();
    }, 1500);

    function closeBannerAd(){
        var adDisplay = $('.ytp-ad-image-overlay');
        if (adDisplay.length > 0) {
            adDisplay.find('.ytp-ad-overlay-close-button').trigger('click');
        }
    }

    function skipVideoAd(){
        var videoAdUiSkipButton = $('.ytp-ad-skip-button-slot');
        if (videoAdUiSkipButton.length > 0) {
            videoAdUiSkipButton.trigger('click');
        }
    }
    
});