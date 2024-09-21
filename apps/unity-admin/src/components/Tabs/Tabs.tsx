import clsx from 'clsx';
import React, { FC, ReactNode, createContext, useContext, useState } from 'react';

/* #region Types */

type TabsProps = {
  defaultView: string;
  children: ReactNode;
};

type TabsComponent = FC<TabsProps> & {
  Header: FC<HeaderProps>;
  Heading: FC<HeadingProps>;
  Content: FC<ContentProps>;
  View: FC<ViewProps>;
};

type HeaderProps = {
  children: ReactNode;
};

type HeadingProps = {
  view: string;
  children: ReactNode;
};

type ContentProps = {
  children: ReactNode;
};

type ViewProps = {
  view: string;
  children: ReactNode;
};

/* #endregion */

/* #region Context */

const TabsContext = createContext<{ activeView: string | null; setActiveView: (view: string) => void } | undefined>(
  undefined
);

const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
};

/* #endregion */

/* #region Components */

const Tabs: TabsComponent = ({ defaultView, children }) => {
  const [activeView, setActiveView] = useState<string | null>(defaultView);

  return (
    <TabsContext.Provider value={{ activeView, setActiveView }}>
      <div data-component="Tabs">{children}</div>
    </TabsContext.Provider>
  );
};

const Header: FC<HeaderProps> = ({ children }) => (
  <div className="flex justify-center">
    <div className="flex grow-0 gap-4 border-y-2 border-solid border-gray-500 px-8">{children}</div>
  </div>
);

const Heading: FC<HeadingProps> = ({ view, children }) => {
  const { activeView, setActiveView } = useTabs();
  const isActive = activeView === view;

  return (
    <button
      onClick={() => setActiveView(view)}
      className={clsx('transition-color p-2', isActive ? 'bg-green-500 text-white' : 'hover:text-green-500')}
    >
      {children}
    </button>
  );
};

const Content: FC<ContentProps> = ({ children }) => <div className="tabs-content">{children}</div>;

const View: FC<ViewProps> = ({ view, children }) => {
  const { activeView } = useTabs();
  return activeView === view ? <div>{children}</div> : null;
};

/* #endregion */

// Assign subcomponents to Tabs
Tabs.Header = Header;
Tabs.Heading = Heading;
Tabs.Content = Content;
Tabs.View = View;

export default Tabs;
