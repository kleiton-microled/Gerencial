import {
  DayTableView,
  TableDateProfileGenerator
} from "./chunk-E7SIDCC6.js";
import "./chunk-T7UM46HU.js";
import {
  createPlugin
} from "./chunk-KU4LZTWE.js";
import "./chunk-3OV72XIM.js";

// node_modules/@fullcalendar/daygrid/index.js
var index = createPlugin({
  name: "@fullcalendar/daygrid",
  initialView: "dayGridMonth",
  views: {
    dayGrid: {
      component: DayTableView,
      dateProfileGeneratorClass: TableDateProfileGenerator
    },
    dayGridDay: {
      type: "dayGrid",
      duration: {
        days: 1
      }
    },
    dayGridWeek: {
      type: "dayGrid",
      duration: {
        weeks: 1
      }
    },
    dayGridMonth: {
      type: "dayGrid",
      duration: {
        months: 1
      },
      fixedWeekCount: true
    },
    dayGridYear: {
      type: "dayGrid",
      duration: {
        years: 1
      }
    }
  }
});
export {
  index as default
};
//# sourceMappingURL=@fullcalendar_daygrid.js.map
