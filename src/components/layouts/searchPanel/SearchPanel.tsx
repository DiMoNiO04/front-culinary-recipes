import React from 'react';
import { Button, EButtonClass, EButtonSize, EButtonType } from '@/components/ui';
import { CloseIcon } from '@/components/icons';
import { searchPanelCards } from '@/data';
import { SearchPanelCard } from '@/components/cards';
import styles from './SearchPanel.module.scss';

interface ISearchPanel {
  onClose: () => void;
  isOpen: boolean;
}

const SearchPanel: React.FC<ISearchPanel> = ({ onClose, isOpen }) => {
  return (
    <div className={`${styles.panel} ${isOpen && styles.open}`}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.block}>
            <input type="text" placeholder="Search..." />
            <button type={EButtonType.BUTTON} onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
          {searchPanelCards.length > 0 ? (
            <div className={styles.cards}>
              {searchPanelCards.map((card) => (
                <SearchPanelCard {...card} key={card.id} />
              ))}
            </div>
          ) : (
            <div className={styles.nothing}>Nothing was found for your request</div>
          )}
          {searchPanelCards.length > 0 && (
            <div className={styles.btn}>
              <Button
                text="See all 343 results"
                nameClass={EButtonClass.DEF}
                size={EButtonSize.SM}
                typeBtn={EButtonType.BUTTON}
                isLink={true}
                linkUrl="#"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
