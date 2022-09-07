import PropTypes from 'prop-types';
import style from '../StatisticItem/StatisticItem.module.css';

export default function StatItem({ label, percentage }) {
  return (
    <>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
