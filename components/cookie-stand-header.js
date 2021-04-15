import Link from 'next/link'

export default function CookieStandHeader({ username, onLogout }) {
    return (
        <header className="flex p-4 bg-green-400">
            <h1 className="text-4xl border justif-start border-color-black">
                Cookie Stand Admin
            </h1>
            <div className="justify-end bg-red-500"> 
                <p className="">{username}</p>
                <Link href="/">
                    <a onClick={onLogout} >Sign Out</a>
                </Link>
                <nav>
                    <Link href="/overview"><a>Overview</a></Link>
                </nav>
            </div>
        </header>
    )
}
