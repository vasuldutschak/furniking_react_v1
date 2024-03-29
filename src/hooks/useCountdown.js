import PropTypes from 'prop-types';
import {useEffect, useState} from "react";
import {format, intervalToDuration} from "date-fns";

function UseCountdown(startDate,endDate) {
    const countDownDate = new Date(endDate).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date(startDate).getTime()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    const isExpire=days + hours + minutes + seconds <= 0
    return [days, hours, minutes, seconds,isExpire];
}

UseCountdown.propTypes = {
    startDate:PropTypes.string.isRequired,
    endDate:PropTypes.string.isRequired,
};

export default UseCountdown;