var form = document.getElementById("form");
var room_type_id = document.getElementById("room_type_id");
var room_id = document.getElementById("room_id");
var branch_id = document.getElementById("branch_id");



function valid_room_type_id() {
    var room_type_id_value = room_type_id.value.trim();
    if (room_type_id_value === "") {
        setError(room_type_id, "Room Type cannot be blank");
        return false;
    } else if (!valid_data(room_type_id_value)) {
        setError(room_type_id, "Room Type ID must be at least 3 characters long");
        return false;
    } else {
        setSuccess(room_type_id);
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

function valid_branch_id() {
    var branch_id_value = branch_id.value.trim();
    if (branch_id_value === "") {
        setError(branch_id, "Room Size cannot be blank");
        return false;
    } else if (!valid_data(branch_id_value)) {
        setError(branch_id, "Branch ID must be at least 3 characters long");
        return false;
    } else {
        setSuccess(branch_id);
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
room_id.addEventListener('input', valid_room_id);
branch_id.addEventListener('input', valid_branch_id);

form.addEventListener('submit', function (e) {

    var isRoomTypeValid = valid_room_type_id();
    var isRoomIdValid = valid_room_id();
    var isBranchIDValid = valid_branch_id();


    if (!isRoomTypeValid || !isRoomIdValid || !isBranchIDValid) {
        e.preventDefault();
    }
});
