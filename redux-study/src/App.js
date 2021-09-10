import {Provider} from "react-redux";
import {store} from "./models/store";
import ComA from "./pages/ComA";
import ComB from "./pages/ComB";
import styles from './App.less';


function App() {
    return (
        <Provider store={store}>
            <div className={styles.App}>
                <ComA/>
                <ComB/>
            </div>
        </Provider>
    );
}

export default App;
