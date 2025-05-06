import React, { useState, useRef, useEffect, ReactNode, ReactElement, useMemo } from 'react';
import classNames from 'classnames';

export interface BaseTabsProps {
  children: ReactElement<BaseTabProps>[];
  className?: string;
  activeTabLabel?: string
}

interface BaseTabProps {
  label: string;
  children: ReactNode;
  activeTabLabel: string
}

const BaseTabs: React.FC<BaseTabsProps> = ({ children, className, activeTabLabel }) => {
  const [activeTab, setActiveTab] = useState<string>(children[0]?.props.label || "");
  const [backgroundStyle, setBackgroundStyle] = useState<{ width: number, transform: string }>({ width: 0, transform: 'translateX(0)' });
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleClick = (newActiveTab: string, index: number) => {
    setActiveTab(newActiveTab);
    updateBackground(index);
  };

  const updateBackground = (index: number) => {
    if (tabsRef.current) {
      const button = tabsRef.current.querySelectorAll('button')[index];

      if (button) {
        const width = button.offsetWidth;
        const offsetLeft = button.offsetLeft;
        setBackgroundStyle({ width, transform: `translateX(${offsetLeft}px)` });
      }
    }
  };

  useEffect(() => {
    updateBackground(0);
  }, []);

  useEffect(() => {
    if (activeTabLabel) {
      setActiveTab(activeTabLabel)
    }
  }, [activeTabLabel])

  const tabButtons = useMemo<JSX.Element[]>(() => {
    return React.Children.map(children, (child, index) => {
      const { label } = child.props as BaseTabProps;
      return (
        <button
          key={label}
          onClick={() => handleClick(label, index)}
          className={classNames({ 'base-tab-active': label === activeTab })}
        >
          {label}
        </button>
      );
    });
  }, [children, activeTab]);

  const tabContents = useMemo<JSX.Element[]>(() => {
    return React.Children.map(children, (child) => {
      const { label, children } = child.props as BaseTabProps;
      if (label !== activeTab) return null;
      return (
        <div key={label} className={classNames('base-tab-content', { 'base-tab-active': label === activeTab })}>
          {children}
        </div>
      );
    });
  }, [children, activeTab]);

  return (
    <div className={classNames('base-tabs', className)}>
      <div className={classNames('base-tab-buttons', `${className}-buttons`)} ref={tabsRef}>
        <div className={classNames('base-tab-background', `${className}-background`)} style={backgroundStyle}></div>
        {tabButtons}
      </div>
      <div className={classNames('base-tab-content-wrapper', `${className}-content-wrapper`)}>
        {tabContents}
      </div>
    </div>
  );
};

export default BaseTabs;
