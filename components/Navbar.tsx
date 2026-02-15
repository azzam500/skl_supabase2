import React from 'react';
import { GraduationCap } from 'lucide-react';
import { SCHOOL_NAME } from '../constants';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 leading-tight">
                Kelulusan
              </h1>
              <p className="text-xs text-gray-500 font-medium">
                {SCHOOL_NAME}
              </p>
            </div>
          </div>
          <div className="text-sm font-medium text-gray-500 hidden sm:block">
            Tahun Ajaran 2024/2025
          </div>
        </div>
      </div>
    </nav>
  );
};
