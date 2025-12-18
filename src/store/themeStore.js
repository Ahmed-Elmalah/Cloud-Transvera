import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'light', // القيمة الافتراضية
      
      // دالة التغيير: لو لايت خليه دارك والعكس
      toggleTheme: () => set((state) => ({ 
        theme: state.theme === 'light' ? 'dark' : 'light' 
      })),
      
      // دالة عشان لو عايز تخليه قيمة محددة (ممكن نحتاجها قدام)
      setTheme: (newTheme) => set({ theme: newTheme }),
    }),
    {
      name: 'theme-storage', // ده الاسم اللي هيتحفظ بيه في الـ LocalStorage
    }
  )
);

export default useThemeStore;