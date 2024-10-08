import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const createBaseQuery = () => {
  return fetchBaseQuery({
    baseUrl: "http://54.190.192.105:9185/angel/",
    timeout: 10000,
    prepareHeaders: async (headers) => {
      try {
        headers.set("Content-Type", "application/json");
        headers.set("accept", "*/*");
        return headers;
      } catch (e) {
        if (__DEV__) {
          console.log("Error getting auth headers", e);
        }
        return Promise.reject("Error");
      }
    },
  });
};

export { createBaseQuery };
