import { z as generateCategoricalChart, B as Bar, M as formatAxisMap } from "./generateCategoricalChart-BW2Go5AY.js";
import { X as XAxis, Y as YAxis } from "./YAxis-C-6M5L6F.js";
var BarChart = generateCategoricalChart({
  chartName: "BarChart",
  GraphicalChild: Bar,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: XAxis
  }, {
    axisType: "yAxis",
    AxisComp: YAxis
  }],
  formatAxisMap
});
export {
  BarChart as B
};
