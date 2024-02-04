import React from "react";

export default function PostPage({ params }) {
    console.log(params);
    return <div>PostPage sayfası: {params.post}</div>;
}