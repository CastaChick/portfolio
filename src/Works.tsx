import React from 'react';
import Contentbox from './Contentbox';

const MF: React.FC = () => {
    return (
        <div>
            <h2>Moneyforward</h2>
            <p>2019. 8 - 2019.9</p>
            <div className="topic">
                <p>画像認識関連研究</p>
            </div>
            <div className="topic">
                <p>Tensorflow</p>
                <p>Docker</p>
                <p>GCP</p>
            </div>
        </div>
    )
};

const LINE: React.FC = () => {
    return (
        <div>
            <h2>LINE</h2>
            <p>2019. 8 (5days)</p>
            <div className="topic">
                <p>webサービス開発</p>
                <p>サーバーサイド</p>
            </div>
            <div className="topic">
                <p>SQLAlchemy</p>
                <p>Pyramid</p>
                <p>LIFF API</p>
            </div>
        </div>
    )
};

const Aiful: React.FC = () => {
    return (
        <div>
            <h2>Aiful</h2>
            <p>2019. 11 - </p>
            <div className="topic">
                <p>web関連業務</p>
                <p>バックエンド</p>
                <p>インフラ</p>
                <p>フロントエンド</p>
            </div>
        </div>
    )
};

const Camael: React.FC = () => {
    return (
        <div>
            <h2>Camael</h2>
            <p>2019. 10 -</p>
            <div className="topic">
                <p>機械学習ライブラリ</p>
            </div>
            <div className="topic">
                <p>Numpy</p>
                <p>Sphinx</p>
            </div>
        </div>
    )
};

const Portfolio: React.FC = () => {
    return (
        <div>
            <h2>Portfolio</h2>
            <p>2019. 11 -</p>
            <div className="topic">
                <p>TypeScript</p>
                <p>React</p>
            </div>
        </div>
    )
};

const DinnerProducer: React.FC = () => {
    return (
        <div>
            <h2>DinnerProducer</h2>
            <p>2018. 11</p>
            <div className="topic">
                <p>My first iOS app</p>
                <p>夕食提案アプリ</p>
            </div>
            <div className="topic">
                <p>Swift</p>
            </div>
        </div>
    )
};

const Blog: React.FC = () => {
    return (
        <div>
            <h2>Simple blog</h2>
            <p>2019. 5 -</p>
            <div className="topic">
                <p>Django</p>
                <p>MySQL</p>
            </div>
        </div>
    )
};

const MFHack: React.FC = () => {
    return (
        <div>
            <h2>Moneyforward</h2>
            <p>2019. 9. 21, 22</p>
            <div className="topic">
                <p>データ分析ハッカソン</p>
                <p>自然言語処理</p>
            </div>
        </div>
    )
};

const Internship: React.FC = () => {
    return (
        <div>
            <h2>・Internship・</h2>
            <Contentbox content={<MF />} />
            <Contentbox content={<LINE />} />
        </div>
    )
};

const Parttime: React.FC = () => {
    return (
        <div>
            <h2>・Part-time job・</h2>
            <Contentbox content={<Aiful />} />
        </div>
    )
};

const Personal: React.FC = () => {
    return (
        <div>
            <h2>・Personal works・</h2>
            <Contentbox content={<Camael />} />
            <Contentbox content={<Portfolio />} />
            <Contentbox content={<DinnerProducer />} />
            <Contentbox content={<Blog />} />
        </div>
    )
};

const Hackathon: React.FC = () => {
    return (
        <div>
            <h2>・Hackathon・</h2>
            <Contentbox content={<MFHack />} />
        </div>
    )
};

const Works: React.FC = () => {
    return (
        <div>
            <h1>・<u>Works & Career</u>・</h1>
            <Internship />
            <Parttime />
            <Personal />
            <Hackathon />
        </div>
    )
};

export default Works;
