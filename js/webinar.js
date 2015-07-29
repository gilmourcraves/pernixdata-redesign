function seekTo(seconds)
{
    var iframe = jQuery('iframe')[0],
        player = $f(iframe);

    player.api('seekTo', seconds);
    return false;
}
