import React from 'react';
import { Palette, Download, Share2 } from 'lucide-react';

interface CustomizationPanelProps {
  onDownload: () => void;
  onShare: () => void;
}

export function CustomizationPanel({ onDownload, onShare }: CustomizationPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
      <div className="flex items-center space-x-2 mb-4">
        <Palette className="text-purple-600" />
        <h2 className="text-2xl font-semibold text-gray-800">Customize</h2>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between gap-4">
          <button
            onClick={onDownload}
            className="flex-1 flex items-center justify-center space-x-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
          <button
            onClick={onShare}
            className="flex-1 flex items-center justify-center space-x-2 bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );
}