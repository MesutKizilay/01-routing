import { notFound } from "next/navigation";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog Page',
}

export default function Blog({ searchParams, params }: any) {
    console.log(searchParams);
    if (searchParams.error === "true") {
        throw new Error("This is an error");
    }
    if (searchParams.notFound == "true") {
        notFound();
    }

    return <h2>BlogPage</h2>;
}