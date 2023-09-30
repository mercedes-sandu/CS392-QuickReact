function ParseMeetingTime(meetingTime) {
    const [days, time] = meetingTime.split(' ')
    const [startTime, endTime] = time.split('-')
    return [days, startTime, endTime];
}

function ConvertTimeToMinutes(time) {
    const [hours, minutes] = time.split(':')
    return parseInt(hours) * 60 + parseInt(minutes)
}

function OnSameDay(days1, days2) {
    var days1Arr = days1.split(/(?=[A-Z])/);
    var days2Arr = days2.split(/(?=[A-Z])/);
    for (var i = 0; i < days1Arr.length; i++) {
        if (days2Arr.includes(days1Arr[i])) {
            return true;
        }
    }
    return false;
}

function TimesOverlap(startTime1, endTime1, startTime2, endTime2, course1, course2) {
    var startMinutes1 = ConvertTimeToMinutes(startTime1);
    var endMinutes1 = ConvertTimeToMinutes(endTime1);
    var startMinutes2 = ConvertTimeToMinutes(startTime2);
    var endMinutes2 = ConvertTimeToMinutes(endTime2);
    return ((startMinutes1 <= endMinutes2 && endMinutes1 >= startMinutes2)
        || (startMinutes2 <= endMinutes1 && endMinutes2 >= startMinutes1));
}

function IsTimeConflictIndividual(course1, course2) {
    var [days1, startTime1, endTime1] = ParseMeetingTime(course1.meets);
    var [days2, startTime2, endTime2] = ParseMeetingTime(course2.meets);

    return OnSameDay(days1, days2)
        && TimesOverlap(startTime1, endTime1, startTime2, endTime2, course1, course2);
}

export const IsTimeConflict = (course, selectedCoursesList) => {
    for (var i = 0; i < selectedCoursesList.length; i++) {
        if (selectedCoursesList[i].number == course.number) {
            continue;
        }
        if (IsTimeConflictIndividual(course, selectedCoursesList[i])) {
            return true;
        }
    }
    return false;
}

export const GetStartTime = (course) => {
    var [days, startTime, endTime] = ParseMeetingTime(course.meets);
    var startTimeDate = new Date();
    var timeArr = startTime.split(':');
    startTimeDate.setHours(timeArr[0]);
    startTimeDate.setMinutes(timeArr[1]);
    startTimeDate.setSeconds(0);
    return startTimeDate;
}

export const GetEndTime = (course) => {
    var [days, startTime, endTime] = ParseMeetingTime(course.meets);
    var endTimeDate = new Date();
    var timeArr = endTime.split(':');
    endTimeDate.setHours(timeArr[0]);
    endTimeDate.setMinutes(timeArr[1]);
    endTimeDate.setSeconds(0);
    return endTimeDate;
}