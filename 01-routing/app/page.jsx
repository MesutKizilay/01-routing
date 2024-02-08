import Link from "next/link";

export default function Home() {
  return <div>
    <Link prefetch={false} href="/hakkimizda">Hakkimizda</Link>
    <br></br>
    <Link prefetch={false} href="docs">Post 1</Link>
    <br></br>
    <Link prefetch={false} href="/docs/abc">Post 2</Link>
    <br></br>
    <Link
      prefetch={false}
      //target="_blank"
      //replace={true}
      className="testcc"
      href={{
        pathname: '/hakkimizda',
        query: {
          name: 'Next.js',
          surname: '3'
        }
      }}>Yeni Sayfa
    </Link>
  </div>;
}