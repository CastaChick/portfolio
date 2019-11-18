import React from 'react';
import Contentbox from './Contentbox';
import Twitter from './twitter-square-brands.svg';
import Qiita from './qiita-favicon.png';
import Github from './github-square-brands.svg';
import Hatena from './pen-square-solid.svg';

const Profile: React.FC = () => {
    return (
        <div>
            <h2>葛西 太一</h2>
            <p>Kasai Taichi</p>
            <div className="topic">
                <p>京都大学</p>
                <p>理学部3回生</p>
                <p>化学系</p>
            </div>
            <div className="topic">
                <p>Kyoto univ.</p>
                <p>Faculty of Science</p>
                <p>Major in Chemistry</p>
            </div>
        </div>
    )
};

const Detail: React.FC = () => {
    return (
        <div>
            <h2>Like & Hobby</h2>
            <div className="topic">
                <p>ギター</p>
                <p>歌</p>
                <p>プログラミング</p>
            </div>
            <h2>Interested</h2>
            <div className="topic">
                <p>機械学習</p>
                <p>コンテナ技術</p>
                <p>有機化学</p>
            </div>
        </div>
    )
}

const Links: React.FC = () => {
    return (
        <div>
            <h2>Links</h2>
            <div className="Link-icons">
                <a href="https://twitter.com/hanama_chem" target="_blank" rel="noopener noreferrer"><img src={Twitter} className="twitter-icon" alt="logo" /></a>
                <a href="https://qiita.com/hanama_chem" target="_blank" rel="noopener noreferrer"><img src={Qiita} className="qiita-icon" alt="logo" /></a>
                <a href="https://github.com/CastaChick" target="_blank" rel="noopener noreferrer"><img src={Github} className="github-icon" alt="logo" /></a>
                <a href="https://casta46.hatenablog.com" target="_blank" rel="noopener noreferrer"><img src={Hatena} className="hatena-icon" alt="logo" /></a>
            </div>
        </div>
    )
}

const About: React.FC = () => {
    return (
        <div>
            <h1>About me</h1>
            <Contentbox content={<Profile />} />
            <Contentbox content={<Detail />} />
            <Contentbox content={<Links />} />
        </div>
    )
};

export default About;