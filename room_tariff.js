var form = document.getElementById("form");
var room_type_id = document.getElementById("room_type_id");
var tariff = document.getElementById("tariff");




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

function valid_tariff() {
    var tariff_value = tariff.value.trim();
    if (tariff_value === "") {
        setError(tariff, "Tariff cannot be blank");
        return false;
    } else if (!valid_data(tariff_value)) {
        setError(tariff, "Tariff must be at least 3 characters long");
        return false;
    } else {
        setSuccess(tariff);
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
tariff.addEventListener('input', valid_tariff);

form.addEventListener('submit', function (e) {

    var isRoomTypeValid = valid_room_type_id();
    var isTariffValid = valid_tariff();


    if (!isRoomTypeValid || !isTariffValid ) {
        e.preventDefault();
    }
});
