import styles from './styles.css';
import { add, subtract, createObject } from './module';

if (module.hot) {
  module.hot.accept();
}

const resulta = add(2, 3);
const resultb = subtract(2, 1);
console.log(resulta, resultb, createObject({ test: 1 }));
console.log(styles.localClass);
console.log(styles.globalClass);
