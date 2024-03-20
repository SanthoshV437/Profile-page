document.getElementById('maps-btn').addEventListener('click', function () {
    var location = "SV Hollow Blocks"; // replace with your desired location
    var maps_link = "https://maps.app.goo.gl/HvFEfTRArDRAUutA8?g_st=iw" + encodeURIComponent(location);
    window.open(maps_link, '_blank');
});
