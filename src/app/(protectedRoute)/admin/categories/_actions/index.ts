'use server'
// import { revalidateTag } from "next/cache";
import { getValidToken } from "@/lib/getValidToken";
import { FieldValues } from "react-hook-form";

export const getAllCategories = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/categories`, {
      // next: { tags: ["CATEGORIES"] },
    });

    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};

export const createCategories = async (categoryData: FieldValues) => {
  try {
    const token = await getValidToken();
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/categories`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
    });
    // revalidateTag("CATEGORIES");

    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};

export const deleteCategories = async (id: string) => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/categories/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );
    // revalidateTag("CATEGORIES");
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};
