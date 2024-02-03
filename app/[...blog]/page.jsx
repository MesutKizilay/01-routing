import React from "react";

export default function Blog({ params }) {
    console.log(params);
    return <div>Blog sayfası: {params.blog}</div>;
}