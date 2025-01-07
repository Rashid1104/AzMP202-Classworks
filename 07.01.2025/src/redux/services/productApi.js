import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categories = createApi({
    reducerPath: "categories",
    baseQuery: fetchBaseQuery({ baseUrl: "https://northwind.vercel.app/api/" }),
    endpoints: (builder) =>({
        getAllCategories: builder.query({
            query: () => `categories`,
            providesTags: ["Categories"],
        }),
        getCategoryByiD: builder.query({
            query: (id) => `categories/${id}`,
            providesTags: ["Categories"],
        }),
        postNewCategory: builder.mutation({
            query: (payload) => ({
              url: `categories`,
              method: "POST",
              body: payload,
            }),
            invalidatesTags: ["Categories"],
          }),
        DeleteCategoryByiD: builder.mutation({
            query: (id) =>({
                 url: `categories/${id}`,
            method: "DELETE",
            }),
           invalidatesTags: ["categories"],
        })
    })
})

export const { useGetAllCategoriesQuery, useGetCategoryByiDQuery, useDeleteCategoryByiDMutation, usePostNewCategoryMutation } = categories