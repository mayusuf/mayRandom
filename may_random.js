/* 
 
 Author: MD. ABU YUSUF
 Version: 1.0
 Website: mayusuf.wordpress.com
 Date Created: 22 August,2015

 */

(function ($) {

    $.fn.mayRandom = function (options) {

        var settings = $.extend({
            // These are the defaults.
            events: 10,
            min: 10,
            max: 100
        }, options);

        var random_number = [];
        
        for (var i = 0; i < settings.events; i++) {
            var gen_num = parseInt((Math.random() * (settings.max - settings.min + 1)) + settings.min);
            do {
                var is_exist = random_number.indexOf(gen_num);
                if (is_exist >= 0) {
                    gen_num = parseInt((Math.random() * (settings.max - settings.min + 1)) + settings.min);
                }
                else {
                    random_number.push(gen_num);
                    is_exist = -2;
                }
            }
            while (is_exist > -1);
        }
        return this.html(random_number.join(","));




        // Greenify the collection based on the settings variable.
//        return this.css({
//            color: settings.color,
//            backgroundColor: settings.backgroundColor
//        });

    };

}(jQuery));
