Its a jQuery plugin for generating random numbers,how many you want, with in a range without repetition of number.
            The range must have a minimum(inclusive) and maximum(inclusive) value.
            By default plugin generates 10 numbers from 10 to 100. Developer can customize these values by passing option parameters when
            he calls the plugin. For an example <br>
            $(".box").mayRandom({
            events: 5,
            min: 5,
            max: 100 
            });