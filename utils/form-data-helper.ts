export type FormDataConvertible = Record<string, string | number | string[] | number[] | File>;

export const createFormData = (data: FormDataConvertible): FormData => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    const value = data[key];

    if (Array.isArray(value)) {
      // Handle arrays of strings or numbers
      value.forEach((item) => {
        formData.append(`${key}[]`, item.toString());
      });
    } else if (value instanceof File) {
      // Handle File instances
      formData.append(key, value);
    } else if (typeof value === "string" || typeof value === "number") {
      // Handle strings and numbers
      formData.append(key, value.toString());
    }
  });

  return formData;
};