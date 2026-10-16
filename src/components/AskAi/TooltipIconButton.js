import React, {forwardRef} from 'react';
import clsx from 'clsx';
import {Slot, Tooltip} from 'radix-ui';
import styles from './thread.module.css';

// assistant-ui 기본 디자인의 tooltip-icon-button (shadcn Button ghost/icon + Tooltip)
export const TooltipIconButton = forwardRef(function TooltipIconButton(
  {children, tooltip, side = 'bottom', className, ...rest},
  ref,
) {
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button type="button" {...rest} ref={ref} className={clsx(styles.iconButton, className)}>
            <Slot.Slottable>{children}</Slot.Slottable>
            <span className={styles.srOnly}>{tooltip}</span>
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side={side} sideOffset={4} className={clsx(styles.tokens, styles.tooltip)}>
            {tooltip}
            <Tooltip.Arrow className={styles.tooltipArrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
});
