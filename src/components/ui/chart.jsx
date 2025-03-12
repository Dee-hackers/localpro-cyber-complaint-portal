
import * as React from "react";
import { BarChart as Bar, LineChart as Line, PieChart as Pie } from "recharts";

import { cn } from "@/lib/utils";

const DEFAULT_COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

function getColorFromVariable(colorValue) {
  if (!colorValue || typeof colorValue !== "string") {
    return undefined;
  }

  if (colorValue.startsWith("var(")) {
    const variableName = colorValue.slice(4, -1);
    return `hsl(${variableName})`;
  }

  if (colorValue.startsWith("hsl(var(")) {
    return colorValue;
  }

  return colorValue;
}

function getColorMap(colors) {
  const defaultColors = DEFAULT_COLORS;
  const colorMap = Array.isArray(colors)
    ? colors.map((color, index) => ({
        index,
        color: getColorFromVariable(color) || defaultColors[index % defaultColors.length],
      }))
    : undefined;

  return colorMap;
}

export function getColor(index, colors) {
  const colorMap = getColorMap(colors);

  if (colorMap) {
    const colorItem = colorMap.find((item) => item.index === index);
    return colorItem?.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length];
  }

  return DEFAULT_COLORS[index % DEFAULT_COLORS.length];
}

const applyColorToDatasets = (data, colors) => {
  if (!data || !colors) {
    return data;
  }

  return data.map((item, index) => ({
    ...item,
    color: colors[index % colors.length],
  }));
};

const BarChart = React.forwardRef(({ colors, data, ...props }, ref) => {
  const colorMap = getColorMap(colors);
  const dataWithColors = React.useMemo(
    () => applyColorToDatasets(data, colorMap?.map((item) => item.color)),
    [data, colorMap]
  );

  return (
    <Bar {...props} data={dataWithColors || data} ref={ref} />
  );
});
BarChart.displayName = "BarChart";

const LineChart = React.forwardRef(({ colors, data, ...props }, ref) => {
  const colorMap = getColorMap(colors);
  const dataWithColors = React.useMemo(
    () => applyColorToDatasets(data, colorMap?.map((item) => item.color)),
    [data, colorMap]
  );

  return (
    <Line {...props} data={dataWithColors || data} ref={ref} />
  );
});
LineChart.displayName = "LineChart";

const PieChart = React.forwardRef(({ colors, data, ...props }, ref) => {
  const colorMap = getColorMap(colors);
  const dataWithColors = React.useMemo(
    () => applyColorToDatasets(data, colorMap?.map((item) => item.color)),
    [data, colorMap]
  );

  return (
    <Pie {...props} data={dataWithColors || data} ref={ref} />
  );
});
PieChart.displayName = "PieChart";

export { BarChart, LineChart, PieChart };
