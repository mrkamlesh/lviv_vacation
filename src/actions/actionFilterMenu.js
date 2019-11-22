const ACTION_CHECK_ALL = "ACTION_CHECK_ALL";
const ACTION_CHECK_HOTEL = "ACTION_CHECK_HOTEL";
const ACTION_CHECK_MOTEL = "ACTION_CHECK_MOTEL";
const ACTION_CHECK_HOSTEL = "ACTION_CHECK_HOSTEL";
const ACTION_CHECK_FLAT = "ACTION_CHECK_FLAT";

const changeCheckboxAll = (checked) => {
    return {
        type: ACTION_CHECK_ALL,
        payload: checked
    }
}

const changeCheckboxHotel = (checked) => {
    return {
        type: ACTION_CHECK_HOTEL,
        payload: checked
    }
}

const changeCheckboxMotel = (checked) => {
    return {
        type: ACTION_CHECK_MOTEL,
        payload: checked
    }
}

const changeCheckboxHostel = (checked) => {
    return {
        type: ACTION_CHECK_HOSTEL,
        payload: checked
    }
}

const changeCheckboxFlat = (checked) => {
    return {
        type: ACTION_CHECK_FLAT,
        payload: checked
    }
}

const changeCheckboxByIncrease = (checked) => {
    return {
        type: "ACTION_CHECK_BY_iNCREASE",
        payload: checked
    }
}

const changeCheckboxByDecrease = (checked) => {
    return {
        type: "ACTION_CHECK_BY_DECREASE",
        payload: checked
    }
}

export {
    changeCheckboxAll, ACTION_CHECK_ALL, changeCheckboxHotel, ACTION_CHECK_HOTEL,
    changeCheckboxMotel, changeCheckboxHostel, changeCheckboxFlat, ACTION_CHECK_MOTEL,
    ACTION_CHECK_HOSTEL, ACTION_CHECK_FLAT, changeCheckboxByIncrease, changeCheckboxByDecrease
};