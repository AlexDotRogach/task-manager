import {  useState } from 'react';
import css from './Filter.module.css';
import { VscFilter } from 'react-icons/vsc';
import FilterWindow from './FilterWindow';
import { CSSTransition } from 'react-transition-group';

const Filter = ({ showFilter }) => {
  const [stateFilter, setStateFilter] = useState(false);
  const toggleFilterWindow = () => {
    setStateFilter(!stateFilter);
  };

  return (
    <div className={css.filter}>
      <div className={css.filterIcon} onClick={toggleFilterWindow}>
        <VscFilter></VscFilter>
      </div>
      <span className={css.filterText}>Отображение</span>

      <CSSTransition
        in={stateFilter}
        timeout={500}
        classNames={{
          enterActive: css.filterShow,
          enterDone: css.filterDone,
          exitActive: css.filterHide,
        }}
        unmountOnExit
        mountOnEnter
      >
        <FilterWindow></FilterWindow>
      </CSSTransition>
    </div>
  );
};

export default Filter;
