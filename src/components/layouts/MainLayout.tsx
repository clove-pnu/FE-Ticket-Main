import { Link, Outlet } from 'react-router-dom';
import styles from '../styles/MainLayout.module.css';
import UserStatusBarWrapper from '../../remotes/UserStatusBarWrapper';

export default function MainLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div>
            <Link className={styles.homeLink} to="/">Clove</Link>
          </div>
          {/* <div className={styles.searchBar}>
            <SearchBar />
          </div> */}
        </div>
        <UserStatusBarWrapper />
      </div>
      <Outlet />
    </div>
  );
}
