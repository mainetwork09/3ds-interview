$().ready(function() {

    $.getJSON('/api/video', function(res) {
        console.log(res)
        var items = res.items;
        var html = "";

        $('#loading-text').show();

        $.each(items, function(index) {
            var thumbnail = items[index].snippet.thumbnails.high.url;
            var id = items[index].id.videoId;
            var title = $.trim(items[index].snippet.title);
            console.log(items[index])
            console.log('thumbnail=' + thumbnail)

            if (id) {
                html += '<div class="item">';
                html += '<a class="view-video" data-video-id="' + id + '" href="#/view/' + id + '">';
                html += '<img class="v-thumbnail" src="' + thumbnail + '">';
                html += '<div class="title"><div class="text">' + title + '</div></div>';
                html += '</a>';
                html += '</div>';
            }

            $('#loading-text').hide();

        })

        $('#content').html(html)

        $('.view-video').click(function() {

        })

    })

})