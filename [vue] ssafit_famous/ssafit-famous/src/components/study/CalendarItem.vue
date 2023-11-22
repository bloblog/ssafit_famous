<!-- 일정 표시할 캘린더 -->
<template>
    <div>
        <div class='demo-app'>
    
            <div class='demo-app-main'>
            <FullCalendar
                class='demo-app-calendar'
                :options='calendarOptions'
            >
                <template v-slot:eventContent='arg'>
                <b>{{ arg.timeText }}</b>
                <i>{{ arg.event.title }}</i>
                </template>
            </FullCalendar>
            
            <div class="btn-group">
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modifyModal">수정하기</button>
                <modifyModal/>
    
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#addModal">추가하기</button>
                <addModal/>
            </div>
            
            
            <div class='demo-app-schedule'>
                <h2>Schedule ({{ currentEvents.length }})</h2>
                <ul>
                <li v-for='event in currentEvents' :key='event.id'>
                    <b>{{ event.startStr }}</b>
                    <i>{{ event.title }}</i>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import modifyModal from '@/components/study/ScheduleModify.vue';

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from '@/assets/js/event-utils'

// 메서드들
const handleDateSelect = function (selectInfo) {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
    calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
    })
    }
};
const handleEventClick = function(clickInfo) {
    // if (confirm(`'${clickInfo.event.title}'을 수정하시겠습니까?`)) {
    // clickInfo.event.remove() -> 삭제 이벤트
    // }
    
};

const handleEvents = function(events) {
    this.currentEvents = events
};

// 데이터
const calendarOptions = {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        initialView: 'dayGridMonth',
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: handleDateSelect,
        eventClick: handleEventClick,
        eventsSet: handleEvents
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      };

const currentEvents = [];

</script>

<style scoped>

h2 {
  margin: 0;
  font-size: 16px;
}

ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

li {
  margin: 1.5em 0;
  padding: 0;
}

b { /* used for event dates/times */
  margin-right: 3px;
}

.demo-app {
  display: flex;
  min-height: 100%;
  font-size: 14px;
}

/* .demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
} */

.demo-app-schedule {
  padding: 2em;
}

.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}

.fc { /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}

.btn-group {
    display: flex;
}



</style>