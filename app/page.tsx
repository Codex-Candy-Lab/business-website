import { alerts, farmStats, fields, hardwareDevices, sensorTimeline, tasks, weatherSummary } from "@/lib/farm-data";

export default function Home() {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar" aria-label="Farm management navigation">
        <div className="brand"><span>AP</span><strong>AgriPilot</strong></div>
        <nav>
          {["Dashboard", "Fields", "Crops", "Hardware", "Tasks", "Inventory", "Reports"].map((item) => (
            <a href={`#${item.toLowerCase()}`} className={item === "Dashboard" ? "active" : ""} key={item}>{item}</a>
          ))}
        </nav>
        <div className="sync-card"><span aria-hidden="true">📶</span><strong>Live Sync</strong><p>Dummy sensor feed refreshing every 5 minutes.</p></div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div><p className="eyebrow">Farm operations center</p><h1>Smart farm management dashboard</h1></div>
          <button className="notify"><span aria-hidden="true">🔔</span> 3 alerts</button>
        </header>

        <section className="hero-grid">
          <article className="hero-panel">
            <p className="eyebrow">Today&apos;s command view</p>
            <h2>Monitor crops, tasks, irrigation, and hardware from one place.</h2>
            <p>Built in Next.js with dummy IoT hardware data for soil sensors, valves, weather stations, drone docks, and tank monitors.</p>
            <div className="hero-actions"><a href="#hardware">View hardware</a><a href="#tasks">Plan work</a></div>
          </article>
          <article className="weather-card"><span className="panel-icon" aria-hidden="true">{weatherSummary.icon}</span><span>{weatherSummary.label}</span><strong>{weatherSummary.value}</strong><p>{weatherSummary.note}</p></article>
        </section>

        <section className="stats-grid" aria-label="Farm stats">
          {farmStats.map((stat) => <article className="stat-card" key={stat.label}><span className="panel-icon" aria-hidden="true">{stat.icon}</span><span>{stat.label}</span><strong>{stat.value}</strong><p>{stat.change}</p></article>)}
        </section>

        <section className="dashboard-grid">
          <article className="panel large" id="hardware">
            <div className="panel-heading"><div><p className="eyebrow">Hardware telemetry</p><h2>Dummy connected device data</h2></div><span className="panel-icon" aria-hidden="true">🧠</span></div>
            <div className="device-list">
              {hardwareDevices.map((device) => (
                <div className="device-row" key={device.name}>
                  <div><strong>{device.name}</strong><span>{device.field} · {device.type}</span></div>
                  <div className="reading">{device.reading}</div>
                  <div className="battery"><span style={{ width: `${device.battery}%` }} /></div>
                  <span className={`status ${device.status.toLowerCase()}`}>{device.status}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel" id="alerts"><p className="eyebrow">Alerts</p><h2>Needs attention</h2>{alerts.map((alert) => <p className="alert" key={alert}>{alert}</p>)}</article>

          <article className="panel large" id="fields">
            <div className="panel-heading"><div><p className="eyebrow">Fields & crops</p><h2>Production blocks</h2></div><span className="panel-icon" aria-hidden="true">⛅</span></div>
            <div className="field-grid">
              {fields.map((field) => <div className="field-card" key={field.name}><strong>{field.name}</strong><span>{field.crop} · {field.area}</span><div className="progress"><span style={{ width: `${field.moisture}%` }} /></div><p>{field.stage} · {field.nextTask}</p></div>)}
            </div>
          </article>

          <article className="panel" id="tasks"><p className="eyebrow">Work queue</p><h2>Priority tasks</h2>{tasks.map((task) => <div className="task" key={task.title}><span aria-hidden="true">{task.icon}</span><div><strong>{task.title}</strong><span>{task.due} · {task.assignee} · {task.priority}</span></div><span aria-hidden="true">›</span></div>)}</article>

          <article className="panel large" id="reports"><div className="panel-heading"><div><p className="eyebrow">Sensor trend</p><h2>Temperature vs. moisture</h2></div><span className="panel-icon" aria-hidden="true">📈</span></div><div className="chart">{sensorTimeline.map((point) => <div className="bar-group" key={point.time}><span className="temp" style={{ height: `${point.temp * 4}px` }} /><span className="moisture" style={{ height: `${point.moisture * 2}px` }} /><small>{point.time}</small></div>)}</div></article>

          <article className="panel"><p className="eyebrow">Schedule</p><h2>Upcoming</h2><div className="schedule"><span aria-hidden="true">📅</span><p>Harvest readiness review on July 5 with field managers.</p></div><div className="schedule"><span aria-hidden="true">🛡️</span><p>Equipment safety audit for pumps, valves, and drone dock.</p></div></article>
        </section>
      </section>
    </main>
  );
}
