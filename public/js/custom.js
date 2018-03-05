$().ready(function() {


    $.getJSON('/api/video', function(res) {
        console.log(res)
        var items = res.items;
        var html = "";
        $.each(items, function(index) {
            var thumbnail = items[index].snippet.thumbnails.high.url;
            var id = 1;
            var title = $.trim(items[index].snippet.title);
            console.log(items[index])
            console.log('thumbnail=' + thumbnail)
            html += '<div class="item">';
            html += '<img class="v-thumbnail" src="' + thumbnail + '">';
            html += '<div class="title"><div class="text">' + title + '</div></div>';

            html += '</div>';

        })
        $('#content').html(html)
    })

})