var form = document.getElementById("form");
var booking_id = document.getElementById("booking_id");
var booking_date =  document.getElementById("booking_date");
var room_id = document.getElementById("room_id");
var cust_id = document.getElementById("cust_id");
var check_in =  document.getElementById("check_in");
var check_out = document.getElementById("check_out");


function valid_booking_id() {
    var booking_id_value = booking_id.value.trim();
    if (booking_id_value === "") {
        setError(booking_id, "Booking ID cannot be blank");
        return false;
    } else if (!valid_data(booking_id_value)) {
        setError(booking_id, "Booking ID must be at least 3 characters long");
        return false;
    } else {
        setSuccess(booking_id);
        return true;
    }
}

function valid_booking_date(){
    var booking_date_value =  booking_date.value.trim();
    if (booking_date_value === "") {
        setError(booking_date, "Booking Date cannot be blank");
        return false;
    }
    else {
        setSuccess(booking_date);
        return true;
    }

}

function valid_room_id() {
    var room_id_value = room_id.value.trim();
    if (room_id_value === "") {
        setError(room_id, "Room ID cannot be blank");
        return false;
    } else if (!valid_data(room_id_value)) {
        setError(room_id, "Room ID must be at least 3 characters long");
        return false;
    } else {
        setSuccess(room_id);
        return true;
    }
}

function valid_cust_id() {
    var cust_id_value = cust_id.value.trim();
    if (cust_id_value === "") {
        setError(cust_id, "Customer ID cannot be blank");
        return false;
    } else if (!valid_data(cust_id_value)) {
        setError(cust_id, "Customer ID must be at least 3 characters long");
        return false;
    } else {
        setSuccess(cust_id);
        return true;
    }
}

function valid_check_in(){
    var check_in_value = check_in.value.trim();
    if (check_in_value === "") {
        setError(check_in, "Check-in Date cannot be blank");
        return false;
    }
    else {
        setSuccess(check_in);
        return true;
    }
}

function valid_check_out(){
    var  check_out_value = check_out.value.trim();
    if (check_out_value === "") {
        setError(check_out, "Check-out Date cannot be blank");
        return false;
    }
    else{
        setSuccess(check_out);
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
    return value.length >= 3;
}

booking_id.addEventListener('input', valid_booking_id);
booking_date.addEventListener('input',valid_booking_date);
room_id.addEventListener('input', valid_room_id);
cust_id.addEventListener('input', valid_cust_id);
check_in.addEventListener('input',valid_check_in);
check_out.addEventListener('input',valid_check_out);

form.addEventListener('submit', function (e) {
    
    var isBookingIDValid = valid_booking_id();
    var isBookingDateValid = valid_booking_date();
    var isRoomIDValid = valid_room_id();
    var isVustIDValid = valid_cust_id();
    var isCheckInValid = valid_check_in();
    var  isCheckOutValid = valid_check_out();


  
    if (!isBookingIDValid ||!isBookingDateValid || !isRoomIDValid || !isVustIDValid ||  !isCheckInValid || !isCheckOutValid) {

        e.preventDefault();
    }
});
