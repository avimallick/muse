import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/theme-provider';
import HomePage from '@/pages/HomePage';
import DashboardPage from '@/pages/DashboardPage';
import ProjectsPage from '@/pages/ProjectsPage';
import ProjectPage from '@/pages/ProjectPage';
import CampaignPage from '@/pages/CampaignPage';
import VideoStudioPage from '@/pages/VideoStudioPage';
import AnalyticsPage from '@/pages/AnalyticsPage';
import SettingsPage from '@/pages/SettingsPage';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="muse-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
          <Route path="/project/:projectId/campaign/:campaignId" element={<CampaignPage />} />
          <Route path="/studio" element={<VideoStudioPage />} />
          <Route path="/calendar" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/automation" element={<DashboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          {/* Redirect any unknown routes to dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
        <Toaster position="top-right" />
      </Router>
    </ThemeProvider>
  );
}

export default App;