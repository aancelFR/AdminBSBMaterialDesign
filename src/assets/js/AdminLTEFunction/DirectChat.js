/* DirectChat()
 * ===============
 * Toggles the state of the control sidebar
 *
 * @Usage: $('#my-chat-box').directChat()
 *         or add [data-widget="direct-chat"] to the trigger
 */
// eslint-disable-next-line
+(function ($) {
    "use strict";

    var DataKey = "lte.directchat";

    var Selector = {
        data: '[data-widget="chat-pane-toggle"]',
        box: ".direct-chat",
    };

    var ClassName = {
        open: "direct-chat-contacts-open",
    };

    // DirectChat Class Definition
    // ===========================
    var DirectChat = function (element) {
        this.element = element;
    };

    DirectChat.prototype.toggle = function ($trigger) {
        $trigger.parents(Selector.box).first().toggleClass(ClassName.open);
    };

    // Plugin Definition
    // =================
    function Plugin(option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data(DataKey);

            if (!data) {
                $this.data(DataKey, (data = new DirectChat($this)));
            }

            if (typeof option === "string") data.toggle($this);
        });
    }

    var old = $.fn.directChat;

    // eslint-disable-next-line
  $.fn.directChat             = Plugin;
    // eslint-disable-next-line
  $.fn.directChat.Constructor = DirectChat;

    // No Conflict Mode
    // ================
    // eslint-disable-next-line
  $.fn.directChat.noConflict = function () {
        // eslint-disable-next-line
    $.fn.directChat = old;
        return this;
    };

    // DirectChat Data API
    // ===================
    $(document).on("click", Selector.data, function (event) {
        if (event) event.preventDefault();
        Plugin.call($(this), "toggle");
    });
})(jQuery);
