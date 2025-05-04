"use server";

export const testAction = async () => {
  try {
    const response = await fetch("https://app.punto.ir/api/v1/jobs");
    const list = await response.json();
    console.log(list);

    return { list };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "خطا در دریافت اطلاعات" };
  }
};
