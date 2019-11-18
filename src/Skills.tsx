import React from 'react';
import Contentbox from './Contentbox';

const Python: React.FC = () => {
    return (
        <div>
            <h2>Python</h2>
            <div className="topic">
                <p>2017. 7 -</p>
                <p>機械学習</p>
                <p>データ分析</p>
                <p>web開発</p>
                <p>競技プログラミング</p>
            </div>
            <h3>Library, Framework</h3>
            <div className="topic">
                <p>Keras</p>
                <p>Tensorflow</p>
                <p>Django</p>
                <p>Flask</p>
                <p>etc ...</p>
            </div>
        </div>
    )
};

const Swift: React.FC = () => {
    return (
        <div>
            <h2>Swift</h2>
            <div className="topic">
                <p>2018. 10 -</p>
                <p>iOSアプリ開発</p>
            </div>
        </div>
    )
};

const TypeScript: React.FC = () => {
    return (
        <div>
            <h2>TypeScript</h2>
            <div className="topic">
                <p>2019. 11 -</p>
                <p>フロントエンド開発</p>
                <p>React</p>
            </div>
        </div>
    )
};

const R: React.FC = () => {
    return (
        <div>
            <h2>R</h2>
            <div className="topic">
                <p>2019. 3 -</p>
                <p>データ分析</p>
            </div>
        </div>
    )
};

const C: React.FC = () => {
    return (
        <div>
            <h2>C</h2>
            <div className="topic">
                <p>2017. 10 -</p>
                <p>競技プログラミング</p>
            </div>
        </div>
    )
};

const Others: React.FC = () => {
    return (
        <div>
            <h2>Other tools</h2>
            <div className="topic">
                <p>Docker</p>
                <p>Git</p>
                <p>SQL</p>
                <p>GCP</p>
                <p>Kubernetes</p>
                <p>etc ...</p>
            </div>
        </div>
    )
};

const Skills: React.FC = () => {
    return (
        <div>
            <h1>My skills</h1>
            <Contentbox content={<Python />} />
            <Contentbox content={<Swift />} />
            <Contentbox content={<TypeScript />} />
            <Contentbox content={<R />} />
            <Contentbox content={<C />} />
            <Contentbox content={<Others />} />
        </div>
    )
};

export default Skills;