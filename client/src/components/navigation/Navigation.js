import BackButton from './BackButton';
import RefreshButton from './RefreshButton';
import Settings from './settings/Settings';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light py-1 ">
        <div className="container-fluid">
            <BackButton />
            <div className="w-100 d-flex justify-content-end">
                <RefreshButton />
                <Settings />
            </div>         
        </div>
      </nav>
    );
}
export default Navigation;