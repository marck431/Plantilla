import React from 'react'

function Calendar() {
  return (
    <Calendar
    initialView="dayGridMonth"
    initialDate="2021-11-10"
    events={[
      {
        title: "All day conference",
        start: "2021-11-04",
        end: "2021-11-06",
        className: "success",
      },
      {
        title: "Meeting with Mary",
        start: "2021-11-10",
        end: "2021-11-10",
        className: "info",
      },
      {
        title: "Winter Hackaton",
        start: "2021-11-22",
        end: "2021-11-25",
        className: "error",
      },
    ]}
    selectable
    editable
  />
  )
}

export default Calendar

