import { useAppStore } from '@/shared/stores/useAppStore';
import { useEffect } from 'react';

export function Toast() {
  const toast = useAppStore((state) => state.toastData);
  const clearToast = useAppStore((state) => state.clearToast);
  
  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      clearToast();
    }, 5000);

    return () => clearTimeout(timer);
  }, [toast, clearToast]);

  if (!toast) return null;

  const bgColor = toast.type === 'success' 
    ? 'bg-green-200 text-green-900' 
    : 'bg-red-200 text-red-900';

  return (
    <div 
        className={`fixed top-8 right-4 ${bgColor} px-4 py-2 rounded shadow-lg z-50 font-semibold border border-opacity-30`}
    >
      {toast.message}
    </div>
  );
}