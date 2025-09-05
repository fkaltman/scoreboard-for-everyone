import React from 'react';

interface TeamSettingsProps {
  teamName: string;
  teamColor: string;
  backgroundColor: string;
  onTeamNameChange: (name: string) => void;
  onTeamColorChange: (color: string) => void;
  onBackgroundColorChange: (color: string) => void;
  onClose: () => void;
}

export const TeamSettings: React.FC<TeamSettingsProps> = ({
  teamName,
  teamColor,
  backgroundColor,
  onTeamNameChange,
  onTeamColorChange,
  onBackgroundColorChange,
  onClose,
}) => {
  return (
    <div className="settings-overlay">
      <div className="settings-modal">
        <h2>Team Settings</h2>
        
        <div className="setting-group">
          <label htmlFor="team-name">Home Team Name:</label>
          <input
            id="team-name"
            type="text"
            value={teamName}
            onChange={(e) => onTeamNameChange(e.target.value)}
            placeholder="Enter team name"
            maxLength={20}
          />
        </div>

        <div className="setting-group">
          <label htmlFor="team-color">Team Color:</label>
          <input
            id="team-color"
            type="color"
            value={teamColor}
            onChange={(e) => onTeamColorChange(e.target.value)}
          />
        </div>

        <div className="setting-group">
          <label htmlFor="bg-color">Background Color:</label>
          <input
            id="bg-color"
            type="color"
            value={backgroundColor}
            onChange={(e) => onBackgroundColorChange(e.target.value)}
          />
        </div>

        <div className="settings-actions">
          <button onClick={onClose} className="close-button">
            Save & Close
          </button>
        </div>
      </div>
    </div>
  );
};