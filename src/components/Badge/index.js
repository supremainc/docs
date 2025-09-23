import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function Badge({ children, className, only = false }) {
    return (
        <span className={clsx(`badge ${only ? 'only' : ''}`, className)}>{children}</span>
    );
}

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    only: PropTypes.bool
};