import bannerImg from '../../../assets/Images/Banner/young-man-wearing-blue-outfit-holding-red-folder.jpg'

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen bg-[#35495E]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h6 className='text-3xl font-semibold text-white mb-2'>This is me</h6>
                        <h1 className="text-5xl font-bold text-white">Zabaidul Islam.</h1>
                        <p className="py-4 text-white">As a junior developer, I am constantly expanding my skills and gaining experience through various projects. From simple websites to more complex applications, I am passionate about creating exceptional web experiences. Take a look at my portfolio to explore some of my work. If you have any exciting opportunities or ideas to discuss, I'd love to hear from you. Let's build something great together!"</p>
                        <button className="bg-[#9B59B6] border-2 py-2 px-7  me-3 rounded"> <span className='text-white'>About Me</span></button> <button className='bg-[#9B59B6] border-2 p-2 rounded'><a href="https://doc-14-28-docs.googleusercontent.com/docs/securesc/6sig7m5o0fq1ed3bnnsfg48mtss18vhl/ssbpg6fs83d2d0rr0lousjjg0r3udskr/1687882350000/03859686964347014780/03859686964347014780/1iSUGw2wlT1dC-7qy-r6E3_YSuthOFEWy?e=download&ax=ADWCPKBZ4SsZLHGK8c3t-zSIgkHHvPktovTIaKSchEjb4YdP1TyVxGdIEOBuCU4aUZBeGfqBqDtOyTxfhOmXEY8ugGijo96fYPPCy3-5yKACX7CJZ7QDsJ9r4yiJXK66pW8F3dQF1MvNw8EP9A7PdfmZfltkhQg2lDU85jAlc2Asiq7Om08KFFYBxYjXlFZjN5ZhG2p8Pm47V62hqIPyPhhIK8v6bvFgmZaJd8HM5CotYZ2MoFxFCDEaeHuVg4wPXEgm9kYJfBnYkS7dosHlRvEhNEO4XbAudMu9R0BCYSjlVHZpdFolwsQuEAKLTGHfn-e3RuJZynKmxY5eoh4WUggqFdd9qaI0uVv9vpaJ-JvwYVspF8vQet4_THQ-t-7GmV9tXk4JJQHC967CgtNaDV8EgzGQtir8mVM8yW9HPCPeTfUEXkxctMkw2umPqSx29Rnl5ZsnaqFd7cJ2vu5E8yjlJyyXQxEx2yzoSzNfpxF4Pnl7Xadis1h7-vQDjdb5ewgYF4QDFMwYDQpcpycMsDe9rk_hoXqSR0ctC_aT4GskGYSSdoFYsOhQOwPOTkoLetzPZ7gkYSsDE8DmswundNgXKMZIgSIpOmJQtSdracPjxY1BxQTLGB2CQSXOrGLN-hpxRErMz5NKi8JCBHOXkHpQLMHWpscaWT-mGDAv4qfNJYRgSZ3J6RzLuBMJLgpf8kQMY8m4naJ2rEtUNX6DeV0xh5rj4B4FVcEBAJUnzXobnLjTS1tWNjIjYXbsj_5yYNiVZMw5E6bN2sdijWxZbMRRkjGM1R2CcmrSm_pI0vGMdw_hNEykX5BKZfVMUlwLlTcstR0OWQ48q1f0_WezA0l3qWKjG6icyRBUnb31gctvk-P_MJf7e-8YoVfZv-6aQ24&uuid=578ec15e-0f94-4ddc-8689-a5ec23d438d6&authuser=0&nonce=ecinnm33sc562&user=03859686964347014780&hash=illmno1rfipejssbbfruest8qfihv3bt" download className=""></a><span className='text-white'>Download Resume</span></button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;