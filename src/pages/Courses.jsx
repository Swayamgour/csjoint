import React from 'react'
import CustomHeader from '../components/CustomHeader'

function Courses() {

    const data = {
        heading: 'Our Courses',
        text: ` Our courses offer structured SSB preparation within a supportive mentoring ecosystem. With direct guidance from Lt Cdr Nikhil and a strong emphasis on the psychology of assessment, students learn to align their thinking, behaviour, and actions with the expectations of the Services Selection Board.`
    }
    return (
        <>
            {/* @extends('layout.main')
            @section('content')
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> */}


           <CustomHeader heading={data.heading} text={data.text} />

            <section className="container sectionspace80">
                <div className="our-courses-section">

                    <ul className="nav course-nav-tabs" role="tablist">
                        <li className="nav-item">
                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#c1">
                                10 days Services Selection Board Hackathon
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#c2">
                                Introduction to SSB & PPDT
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#c3">
                                Psych Theory Course
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#c4">
                                Interview Theory Course
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#c5">
                                Group Testing Course
                            </button>
                        </li>

                    </ul>

                    <div className="tab-content">


                        <div className="tab-pane fade show active" id="c1">
                            <div className="course-tab-card">
                                <h3 className="course-tab-card-title">10 days Services Selection Board Hackathon</h3>
                                <p>INR 11000/- · 18% GST</p>
                                <h3 className="course-tab-card-hours"><strong>Total Sessions:</strong> 10 | <strong>Total Learning Hours:</strong> 40</h3>

                                <h5 className="mb-2">Topic Covered:</h5>
                                <ul>
                                    <li>Introduction to SSB, Complete SSB Procedure, Stage 1 Testing – OIR Test, Picture Perception & Discussion Test</li>
                                    <li>PIQ Form and Interview Procedure</li>
                                    <li>Mock Interview by a DIPR certified Interviewing Officer</li>
                                    <li>Projective Technique Theory – Decoding the Psych Tests (Thematic Apperception Test, Word Association Test, Situation Reaction Test, Self-Description Test)</li>
                                    <li>Mock Psych Test and feedback by a DIPR certified Psychologist</li>
                                    <li>Theory and Concepts of the Group Situational Tasks – Group Discussion, Group Planning Exercise, Progressive Group Task, Group Obstacle Race, Half Group Task, Lecturette, Individual Obstacles, Command Task, Final Group Task</li>
                                    <li>Genesis of the Group Testing Technique and what GTO looks at during the Group Testing</li>
                                    <li>Officer Like Qualities Theory and the OLQ Correlation</li>
                                    <li>Conference Procedure</li>
                                    <li>Correlation amongst all three techniques of assessment (GTO, Psych, IO)</li>
                                    <li>Doubt Clearing, SOCIOMETRY, Individual Feedback</li>
                                </ul>

                            </div>
                        </div>
                        <div className="tab-pane fade " id="c2">
                            <div className="course-tab-card">
                                <h3 className="course-tab-card-title">Tab-2 Content :-10 days Services Selection Board Hackathon</h3>
                                <p>INR 11000/- · 18% GST</p>
                                <h3 className="course-tab-card-hours"><strong>Total Sessions:</strong> 10 | <strong>Total Learning Hours:</strong> 40</h3>

                                <h5 className="mb-2">Topic Covered:</h5>
                                <ul>
                                    <li>Introduction to SSB, Complete SSB Procedure, Stage 1 Testing – OIR Test, Picture Perception & Discussion Test</li>
                                    <li>PIQ Form and Interview Procedure</li>
                                    <li>Mock Interview by a DIPR certified Interviewing Officer</li>
                                    <li>Projective Technique Theory – Decoding the Psych Tests (Thematic Apperception Test, Word Association Test, Situation Reaction Test, Self-Description Test)</li>
                                    <li>Mock Psych Test and feedback by a DIPR certified Psychologist</li>
                                    <li>Theory and Concepts of the Group Situational Tasks – Group Discussion, Group Planning Exercise, Progressive Group Task, Group Obstacle Race, Half Group Task, Lecturette, Individual Obstacles, Command Task, Final Group Task</li>
                                    <li>Genesis of the Group Testing Technique and what GTO looks at during the Group Testing</li>
                                    <li>Officer Like Qualities Theory and the OLQ Correlation</li>
                                    <li>Conference Procedure</li>
                                    <li>Correlation amongst all three techniques of assessment (GTO, Psych, IO)</li>
                                    <li>Doubt Clearing, SOCIOMETRY, Individual Feedback</li>
                                </ul>

                            </div>
                        </div>
                        <div className="tab-pane fade" id="c3">
                            <div className="course-tab-card">
                                <h3 className="course-tab-card-title">Tab-3 Content :- 10 days Services Selection Board Hackathon</h3>
                                <p>INR 11000/- · 18% GST</p>
                                <h3 className="course-tab-card-hours"><strong>Total Sessions:</strong> 10 | <strong>Total Learning Hours:</strong> 40</h3>

                                <h5 className="mb-2">Topic Covered:</h5>
                                <ul>
                                    <li>Introduction to SSB, Complete SSB Procedure, Stage 1 Testing – OIR Test, Picture Perception & Discussion Test</li>
                                    <li>PIQ Form and Interview Procedure</li>
                                    <li>Mock Interview by a DIPR certified Interviewing Officer</li>
                                    <li>Projective Technique Theory – Decoding the Psych Tests (Thematic Apperception Test, Word Association Test, Situation Reaction Test, Self-Description Test)</li>
                                    <li>Mock Psych Test and feedback by a DIPR certified Psychologist</li>
                                    <li>Theory and Concepts of the Group Situational Tasks – Group Discussion, Group Planning Exercise, Progressive Group Task, Group Obstacle Race, Half Group Task, Lecturette, Individual Obstacles, Command Task, Final Group Task</li>
                                    <li>Genesis of the Group Testing Technique and what GTO looks at during the Group Testing</li>
                                    <li>Officer Like Qualities Theory and the OLQ Correlation</li>
                                    <li>Conference Procedure</li>
                                    <li>Correlation amongst all three techniques of assessment (GTO, Psych, IO)</li>
                                    <li>Doubt Clearing, SOCIOMETRY, Individual Feedback</li>
                                </ul>

                            </div>
                        </div>
                        <div className="tab-pane fade " id="c4">
                            <div className="course-tab-card">
                                <h3 className="course-tab-card-title">Tab-4 Content :- 10 days Services Selection Board Hackathon</h3>
                                <p>INR 11000/- · 18% GST</p>
                                <h3 className="course-tab-card-hours"><strong>Total Sessions:</strong> 10 | <strong>Total Learning Hours:</strong> 40</h3>

                                <h5 className="mb-2">Topic Covered:</h5>
                                <ul>
                                    <li>Introduction to SSB, Complete SSB Procedure, Stage 1 Testing – OIR Test, Picture Perception & Discussion Test</li>
                                    <li>PIQ Form and Interview Procedure</li>
                                    <li>Mock Interview by a DIPR certified Interviewing Officer</li>
                                    <li>Projective Technique Theory – Decoding the Psych Tests (Thematic Apperception Test, Word Association Test, Situation Reaction Test, Self-Description Test)</li>
                                    <li>Mock Psych Test and feedback by a DIPR certified Psychologist</li>
                                    <li>Theory and Concepts of the Group Situational Tasks – Group Discussion, Group Planning Exercise, Progressive Group Task, Group Obstacle Race, Half Group Task, Lecturette, Individual Obstacles, Command Task, Final Group Task</li>
                                    <li>Genesis of the Group Testing Technique and what GTO looks at during the Group Testing</li>
                                    <li>Officer Like Qualities Theory and the OLQ Correlation</li>
                                    <li>Conference Procedure</li>
                                    <li>Correlation amongst all three techniques of assessment (GTO, Psych, IO)</li>
                                    <li>Doubt Clearing, SOCIOMETRY, Individual Feedback</li>
                                </ul>

                            </div>
                        </div>

                        <div className="tab-pane fade" id="c5">
                            <div className="course-tab-card">
                                <h3 className="course-tab-card-title"> Tab-5 Content :-10 days Services Selection Board Hackathon</h3>
                                <p>INR 11000/- · 18% GST</p>
                                <h3 className="course-tab-card-hours"><strong>Total Sessions:</strong> 10 | <strong>Total Learning Hours:</strong> 40</h3>

                                <h5 className="mb-2">Topic Covered:</h5>
                                <ul>
                                    <li>Introduction to SSB, Complete SSB Procedure, Stage 1 Testing – OIR Test, Picture Perception & Discussion Test</li>
                                    <li>PIQ Form and Interview Procedure</li>
                                    <li>Mock Interview by a DIPR certified Interviewing Officer</li>
                                    <li>Projective Technique Theory – Decoding the Psych Tests (Thematic Apperception Test, Word Association Test, Situation Reaction Test, Self-Description Test)</li>
                                    <li>Mock Psych Test and feedback by a DIPR certified Psychologist</li>
                                    <li>Theory and Concepts of the Group Situational Tasks – Group Discussion, Group Planning Exercise, Progressive Group Task, Group Obstacle Race, Half Group Task, Lecturette, Individual Obstacles, Command Task, Final Group Task</li>
                                    <li>Genesis of the Group Testing Technique and what GTO looks at during the Group Testing</li>
                                    <li>Officer Like Qualities Theory and the OLQ Correlation</li>
                                    <li>Conference Procedure</li>
                                    <li>Correlation amongst all three techniques of assessment (GTO, Psych, IO)</li>
                                    <li>Doubt Clearing, SOCIOMETRY, Individual Feedback</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}

export default Courses