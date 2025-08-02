import { createContext, useState } from "react";
import sampleImages from "../mockData/SampleData";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sampleImages.length);
  };

  const goPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + sampleImages.length) % sampleImages.length
    );
  };

  return (
    <DataContext.Provider
      value={{
        images: sampleImages,
        currentIndex,
        setCurrentIndex,
        goNext,
        goPrev,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
