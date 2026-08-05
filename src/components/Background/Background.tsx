import styles from './Background.module.scss';
import { background } from '@/content/site';
import { Education } from '@/components/Education/Education';
import { Languages } from '@/components/Languages/Languages';

export function Background() {
  return (
    <section id='background' className={styles.section}>
      <span className={styles.badge}>{background.badge}</span>
      
      <div className={styles.box}>
        <div className={styles.column}>
          <Languages />
        </div>

        <div className={styles.column}>
         <Education />
        </div>
      </div>
    </section>
  );
}
