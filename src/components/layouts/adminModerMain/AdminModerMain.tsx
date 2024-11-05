import React, { useState } from 'react';
import { useGetRole } from '@/api/hooks';
import styles from './AdminModerMain.module.scss';

interface TabContent {
  [key: string]: React.ReactNode;
}

interface IAdminModerMain {
  title: string;
  role: string;
  tabContents: TabContent;
  tabButtons: { label: string; value: string }[];
}

const AdminModerMain: React.FC<IAdminModerMain> = ({ title, role, tabContents, tabButtons }) => {
  const { data: roleData } = useGetRole(role);
  const [activeTab, setActiveTab] = useState(tabButtons[0].value);

  const renderContent = () => {
    return tabContents[activeTab] || null;
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.titles}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{roleData?.description}</p>
        </div>

        <div className={styles.content}>
          <div className={styles.tabContainer}>
            {tabButtons.map((tab) => (
              <button
                key={tab.value}
                className={`${styles.tabButton} ${activeTab === tab.value ? styles.active : ''}`}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className={styles.tabContent}>{renderContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default AdminModerMain;
