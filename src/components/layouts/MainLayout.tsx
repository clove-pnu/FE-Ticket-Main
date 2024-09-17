import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/MainLayout.module.css';
import UserStatusBarWrapper from '../../remotes/UserStatusBarWrapper';

export default function MainLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div>
            <Link
              className={styles.homeLink}
              to={process.env.NODE_ENV === 'production'
                ? 'http://34.47.117.26/page/main'
                : 'http://localhost:3000/page/main'}
            >
              Clove
            </Link>
          </div>
        </div>
        <UserStatusBarWrapper />
      </div>
      <Outlet />
    </div>
  );
}
