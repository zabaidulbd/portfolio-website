import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">Zabaidul</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='https://drive.google.com/file/d/1iSUGw2wlT1dC-7qy-r6E3_YSuthOFEWy/view?usp=sharing'>Resume</Link></li>
                    <li><Link to='project'>Projects</Link></li>
                    <li><Link to='about'>About</Link></li>
                    <li><Link to='contact'>Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://doc-14-28-docs.googleusercontent.com/docs/securesc/6sig7m5o0fq1ed3bnnsfg48mtss18vhl/ssbpg6fs83d2d0rr0lousjjg0r3udskr/1687882350000/03859686964347014780/03859686964347014780/1iSUGw2wlT1dC-7qy-r6E3_YSuthOFEWy?e=download&ax=ADWCPKBZ4SsZLHGK8c3t-zSIgkHHvPktovTIaKSchEjb4YdP1TyVxGdIEOBuCU4aUZBeGfqBqDtOyTxfhOmXEY8ugGijo96fYPPCy3-5yKACX7CJZ7QDsJ9r4yiJXK66pW8F3dQF1MvNw8EP9A7PdfmZfltkhQg2lDU85jAlc2Asiq7Om08KFFYBxYjXlFZjN5ZhG2p8Pm47V62hqIPyPhhIK8v6bvFgmZaJd8HM5CotYZ2MoFxFCDEaeHuVg4wPXEgm9kYJfBnYkS7dosHlRvEhNEO4XbAudMu9R0BCYSjlVHZpdFolwsQuEAKLTGHfn-e3RuJZynKmxY5eoh4WUggqFdd9qaI0uVv9vpaJ-JvwYVspF8vQet4_THQ-t-7GmV9tXk4JJQHC967CgtNaDV8EgzGQtir8mVM8yW9HPCPeTfUEXkxctMkw2umPqSx29Rnl5ZsnaqFd7cJ2vu5E8yjlJyyXQxEx2yzoSzNfpxF4Pnl7Xadis1h7-vQDjdb5ewgYF4QDFMwYDQpcpycMsDe9rk_hoXqSR0ctC_aT4GskGYSSdoFYsOhQOwPOTkoLetzPZ7gkYSsDE8DmswundNgXKMZIgSIpOmJQtSdracPjxY1BxQTLGB2CQSXOrGLN-hpxRErMz5NKi8JCBHOXkHpQLMHWpscaWT-mGDAv4qfNJYRgSZ3J6RzLuBMJLgpf8kQMY8m4naJ2rEtUNX6DeV0xh5rj4B4FVcEBAJUnzXobnLjTS1tWNjIjYXbsj_5yYNiVZMw5E6bN2sdijWxZbMRRkjGM1R2CcmrSm_pI0vGMdw_hNEykX5BKZfVMUlwLlTcstR0OWQ48q1f0_WezA0l3qWKjG6icyRBUnb31gctvk-P_MJf7e-8YoVfZv-6aQ24&uuid=578ec15e-0f94-4ddc-8689-a5ec23d438d6&authuser=0&nonce=ecinnm33sc562&user=03859686964347014780&hash=illmno1rfipejssbbfruest8qfihv3bt" download className="btn btn-neutral">Download Resume</a>
            </div>
        </div>
    );
};

export default Navbar;