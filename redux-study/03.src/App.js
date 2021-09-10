import {Provider} from "react-redux";
import {store} from "./models/store";
import styles from './App.less';


function App() {
    return (
        <Provider store={store}>
            <div className={styles.App}>
            </div>
        </Provider>
    );
}

export default App;
