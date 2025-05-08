function useImage() {
  // Method to validate if a File is an image type
  const isValidImage = (file: File): boolean => {
    return file && file.type.startsWith('image/');
  };

  return {
    isValidImage,
  };
}

export default useImage;
