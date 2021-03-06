$('button').tooltip({
     trigger: 'click',
     placement: 'bottom'
});

function setTooltip(btn, message) {
     $(btn).tooltip('hide')
       .attr('data-original-title', message)
       .tooltip('show');
}

function hideTooltip(btn) {
     setTimeout(function() {
       $(btn).tooltip('hide');
     }, 1000);
}

var clipboard = new Clipboard('button');

clipboard.on('success', function(e) {
     e.clearSelection();
     setTooltip(e.trigger, 'Copied!');
     hideTooltip(e.trigger);
});

clipboard.on('error', function(e) {
     e.clearSelection();
     setTooltip(e.trigger, 'Failed!');
     hideTooltip(e.trigger);
});