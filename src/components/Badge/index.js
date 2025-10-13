import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import PropTypes from 'prop-types';

export default function Badge({ children, className, only = false }) {
    if (only) {
        return (
            <span className={clsx('badge only', className)}>{children}</span>
        );
    } else {
        return (
            <span className='badge'>
                {translate({ 
                    id: "theme.revision.badge",
                })}:&nbsp;
                {children}
            </span>
        );
    }
}

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    only: PropTypes.bool
};