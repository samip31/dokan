import React from "react";

interface NotificationProps {
  message: string;
}
export default function Notification(props: NotificationProps) {
  return (
    <div className="fixed bottom-4 right-4">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4">
        <div className="flex items-center">
          <svg
            className="h-6 w-6 text-green-500 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-gray-800">{props.message}</p>
        </div>
      </div>
    </div>
  );
}
