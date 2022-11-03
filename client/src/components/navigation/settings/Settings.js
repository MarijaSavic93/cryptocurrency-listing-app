import SettingsButton from './SettingsButton';
import SettingsDropdown from './SettingsDropdown';

const Settings = () => {
    return (
        <div className="dropdown me-5">
            <SettingsButton />
            <SettingsDropdown />
        </div>  
    );
}
export default Settings;