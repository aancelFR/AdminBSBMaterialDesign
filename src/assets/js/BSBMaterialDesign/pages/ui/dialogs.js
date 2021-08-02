$(function () {
    $(".js-sweetalert button").on("click", function () {
        var type = $(this).data("type");
        if (type === "basic") {
            showBasicMessage();
        } else if (type === "with-title") {
            showWithTitleMessage();
        } else if (type === "success") {
            showSuccessMessage();
        } else if (type === "confirm") {
            showConfirmMessage();
        } else if (type === "cancel") {
            showCancelMessage();
        } else if (type === "with-custom-icon") {
            showWithCustomIconMessage();
        } else if (type === "html-message") {
            showHtmlMessage();
        } else if (type === "autoclose-timer") {
            showAutoCloseTimerMessage();
        } else if (type === "prompt") {
            showPromptMessage();
        } else if (type === "ajax-loader") {
            showAjaxLoaderMessage();
        }
    });
});

// These codes takes from http://t4t5.github.io/sweetalert/
function showBasicMessage() {
    Swal.fire("Here's a message!");
}

function showWithTitleMessage() {
    Swal.fire("Here's a message!", "It's pretty, isn't it?");
}

function showSuccessMessage() {
    Swal.fire("Good job!", "You clicked the button!", "success");
}

function showConfirmMessage() {
    Swal.fire(
        {
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false,
        },
        function () {
            Swal.fire(
                "Deleted!",
                "Your imaginary file has been deleted.",
                "success"
            );
        }
    );
}

function showCancelMessage() {
    Swal.fire(
        {
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false,
        },
        function (isConfirm) {
            if (isConfirm) {
                Swal.fire(
                    "Deleted!",
                    "Your imaginary file has been deleted.",
                    "success"
                );
            } else {
                Swal.fire(
                    "Cancelled",
                    "Your imaginary file is safe :)",
                    "error"
                );
            }
        }
    );
}

function showWithCustomIconMessage() {
    Swal.fire({
        title: "Sweet!",
        text: "Here's a custom image.",
        imageUrl: "../../images/thumbs-up.png",
    });
}

function showHtmlMessage() {
    Swal.fire({
        title: "HTML <small>Title</small>!",
        text: 'A custom <span style="color: #CC0000">html<span> message.',
        html: true,
    });
}

function showAutoCloseTimerMessage() {
    Swal.fire({
        title: "Auto close alert!",
        text: "I will close in 2 seconds.",
        timer: 2000,
        showConfirmButton: false,
    });
}

function showPromptMessage() {
    Swal.fire(
        {
            title: "An input!",
            text: "Write something interesting:",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Write something",
        },
        function (inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
                Swal.fire.showInputError("You need to write something!");
                return false;
            }
            Swal.fire("Nice!", "You wrote: " + inputValue, "success");
        }
    );
}

function showAjaxLoaderMessage() {
    Swal.fire(
        {
            title: "Ajax request example",
            text: "Submit to run ajax request",
            type: "info",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        },
        function () {
            setTimeout(function () {
                Swal.fire("Ajax request finished!");
            }, 2000);
        }
    );
}
