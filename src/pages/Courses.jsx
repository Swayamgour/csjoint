import React from 'react'
import CustomHeader from '../components/CustomHeader'
import From from './From'
import Footer from './Footer'

function Courses() {

    const data = {
        heading: 'Our Courses',
        text: ` Our courses offer structured SSB preparation within a supportive mentoring ecosystem. With direct guidance from Lt Cdr Nikhil and a strong emphasis on the psychology of assessment, students learn to align their thinking, behaviour, and actions with the expectations of the Services Selection Board.`
    }
    return (
        <>

        



            <CustomHeader heading={data.heading} text={data.text} />

            <section className="container sectionspace80">
                <div className="our-courses-section">

                    <div className="course-mobile-select d-md-none mb-3">
                        <div className="form-group">
                            <label for="course" className="form-label  mb-1" style={{ color: 'var(--theme-white)' }}>Select Course:-</label>
                            <select className="form-select" id="courseTabSelect">
                                <option value="#c1">10 days Services Selection Board Hackathon</option>
                                <option value="#c2">Introduction to SSB & PPDT</option>
                                <option value="#c3">Psych Theory Course</option>
                                <option value="#c4">Interview Theory Course</option>
                                <option value="#c5">Group Testing Course</option>
                            </select>
                        </div>
                    </div>
                    <ul className="nav course-nav-tabs d-none d-md-flex" role="tablist">
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
                                <h3 className="course-tab-card-title">Tab-2 Content :- Introduction to SSB & PPDT</h3>
                                {/* <p>INR 11000/- · 18% GST</p> */}
                                {/* <h3 className="course-tab-card-hours"><strong>Total Sessions:</strong> 10 | <strong>Total Learning Hours:</strong> 40</h3> */}

                                <h5 className="mb-2">Topic Covered:</h5>
                                <ul>
                                    {/* <li>Introduction to SSB, Complete SSB Procedure, Stage 1 Testing – OIR Test, Picture Perception & Discussion Test</li>
                                    <li>PIQ Form and Interview Procedure</li>
                                    <li>Mock Interview by a DIPR certified Interviewing Officer</li>
                                    <li>Projective Technique Theory – Decoding the Psych Tests (Thematic Apperception Test, Word Association Test, Situation Reaction Test, Self-Description Test)</li>
                                    <li>Mock Psych Test and feedback by a DIPR certified Psychologist</li>
                                    <li>Theory and Concepts of the Group Situational Tasks – Group Discussion, Group Planning Exercise, Progressive Group Task, Group Obstacle Race, Half Group Task, Lecturette, Individual Obstacles, Command Task, Final Group Task</li>
                                    <li>Genesis of the Group Testing Technique and what GTO looks at during the Group Testing</li>
                                    <li>Officer Like Qualities Theory and the OLQ Correlation</li>
                                    <li>Conference Procedure</li>
                                    <li>Correlation amongst all three techniques of assessment (GTO, Psych, IO)</li>
                                    <li>Doubt Clearing, SOCIOMETRY, Individual Feedback</li> */}

                                    <li>
                                        Introduction to SSB, Complete SSB Procedure, Stage 1 Testing – OIR Test, Picture Perception & Discussion Test
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="tab-pane fade" id="c3">
                            <div className="course-tab-card">
                                <h3 className="course-tab-card-title">Tab-3 Content :- Psych Theory Course</h3>
                                {/* <p>INR 11000/- · 18% GST</p>
                                <h3 className="course-tab-card-hours"><strong>Total Sessions:</strong> 10 | <strong>Total Learning Hours:</strong> 40</h3> */}

                                <h5 className="mb-2">Topic Covered:</h5>
                                <ul>
                                    <li>
                                        Projective Technique Theory – Decoding the Psych Tests
                                    </li>


                                    <li>Thematic Apperception Test</li>
                                    <li> Word Association Test</li>
                                    <li> Situation Reaction Test</li>
                                    <li>Self-Description Test</li>
                                    <li>
                                        Mock Psych Test and feedback by a DIPR certified Psychologist.
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="tab-pane fade " id="c4">
                            <div className="course-tab-card">
                                <h3 className="course-tab-card-title">Tab-4 Content :-  Interview Theory Course</h3>
                                {/* <p>INR 11000/- · 18% GST</p>
                                <h3 className="course-tab-card-hours"><strong>Total Sessions:</strong> 10 | <strong>Total Learning Hours:</strong> 40</h3> */}

                                <h5 className="mb-2">Topic Covered:</h5>
                                <ul>
                                    {/* <li>Introduction to SSB, Complete SSB Procedure, Stage 1 Testing – OIR Test, Picture Perception & Discussion Test</li>
                                    <li>PIQ Form and Interview Procedure</li>
                                    <li>Mock Interview by a DIPR certified Interviewing Officer</li>
                                    <li>Projective Technique Theory – Decoding the Psych Tests (Thematic Apperception Test, Word Association Test, Situation Reaction Test, Self-Description Test)</li>
                                    <li>Mock Psych Test and feedback by a DIPR certified Psychologist</li>
                                    <li>Theory and Concepts of the Group Situational Tasks – Group Discussion, Group Planning Exercise, Progressive Group Task, Group Obstacle Race, Half Group Task, Lecturette, Individual Obstacles, Command Task, Final Group Task</li>
                                    <li>Genesis of the Group Testing Technique and what GTO looks at during the Group Testing</li>
                                    <li>Officer Like Qualities Theory and the OLQ Correlation</li>
                                    <li>Conference Procedure</li>
                                    <li>Correlation amongst all three techniques of assessment (GTO, Psych, IO)</li>
                                    <li>Doubt Clearing, SOCIOMETRY, Individual Feedback</li> */}
                                    <li>
                                        PIQ Form and Interview Procedure
                                    </li>
                                    <li>
                                        Mock Interview and feedback by a DIPR certified Interviewing Officer.

                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="tab-pane fade" id="c5">
                            <div className="course-tab-card">
                                <h3 className="course-tab-card-title"> Tab-5 Content :- Group Testing Course</h3>
                                {/* <p>INR 11000/- · 18% GST</p>
                                <h3 className="course-tab-card-hours"><strong>Total Sessions:</strong> 10 | <strong>Total Learning Hours:</strong> 40</h3> */}

                                <h5 className="mb-2">Topic Covered:</h5>
                                {/* <ul> */}
                                <ul>
                                    <li>Theory and Concepts of the Group Situational Tasks</li>
                                    <li>Group Discussion</li>
                                    <li>Group Planning Exercise</li>
                                    <li>Progressive Group Task</li>
                                    <li>Group Obstacle Race</li>
                                    <li>Half Group Task</li>
                                    <li>Lecturette</li>
                                    <li>Individual Obstacles</li>
                                    <li>Command Task</li>
                                    <li>Final Group Task</li>
                                    <li>
                                        Genesis of the Group Testing Technique and what GTO looks at during the
                                        Group Testing
                                    </li>
                                    <li>Feedback by a DIPR certified Group Testing Officer</li>
                                    <li>The entire course is covered through a Digital GTO Ground</li>
                                </ul>

                                {/* </ul> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <From />
            <Footer />



        </>
    )
}


export default Courses