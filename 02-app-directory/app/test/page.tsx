import React from "react";

export default async function Test({searchParams}:any) {
  console.log(searchParams);
  await delay(3000);
  return (<div>Test Page</div>);
}

async function delay(ms: number) {
  //console.log("deneme");
  return new Promise((resolve) => setTimeout(resolve, ms));
}