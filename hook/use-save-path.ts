"use client";
const useSavePath = () => {
  const savePath = (currentPath: string): void => {
    localStorage.setItem("currentPath", currentPath);
  };

  const getSavedPath = (): string | null => {
    return localStorage.getItem("currentPath");
  };

  const clearSavedPath = (): void => {
    localStorage.removeItem("currentPath");
  };

  return {
    savePath,
    getSavedPath,
    clearSavedPath,
  };
};

export default useSavePath;
