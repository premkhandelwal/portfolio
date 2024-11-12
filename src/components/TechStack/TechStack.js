import React from 'react'
import TechCard from './Card/Card'
import "./TechStack.css"
import flutterLogo from '../../assets/images/flutter.png';
import nodeLogo from '../../assets/images/nodeJs.png';
import sqlLogo from '../../assets/images/sql.png';
import pythonLogo from '../../assets/images/python.png';
import blockChainLogo from '../../assets/images/blockchain.png';

export default function TechStack() {
    return (
        <>
            <div className = "languagesTitle">Frameworks/Languages</div>
            <div className="card-container">

                <TechCard list = {["C#", "Python","C++", "Dart", "Solidity"]} logo = {pythonLogo} variant = "Programming Languages" text = "Solved 400+ problems on various competitive platforms"/>
                <TechCard list = {["Angular","Flutter","ReactJS" ]} logo = {flutterLogo} variant = "Frontend" text = "Developed more than 20 applications till date. Four of them on Play Store"/>
                <TechCard list = {[".NET","NodeJS", "Firebase"]} logo = {nodeLogo} variant = "Backend" text = "Developed backend of various applications using wide support of the library"/>
                <TechCard list = {["MySQL/MSSQL", "Firestore", "MongoDB", "Postgres"]} logo = {sqlLogo} variant = "SQL" text = "Worked with various kinds of database, integrated them with applications"/>
                <TechCard list = {["Ethereum","Goerli","Polygon"]} logo = {blockChainLogo} variant = "Blockchain" text = "Developed decentralized application and deployed on various test networks"/>
                
            </div>
        </>

    )
}
