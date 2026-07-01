export const farmStats = [
  { label: "Active Fields", value: "12", change: "+2 this season", icon: "🗺️" },
  { label: "Soil Moisture", value: "64%", change: "North block avg.", icon: "💧" },
  { label: "Connected Devices", value: "38", change: "34 online now", icon: "📡" },
  { label: "Crop Health", value: "91%", change: "AI scout score", icon: "🌿" },
];

export const hardwareDevices = [
  { name: "Soil Node A-14", field: "North Wheat", type: "Moisture + pH", battery: 87, signal: "Strong", reading: "61% moisture / pH 6.8", status: "Online" },
  { name: "Weather Mast W-02", field: "Central Yard", type: "Weather station", battery: 92, signal: "Strong", reading: "29°C / 11 km/h wind", status: "Online" },
  { name: "Irrigation Valve V-7", field: "Tomato Tunnel", type: "Smart valve", battery: 74, signal: "Good", reading: "Open · 18 L/min", status: "Running" },
  { name: "Drone Dock D-1", field: "South Orchard", type: "Aerial scout", battery: 56, signal: "Good", reading: "Next scan 16:30", status: "Standby" },
  { name: "Tank Sensor T-3", field: "Fertigation Shed", type: "Level sensor", battery: 41, signal: "Weak", reading: "NPK mix 32% full", status: "Warning" },
];

export const fields = [
  { name: "North Wheat", crop: "Durum Wheat", area: "42 acres", moisture: 61, stage: "Heading", nextTask: "Apply potassium" },
  { name: "Tomato Tunnel", crop: "Cherry Tomato", area: "3.6 acres", moisture: 72, stage: "Fruit set", nextTask: "Run drip cycle" },
  { name: "South Orchard", crop: "Apple", area: "18 acres", moisture: 54, stage: "Ripening", nextTask: "Drone pest scan" },
  { name: "East Rice Plot", crop: "Rice", area: "25 acres", moisture: 83, stage: "Tillering", nextTask: "Check water gates" },
];

export const tasks = [
  { title: "Calibrate pH probes", due: "Today", priority: "High", assignee: "Maya", icon: "📡" },
  { title: "Inspect pump house filter", due: "Tomorrow", priority: "Medium", assignee: "Noah", icon: "🚜" },
  { title: "Scout aphids in orchard", due: "Jul 3", priority: "High", assignee: "Ari", icon: "⚠️" },
  { title: "Seed nursery batch B", due: "Jul 4", priority: "Low", assignee: "Lina", icon: "🌱" },
];

export const sensorTimeline = [
  { time: "06:00", temp: 21, moisture: 68 },
  { time: "09:00", temp: 25, moisture: 65 },
  { time: "12:00", temp: 31, moisture: 60 },
  { time: "15:00", temp: 33, moisture: 57 },
  { time: "18:00", temp: 28, moisture: 63 },
];

export const alerts = [
  "Tank Sensor T-3 has weak signal and low fertigation mix.",
  "Tomato Tunnel humidity trending above target for 2 hours.",
  "Drone Dock D-1 completed orchard scan with 3 pest-risk zones.",
];

export const weatherSummary = { icon: "☀️", label: "Field Weather", value: "29°C", note: "Clear skies · irrigation window from 18:00" };
