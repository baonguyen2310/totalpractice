import * as bootstrapGrid from '../src/assets/css/bootstraps/bootstrap-grid.min.css';
import * as bootstrapReboot from '../src/assets/css/bootstraps/bootstrap-reboot.min.css';
import HeaderFacebook from './components/headerFacebook';
import Main from './components/main';


const App = () => {
    return (
        <div className="container container-fixed">
            <HeaderFacebook />
            <Main />
            <footer className="footer">

            </footer>
        </div>
    )
}

export default App;