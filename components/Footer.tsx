import React from 'react';
import { SCHOOL_NAME, SCHOOL_ADDRESS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto py-8">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-gray-900 font-semibold mb-2">{SCHOOL_NAME}</p>
        <p className="text-gray-500 text-sm mb-4">{SCHOOL_ADDRESS}</p>
        <div className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Hak Cipta Dilindungi Undang-Undang.
        </div>
      </div>
    </footer>
  );
};
