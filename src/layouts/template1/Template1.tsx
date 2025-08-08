import React from 'react'
import AppSidebar from './components/AppSidebar'
import AppHeader from './components/AppHeader'
import { useSidebar } from '../../contexts/SidebarContext';
import clsx from 'clsx';

function Template1({ children }: React.PropsWithChildren) {
   const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className='min-h-screen xl:flex'>
      <AppSidebar />

      <div className={clsx(
        'flex-1 transition-all duration-300 ease-in-out',
        isExpanded || isHovered ? 'lg:ml-[290px]' : 'lg:ml-[90px]',
        isMobileOpen && "ml-0" 
      )}>
        <AppHeader />

        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Template1