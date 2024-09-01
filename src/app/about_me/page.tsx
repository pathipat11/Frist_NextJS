"use client";
import React, { useState } from "react";
import styles from "./about_me.module.css";
import Image from "next/image";
import profilePic from "../image/profilekku.jpg";

export default function Page() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState("");

    const handlePlus = () => {
        setOutput(String(Number(input1) * Number(input2)));
    };

    return (
        <div className={styles.container}>
            <div className="row">
                <div className={`col-lg-3 ${styles.image}`}>
                    <Image src={profilePic} alt="Profile" className="img-thumbnail shadow-lg" width={120} height={150} />
                </div>
                <div className={`col-lg ${styles.information}`}>
                    <div className={styles.h1}>PROFILE</div>
                    <div className={styles.name}>Pathipat Mattra (Palmy)</div>
                    <div className={styles.about}>
                        <ul>
                            <li><strong>Student ID:</strong> 653450293-2</li>
                            <li><strong>Branch:</strong> Computer Science</li>
                            <li><strong>Mail:</strong> Pathipat.m@kkumail.com</li>
                        </ul>
                    </div>
                    <div className={styles.exp}>
                        WORK EXPERIENCE
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>PROJECT</th>
                                    <th>EXPLAIN</th>
                                    <th>LINK</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Encapsulation</td>
                                    <td>Study basic encapsulation using C# visual studio 2022</td>
                                    <td><a href="https://github.com/pathipat11/Lab4Encapsulation.git">GO</a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>PokemonBattle</td>
                                    <td>study basic Game dev using C# visual studio 2022</td>
                                    <td><a href="https://github.com/pathipat11/PokemonBattle.git">GO</a></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>CISESPORT</td>
                                    <td>About managing people using C# visual studio 2022</td>
                                    <td><a href="https://github.com/pathipat11/CISESPORT.git">GO</a></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Borrow a bicycle</td>
                                    <td>Designed to make borrowing a bicycle convenient and fast.</td>
                                    <td><a href="https://github.com/pathipat11/Final-Project-OOP.git">GO</a></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Front End developer</td>
                                    <td>Designing for front end developers</td>
                                    <td><a href="https://github.com/pathipat11/pathipat11.github.io.git">GO</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.input}>
                        My CALCULATOR
                        <input
                            type="number"
                            id="input1"
                            className="form-control"
                            value={input1}
                            onChange={(e) => setInput1(e.target.value)}
                        /><br />
                        <input
                            type="number"
                            id="input2"
                            className="form-control"
                            value={input2}
                            onChange={(e) => setInput2(e.target.value)}
                        /><br />
                        <input
                            type="number"
                            id="output"
                            className="form-control"
                            value={output}
                            readOnly
                        /><br />
                        <button type="button" className="btn btn-primary" onClick={handlePlus}>Click me</button>
                    </div>
                    <a href="todoapp.html" className="btn btn-outline-dark">Go to Todo App</a>
                </div>
            </div>
            <div className={styles.cont}>
                CONTACT
                <a className={styles.fb} href="https://www.facebook.com/VIIXL">
                    <i className="fa-brands fa-facebook"></i> Pathipat Mattra
                </a>
                <a className={styles.insta} href="https://www.instagram.com/26.uid/">
                    <i className="fa-brands fa-instagram"></i> 26.uid
                </a>
                <a className={styles.mail} href="https://mail.google.com/mail/u/1/#inbox">
                    <i className="fa-solid fa-envelope"></i> pathipat.m@kkumail.com
                </a>
                <a className={styles.kedin} href="https://www.linkedin.com/in/viixl/">
                    <i className="fa-brands fa-linkedin"></i> Pathipat Mattra
                </a>
            </div>
        </div>
    );
}
