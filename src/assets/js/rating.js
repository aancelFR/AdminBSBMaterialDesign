// eslint-disable-next-line
(($) => {
    $.initialFactionalRatting = function () {
        $(".br-theme-fontawesome-stars-o .br-widget a").on("click", function (
            event,
            // eslint-disable-next-line no-unused-vars
            target
        ) {
            // check the value of clicked star
            const selected = $(this).data("rating-value");

            // if clicked on the left side  of the star (we want half star)
            var $selected = selected - 0.5;
            // if clicked on the right half of the star
            if (event.clientX > $(this).offset().left + 9) {
                $selected = selected;
            }

            // make sure we selected new start we clicked (or half star)
            $(".rating").barrating("set", $selected);
            // now if the value is decimal value, we know it's half star.
            if ($selected % 1 !== 0) {
                // add appropriate classes
                $(`a[data-rating-value="${$selected + 0.5}"]`).addClass(
                    "br-fractional br-fractional-50"
                );
            }
        });
    };
})($);
