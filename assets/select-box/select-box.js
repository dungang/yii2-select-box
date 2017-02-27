/**
 * Created by dungang
 */
+function ($) {

    'use strict';

    $.fn.selectBox = function () {
        return this.each(function () {
            var _this = $(this);
            var id = _this.attr('id');
            var sourceSearchInput = $('#'+id+'-source-search');
            var targetSearchInput = $('#'+id+'-target-search');
            var sourceSelect = $('#'+id+'-source');
            var targetSelect = $('#'+id+'-target');
            var yesButton = $('#'+id+'-btn-yes');
            var noButton = $('#'+id+'-btn-no');

            sourceSearchInput.keyup(function () {
                var filter = sourceSearchInput.val().trim();
                sourceSelect.find('option').each(function () {
                    var _option = $(this);
                    if (_option.text().indexOf(filter) < 0) {
                        _option.attr('selected',false)
                            .css({display:'none'});
                    } else {
                        _option.css({display:'block'});
                    }
                });
            });

            targetSearchInput.keyup(function () {
                var filter = targetSearchInput.val().trim();
                targetSelect.find('option').each(function () {
                    var _option = $(this);
                    if (_option.text().indexOf(filter) < 0) {
                        _option.attr('selected',false)
                            .css({display:'none'});
                    } else {
                        _option.css({display:'block'});
                    }
                });
            });

            yesButton.click(function () {
                sourceSelect
                    .find('option:selected')
                    .appendTo(targetSelect);
                targetSelect
                    .find('option')
                    .attr('selected',true);
            });

            noButton.click(function () {
                targetSelect
                    .find('option:selected')
                    .appendTo(sourceSelect);
            });


            targetSelect
                .find('option')
                .attr('selected',true);

        });
    };

}(jQuery);