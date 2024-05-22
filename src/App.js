
import styles from "./App.module.css"
import Navbar from './components/navbar/Navbar'
import { Balance } from "./components/balance/Balance"


function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.expenseContainer} >
        <Balance />
      </div>
    </div>
  );
}

export default App;
