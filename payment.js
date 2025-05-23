var form = document.getElementById("form");
var booking_id = document.getElementById("booking_id");
var amount_adv = document.getElementById("amount_adv");
var amount_total = document.getElementById("amount_total");



function valid_booking_id() {
    var booking_id_value = booking_id.value.trim();
    if (booking_id_value === "") {
        setError(booking_id, "Booking ID cannot be blank");
        return false;
    } else if (!valid_data(booking_id_value)) {
        setError(booking_id, "Booking ID ID must be at least 2 characters long");
        return false;
    } else {
        setSuccess(booking_id);
        return true;
    }
}

function valid_amount_adv() {
    var amount_adv_value = amount_adv.value.trim();
    if (amount_adv_value === "") {
        setError(amount_adv, "Advance amount cannot be blank");
        return false;
    } else if (!valid_data(amount_adv_value)) {
        setError(amount_adv, "Advance amount must be at least 2 characters long");
        return false;
    } else {
        setSuccess(amount_adv);
        return true;
    }
}

function valid_amount_total() {
    var amount_total_value = amount_total.value.trim();
    if (amount_total_value === "") {
        setError(amount_total, "Total amount cannot be blank");
        return false;
    } else if (!valid_data(amount_total_value)) {
        setError(amount_total, "Total amount must be at least 2 characters long");
        return false;
    } else {
        setSuccess(amount_total);
        return true;
    }
}

function setError(input, message) {
    var parent = input.parentElement;
    var small = parent.querySelector("small");
    parent.className = "container2 error";
    small.innerText = message;
    small.style.visibility = "visible";
}

function setSuccess(input) {
    var parent = input.parentElement;
    var small = parent.querySelector("small");
    parent.className = "container2 success";
    small.style.visibility = "hidden";
}

function valid_data(value) {
    return value.length >= 2;
}

booking_id.addEventListener('input', valid_booking_id);
amount_adv.addEventListener('input', valid_amount_adv);
amount_total.addEventListener('input', valid_amount_total);

form.addEventListener('submit', function (e) {

    var isBookingIdValid = valid_booking_id();
    var isAdvanceValid = valid_amount_adv();
    var isTotalValid = valid_amount_total();


    if (!isBookingIdValid || !isAdvanceValid || !isTotalValid) {
        e.preventDefault();
    }
});
