var form = document.getElementById("form");
var room_type_id = document.getElementById("room_type_id");
var room_type = document.getElementById("room_type");
var room_size = document.getElementById("room_size");

function valid_room_type_id() {
    var room_type_id_value = room_type_id.value.trim();
    if (room_type_id_value === "") {
        setError(room_type_id, "Room ID cannot be blank");
        return false;
    } else if (!valid_data(room_type_id_value)) {
        setError(room_type_id, "Room ID must be at least 3 characters long");
        return false;
    } else {
        setSuccess(room_type_id);
        return true;
    }
}

function valid_room_type() {
    var room_type_value = room_type.value.trim();
    if (room_type_value === "") {
        setError(room_type, "Room Type cannot be blank");
        return false;
    } else if (!valid_data(room_type_value)) {
        setError(room_type, "Room Type must be at least 3 characters long");
        return false;
    } else {
        setSuccess(room_type);
        return true;
    }
}

function valid_room_size() {
    var room_size_value = room_size.value.trim();
    if (room_size_value === "") {
        setError(room_size, "Room Size cannot be blank");
        return false;
    } else if (!valid_data(room_size_value)) {
        setError(room_size, "Room Size must be at least 3 characters long");
        return false;
    } else {
        setSuccess(room_size);
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

room_type_id.addEventListener('input', valid_room_type_id);
room_type.addEventListener('input', valid_room_type);
room_size.addEventListener('input', valid_room_size);

form.addEventListener('submit', function (e) {
    
    var isRoomIdValid = valid_room_type_id();
    var isRoomTypeValid = valid_room_type();
    var isRoomSizeValid = valid_room_size();

  
    if (!isRoomIdValid || !isRoomTypeValid || !isRoomSizeValid) {
        e.preventDefault();
    }
});
