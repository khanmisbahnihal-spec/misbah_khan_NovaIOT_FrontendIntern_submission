import { useState, useMemo } from "react";

const devicesData = Array.from({ length: 1000 }, (_, i) => ({
  id: `DEV${String(i + 1).padStart(4, "0")}`,
  name: `Sensor ${i + 1}`,
  zone: ["Zone A", "Zone B", "Zone C"][Math.floor(Math.random() * 3)],
  type: ["Temperature", "Pressure", "Humidity"][Math.floor(Math.random() * 3)],
  status: ["Online", "Warning", "Critical", "Offline"][
    Math.floor(Math.random() * 4)
  ],
}));

const NAV_ITEMS = [
  {
    label: "Overview",
    active: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Analytics",
    active: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 5-6" />
      </svg>
    ),
  },
  {
    label: "Alerts",
    active: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    label: "Settings",
    active: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
];

function pct(value, total) {
  return total ? ((value / total) * 100).toFixed(1) : "0.0";
}

function App() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [zoneFilter, setZoneFilter] = useState("All");

  const devices = useMemo(() => devicesData, []);

  const stats = useMemo(
    () => ({
      total: devices.length,
      online: devices.filter((d) => d.status === "Online").length,
      warning: devices.filter((d) => d.status === "Warning").length,
      critical: devices.filter((d) => d.status === "Critical").length,
      offline: devices.filter((d) => d.status === "Offline").length,
    }),
    [devices]
  );

  const filteredDevices = useMemo(() => {
    return devices.filter((device) => {
      const matchesSearch =
        device.name.toLowerCase().includes(search.toLowerCase()) ||
        device.id.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || device.status === statusFilter;

      const matchesZone =
        zoneFilter === "All" || device.zone === zoneFilter;

      return matchesSearch && matchesStatus && matchesZone;
    });
  }, [devices, search, statusFilter, zoneFilter]);

  const displayedDevices = filteredDevices.slice(0, 100);
  const healthScore = pct(stats.online, stats.total);
  const activeAlerts = stats.warning + stats.critical;

  const statCards = [
    {
      key: "total",
      label: "Total Devices",
      value: stats.total,
      meta: "Registered in fleet",
      tone: "neutral",
    },
    {
      key: "online",
      label: "Online",
      value: stats.online,
      meta: `${pct(stats.online, stats.total)}% operational`,
      tone: "success",
    },
    {
      key: "warning",
      label: "Warnings",
      value: stats.warning,
      meta: "Requires attention",
      tone: "warning",
    },
    {
      key: "critical",
      label: "Critical",
      value: stats.critical,
      meta: "Immediate action",
      tone: "danger",
    },
  ];

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <p className="brand-title">FleetHealth</p>
            <p className="brand-sub">Enterprise Console</p>
          </div>
        </div>

        <p className="nav-section">Main Menu</p>
        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`nav-item ${item.active ? "nav-item--active" : ""}`}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-card">
          <p className="sidebar-card-label">Fleet Uptime</p>
          <p className="sidebar-card-value">{healthScore}%</p>
          <div className="sidebar-progress">
            <span style={{ width: `${healthScore}%` }} />
          </div>
          <p className="sidebar-card-note">
            {activeAlerts} active alert{activeAlerts !== 1 ? "s" : ""}
          </p>
        </div>
      </aside>

      <div className="content-area">
        <header className="app-header">
          <div className="breadcrumb">
            <span>Dashboard</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Fleet Overview</span>
          </div>

          <div className="header-actions">
            <span className="status-chip">
              <span className="status-chip-dot" />
              Systems Operational
            </span>
            <button type="button" className="icon-btn" aria-label="Notifications">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              </svg>
              {activeAlerts > 0 && <span className="notif-badge">{activeAlerts}</span>}
            </button>
            <div className="user-profile">
              <div className="user-avatar">MK</div>
              <div className="user-info">
                <p className="user-name">Misbah Khan</p>
                <p className="user-role">Operations Admin</p>
              </div>
            </div>
          </div>
        </header>

        <main className="main-content">
          <section className="page-intro">
            <div>
              <h1>Fleet Overview</h1>
              <p className="page-desc">
                Real-time monitoring across {stats.total} connected devices
              </p>
            </div>
            <p className="last-updated">
              Last updated:{" "}
              {new Date().toLocaleString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </section>

          <section className="stats-grid">
            {statCards.map((card) => (
              <article key={card.key} className={`stat-card stat-card--${card.tone}`}>
                <p className="stat-label">{card.label}</p>
                <p className="stat-value">{card.value.toLocaleString()}</p>
                <p className="stat-meta">{card.meta}</p>
              </article>
            ))}
          </section>

          <section className="insight-panel">
            <div className="insight-header">
              <h2>Status Distribution</h2>
              <p>Fleet health breakdown by device status</p>
            </div>
            <div className="distribution-bar">
              <span
                className="bar-segment bar-online"
                style={{ width: `${pct(stats.online, stats.total)}%` }}
                title={`Online: ${stats.online}`}
              />
              <span
                className="bar-segment bar-warning"
                style={{ width: `${pct(stats.warning, stats.total)}%` }}
                title={`Warning: ${stats.warning}`}
              />
              <span
                className="bar-segment bar-critical"
                style={{ width: `${pct(stats.critical, stats.total)}%` }}
                title={`Critical: ${stats.critical}`}
              />
              <span
                className="bar-segment bar-offline"
                style={{ width: `${pct(stats.offline, stats.total)}%` }}
                title={`Offline: ${stats.offline}`}
              />
            </div>
            <div className="legend">
              <span><i className="dot dot-online" />Online ({stats.online})</span>
              <span><i className="dot dot-warning" />Warning ({stats.warning})</span>
              <span><i className="dot dot-critical" />Critical ({stats.critical})</span>
              <span><i className="dot dot-offline" />Offline ({stats.offline})</span>
            </div>
          </section>

          <section className="panel">
            <div className="panel-toolbar">
              <div>
                <h2>Device Registry</h2>
                <p className="panel-subtitle">
                  {filteredDevices.length} devices found · displaying first{" "}
                  {displayedDevices.length}
                </p>
              </div>
              <button type="button" className="btn-secondary">
                Export CSV
              </button>
            </div>

            <div className="filters">
              <label className="field">
                <span className="field-label">Search</span>
                <input
                  placeholder="Device name or ID"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>

              <label className="field">
                <span className="field-label">Status</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="All">All Status</option>
                  <option value="Online">Online</option>
                  <option value="Warning">Warning</option>
                  <option value="Critical">Critical</option>
                  <option value="Offline">Offline</option>
                </select>
              </label>

              <label className="field">
                <span className="field-label">Zone</span>
                <select
                  value={zoneFilter}
                  onChange={(e) => setZoneFilter(e.target.value)}
                >
                  <option value="All">All Zones</option>
                  <option value="Zone A">Zone A</option>
                  <option value="Zone B">Zone B</option>
                  <option value="Zone C">Zone C</option>
                </select>
              </label>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Device ID</th>
                    <th>Name</th>
                    <th>Zone</th>
                    <th>Type</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedDevices.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="empty-state">
                        No devices match the current filters.
                      </td>
                    </tr>
                  ) : (
                    displayedDevices.map((device, index) => (
                      <tr key={device.id}>
                        <td className="row-num">{index + 1}</td>
                        <td>
                          <code className="device-id">{device.id}</code>
                        </td>
                        <td className="device-name">{device.name}</td>
                        <td>{device.zone}</td>
                        <td>{device.type}</td>
                        <td>
                          <span
                            className={`status-badge status-${device.status.toLowerCase()}`}
                          >
                            {device.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="table-footer">
              <span>
                Page 1 of {Math.max(1, Math.ceil(filteredDevices.length / 100))}
              </span>
              <span>{filteredDevices.length} total records</span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
