import React from "react";
import { useSettings } from "../context/SettingsContext";
import { PageHeader } from "../components/Layout/PageHeader";
import { Toggle } from "../components/ui/Toggle";
import { DefaultLocation } from "../components/common/defaultLocation";

export const Settings = () => {
  const { settings, updateSettings, saveSettings, saving, toast } =
    useSettings();

  return (
    <section className='h-full'>
      <PageHeader title='Settings' subtitle='Manage your weather preferences' />

      <main className='p-6 w-220 mx-auto'>
        {toast && (
          <div
            className={`toast fixed bottom-6 right-6 z-50 rounded-lg px-5 py-3 text-sm font-semibold shadow-lg ${
              toast.type === "success"
                ? "bg-green-500/90 text-green-900"
                : toast.type === "error"
                  ? "bg-red-500/90 text-red-900"
                  : "bg-gray-600 text-white"
            }`}>
            {toast.message}
          </div>
        )}

        <DefaultLocation />

        <div className='rounded-xl border border-border-muted bg-primary px-8 py-6'>
          <div className='mb-4'>
            <h3 className='text-xl font-semibold'>General Settings</h3>
            <p className='text-sm text-accent-secondary mt-1 font-semibold'>
              Customize how weather information is displayed.
            </p>
          </div>
          <div className='bg-secondary text-main rounded-lg px-6'>
            <div className='flex items-center justify-between border-b border-border-muted py-4'>
              <div>
                <h4 className='font-medium'>Temperature Unit</h4>
                <p className='text-sm text-text-light'>
                  Choose how temperature values are displayed.
                </p>
              </div>
              <select
                value={settings.temperatureUnit}
                onChange={(e) =>
                  updateSettings("temperatureUnit", e.target.value)
                }
                className='rounded-lg border border-border-muted text-text-muted bg-main px-3 py-2 outline-none'>
                <option value='celsius'>Celsius (°C)</option>
                <option value='fahrenheit'>Fahrenheit (°F)</option>
              </select>
            </div>
            <div className='flex items-center justify-between py-4'>
              <div>
                <h4 className='font-medium'>Wind Speed Unit</h4>
                <p className='text-sm text-text-light'>
                  Choose how wind speed is displayed.
                </p>
              </div>
              <select
                value={settings.windSpeedUnit}
                onChange={(e) =>
                  updateSettings("windSpeedUnit", e.target.value)
                }
                className='rounded-lg border border-border-muted text-text-muted bg-main px-3 py-2 outline-none'>
                <option value='kmh'>km/h</option>
                <option value='mph'>mph</option>
              </select>
            </div>
          </div>
        </div>

        <div className='rounded-xl border border-border-muted bg-primary px-8 py-6 mt-6'>
          <div className='mb-4'>
            <h3 className='text-xl font-semibold'>Map Settings</h3>
            <p className='text-sm text-accent-secondary mt-1 font-semibold'>
              Customize your default weather map view.
            </p>
          </div>
          <div className='bg-secondary text-main rounded-lg px-6'>
            <div className='flex items-center justify-between py-4'>
              <div>
                <h4 className='font-medium'>Default Map Layer</h4>
                <p className='text-sm text-text-light'>
                  Choose the weather layer shown when the map opens.
                </p>
              </div>

              <select
                value={settings.defaultMapLayer}
                onChange={(e) =>
                  updateSettings("defaultMapLayer", e.target.value)
                }
                className='rounded-lg border border-border-muted text-text-muted bg-main px-3 py-2 outline-none'>
                <option value='none'>Base Map</option>
                <option value='temperature'>Temperature</option>
                <option value='precipitation'>Precipitation</option>
                <option value='wind'>Wind</option>
                <option value='clouds'>Clouds</option>
              </select>
            </div>
          </div>
        </div>

        <div className='rounded-xl border border-border-muted bg-primary px-8 py-6 mt-6'>
          <div className='mb-4'>
            <h3 className='text-xl font-semibold'>Appearance Settings</h3>
            <p className='text-sm text-accent-secondary mt-1 font-semibold'>
              Customize the visual appearance of the dashboard.
            </p>
          </div>
          <div className='bg-secondary text-main rounded-lg px-6'>
            <div className='flex items-center justify-between py-4'>
              <div>
                <h4 className='font-medium'>Theme</h4>
                <p className='text-sm text-text-light'>
                  Choose between light and dark appearance.
                </p>
              </div>
              <select
                value={settings.theme}
                onChange={(e) => updateSettings("theme", e.target.value)}
                className='rounded-lg border border-border-muted text-text-muted bg-main px-3 py-2 outline-none'>
                <option value='light'>Light</option>
                <option value='dark'>Dark</option>
              </select>
            </div>
          </div>
        </div>

        <div className='rounded-xl border border-border-muted bg-primary px-8 py-6 mt-6'>
          <div className='mb-4'>
            <h3 className='text-xl font-semibold'>Notification Settings</h3>
            <p className='text-sm text-accent-secondary mt-1 font-semibold'>
              Manage weather notifications and automatic updates.
            </p>
          </div>
          <div className='bg-secondary text-main rounded-lg px-6'>
            <div className='flex items-center justify-between border-b border-border-muted py-4'>
              <div>
                <h4 className='font-medium'>Weather Alerts</h4>
                <p className='text-sm text-text-light'>
                  Receive notifications for important weather conditions.
                </p>
              </div>
              <Toggle
                checked={settings.weatherAlerts}
                onChange={(value) => updateSettings("weatherAlerts", value)}
              />
            </div>
            <div className='flex items-center justify-between border-b border-border-muted py-4'>
              <div>
                <h4 className='font-medium'>Daily Summary</h4>
                <p className='text-sm text-text-light'>
                  Show a daily overview of today's weather.
                </p>
              </div>
              <Toggle
                checked={settings.dailySummary}
                onChange={(value) => updateSettings("dailySummary", value)}
              />
            </div>
            <div className='flex items-center justify-between py-4'>
              <div>
                <h4 className='font-medium'>Auto Refresh</h4>
                <p className='text-sm text-text-light'>
                  Automatically update weather information periodically. (About
                  10 Min)
                </p>
              </div>
              <Toggle
                checked={settings.autoRefresh}
                onChange={(value) => updateSettings("autoRefresh", value)}
              />
            </div>
          </div>
        </div>

        <button
          type='button'
          onClick={saveSettings}
          disabled={saving}
          className='rounded-lg bg-accent-secondary mt-4 px-5 py-2.5 text-sm font-bold text-main transition hover:bg-accent hover:text-secondary disabled:cursor-not-allowed disabled:opacity-60'>
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </main>
    </section>
  );
};
