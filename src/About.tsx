import React from 'react';
import Contentbox from './Contentbox';

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