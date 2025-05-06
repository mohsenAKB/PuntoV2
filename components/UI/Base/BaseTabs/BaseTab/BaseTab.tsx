import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface BaseTabProps {
  label: string;
  children: ReactNode;
  className?: string;
}

const BaseTab: React.FC<BaseTabProps> = ({ label, className }) => {
  return (
    <div className={classNames('base-tab-content', className)}>
      {label}
    </div>
  );
};

export default BaseTab;
