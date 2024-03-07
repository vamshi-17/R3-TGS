import React, { useState } from 'react';

const Tabs = () => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState('Subjective');

    const gotToSubjective =() => {
        setActiveTab('Subjective');
    };

    const goToObjective = () => {
        setActiveTab('Objective');
    }

    const goToAssessment = () => {
        setActiveTab('Assessment');
    }

    const goToPlan = () => {
        setActiveTab('Plan');
    }

    // Function to change the active tab
    // const selectTab = (tabName) => {
    //     setActiveTab(tabName);
    // };

    return (
        // <div className='tabs-container'>
        //     {/* Tab selectors */}
        //     <div className="tabs">
        //         <button onClick={() => selectTab('Subjective')}>Subjective</button>
        //         <button onClick={() => selectTab('Objective')}>Objective</button>
        //         <button onClick={() => selectTab('Assessment')}>Assessment</button>
        //         <button onClick={() => selectTab('Plan')}>Plan</button>
        //     </div>

        //     {/* Tab content */}
        //     <div className="content">
        //         {activeTab === 'Subjective' && (
        //             <div>
        //                 <p>Subjective content goes here...</p>
        //                 {/* Add more detailed content or components here */}
        //             </div>
        //         )}

        //         {activeTab === 'Objective' && (
        //             <div>
        //                 <p>Objective content goes here...</p>
        //                 {/* Add more detailed content or components here */}
        //             </div>
        //         )}

        //         {activeTab === 'Assessment' && (
        //             <div>
        //                 <p>Assessment content goes here...</p>
        //                 {/* Add more detailed content or components here */}
        //             </div>
        //         )}

        //         {activeTab === 'Plan' && (
        //             <div>
        //                 <p>Plan content goes here...</p>
        //                 {/* Add more detailed content or components here */}
        //             </div>
        //         )}
        //     </div>
        // </div>

        <div className="wrapper">
            <div className="stabs">
                {/* Tab Selection */}
                <label className={`search-tabs ${activeTab === 'Subjective' ? 'active' : ''}`} onClick={() => setActiveTab('Subjective')}>Subjective</label>
                <label className={`search-tabs ${activeTab === 'Objective' ? 'active' : ''}`} onClick={() => setActiveTab('Objective')}>Objective</label>
                <label className={`search-tabs ${activeTab === 'Assessment' ? 'active' : ''}`} onClick={() => setActiveTab('Assessment')}>Assessment</label>
                <label className={`search-tabs ${activeTab === 'Plan' ? 'active' : ''}`} onClick={() => setActiveTab('Plan')}>Plan</label>
            </div>

            <div className="panels">
                {/* Subjective Tab Content */}
                {activeTab === 'Subjective' && (
                    // console.log("Rendering Subjective Content"),
                    
                    <div id="subjective-panel" className="panel">
                    
                        <div className="row m-2">
                            <label htmlFor="subjectiveTextarea" className="form-label">S (Subjective):</label>
                            <textarea className="form-control" id="subjectiveTextarea" placeholder="Enter comments" rows="3"></textarea>
                        </div>

                        {/* Action Button */}
                        <div className="mt-3 d-grid d-md-flex justify-content-md-end">
                            <button type="button" className="btn btn-primary btn-lg" onClick={goToObjective}>Next: Objective</button>
                        </div>

                    </div>
                )}

                {/* Objective Tab Content */}
                {activeTab === 'Objective' && (
                    
                    <div className="panel" id="objective-panel">
                        {/* Objective content based on provided HTML */}

                        <div className="row">
                            <div className="col-md-6 bg-light p-3">
                                <div className="row mb-3">
                                    <label className="col-md-5 col-form-label" htmlFor="diagnosisSelect">Diagnosis :</label>
                                    <div className="col-md-6">
                                        <select className="form-select" id="diagnosisSelect" name="diagnosis">
                                        <option value=""></option>
                                        <option value="F11.10">F11.10 Opioid Use Disorder (Mild)</option>
                                        <option value="F11.20">F11.20 Opioid Use Disorder (Moderate)</option>
                                        <option value="F11.20-Severe">F11.20 Opioid Use Disorder (Severe)</option>
                                        <option value="Alcohol-Moderate">Alcohol Use Disorder (Moderate)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label className="col-md-5 col-form-label" htmlFor="withdrawalSymptoms">Withdrawal Symptoms Reported :</label>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" id="withdrawalSymptoms" placeholder="" />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label className='col-md-5 col-form-label' htmlFor='appearance'>Appearance :</label>
                                    <div className='col-md-6'>
                                        <input type="email" className='form-control' id='appearance' placeholder='' />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label className="col-md-5 col-form-label">Orientation:</label>
                                    <div className="col-md-6">
                                        <select className="form-select">
                                            <option></option>
                                            <option>x4</option>
                                            <option>x3</option>
                                            <option>x1</option>
                                            <option>x0</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label className="col-md-5 col-form-label">Behaviors:</label>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control" placeholder="" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label className="col-md-5 col-form-label">Affect:</label>
                                    <div className="col-md-6">
                                        <select className="form-select" name="affect">
                                            <option value=""></option>
                                            <option value="Broad">Broad: average, showing emotion of what they are feeling.</option>
                                            <option value="Restricted">Restricted: dull feelings/emotions, but still close to average display of affect.</option>
                                            <option value="Blunted">Blunted: less reactive emotions to stimuli.</option>
                                            <option value="Flat">Flat: complete lack of expression feeling or emotion to stimuli</option>
                                            <option value="Labile">Labile: expressions shift unexpectedly, frequently and excessively</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label className="col-md-5 col-form-label" htmlFor="moodInput">Mood:</label>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control" id="moodInput" placeholder="" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label className="col-md-5 col-form-label" htmlFor="medicationsInput">Prescribed Medications/MMC:</label>
                                    <div className="col-md-6">
                                        <input type="email" className="form-control" id="medicationsInput" placeholder="" />
                                    </div>
                                </div>

                                <div className="col-md-6 p-3">
                                    <label htmlFor="objectiveComments" className="form-label">O (Objective):</label>
                                    <textarea className="form-control" id="objectiveComments" placeholder="Enter your comments" rows="18"></textarea>
                                </div>

                                {/* Action Button */}
                                <div className="mt-3 d-grid d-md-flex justify-content-md-end">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={gotToSubjective}>Previous: Subjective</button>
                                    <button type="button" className="btn btn-primary btn-lg" onClick={goToAssessment}>Next: Assessment</button>
                                </div>

                            </div>
                        </div>
                    </div>
                )}

                {/* Assessment Tab Content */}
                {activeTab === 'Assessment' && (
                    console.log("Rendering Assessment Content"),
                    <div className="panel" id="assessment-panel">
                        
                    {/* Assessment content based on provided HTML */}
                        <div className="col-md-12 d-grid gap-4">
                            <div className="row">
                                <span className="w-auto pt-1">Client is currently in the </span>
                                <select className="form-select-asses w-auto" name="">
                                    <option></option>
                                    <option>Pre-contemplative</option>
                                    <option>Contemplative</option>
                                    <option>Preparation</option>
                                    <option>Action</option>
                                    <option>Maintenance</option>
                                </select>
                                <span className="w-auto pt-1">stage of change. </span>
                            </div>

                            <div className="row">
                                <span className="w-auto pt-1">Client is dosing with </span>
                                <input type="text" className="form-select-asses w-auto" />
                                <span className="w-auto pt-1">methadone, daily. </span>
                            </div>

                            <div className="row">
                                <span className="w-auto pt-1">Clients last UDS was </span>
                                <select className="form-select-asses w-auto">
                                    <option></option>
                                    <option>Positive</option>
                                    <option>Negative</option>
                                </select>
                                <span className="w-auto pt-1">for illicit substance use. Client is testing for</span>
                                <input type="text" className="form-select-asses w-auto" />
                            </div>

                            <div className="row">
                                <span className="w-auto pt-1">This month, client’s participation is</span>
                                <input type="text" className="form-select-asses w-auto" />
                                <span className="w-auto pt-1">individual sessions</span>
                                <input type="text" className="form-select-asses w-auto" />
                                <span className="w-auto pt-1">groups</span>
                                <select className="form-select-asses w-auto">
                                    <option></option>
                                    <option>Attending</option>
                                    <option>Not Attending</option>
                                </select>
                                <span className="w-auto pt-1">Med evals</span>
                            </div>

                            <div className="row">
                                <span className="w-auto pt-1">Client is reporting</span>
                                <select className="form-select-asses w-auto">
                                    <option></option>
                                    <option>No</option>
                                    <option>Low</option>
                                    <option>Moderate</option>
                                    <option>High</option>
                                </select>
                                <span className="w-auto pt-1">SI and</span>
                                <select className="form-select-asses w-auto">
                                    <option></option>
                                    <option>No</option>
                                    <option>Low</option>
                                    <option>Moderate</option>
                                    <option>High</option>
                                </select>
                                <span className="w-auto pt-1">HI tendencies. (Low/Moderate/High)</span>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <span>Interventions/Modalities used to address barriers: </span>
                                </div>
                                <div className="col-md-12">
                                    <textarea className="form-control" required rows="5"></textarea>
                                </div>
                            </div>

                            <div className="col-md-12 pt-3">
                                <label className="form-label">A (Assessment):</label>
                                <textarea className="form-control" placeholder="Enter your comments" rows="10" />
                            </div>

                            <div className="mt-3 d-grid d-md-flex justify-content-md-end gap-2">
                                <button type="button" className="btn btn-primary btn-lg" onClick={goToObjective}>Previous: Objective</button>
                                <button type="button" className="btn btn-primary btn-lg" onClick={goToPlan}>Next: Plan</button>
                            </div>

                        </div>
                    </div>
                )}

                {/* Plan Tab Content */}
                {activeTab === 'Plan' && (
                    console.log("Rendering Plan Content"),
                    <div className="panel" id="plan-panel">
                        {/* Plan content based on provided HTML */}
                        
                        <div className="row">
                            <div className="col-md-6 bg-light p-3">
                                {/* Next Re-authorization */}
                                <div className="row mb-3">
                                    <label htmlFor="nextReauthorization" className="col-md-5 col-form-label">Next Re-authorization:</label>
                                    <div className="col-md-6">
                                        <input type="date" className="form-control" id="nextReauthorization" />
                                    </div>
                                </div>

                                {/* Next Counseling Session */}
                                <div className="row mb-3">
                                    <label htmlFor="nextCounselingSession" className="col-md-5 col-form-label">Next Counseling Session:</label>
                                    <div className="col-md-6">
                                        <input type="date" className="form-control" id="nextCounselingSession" />
                                    </div>
                                </div>

                                {/* Next 90 Day Review */}
                                <div className="row mb-3">
                                    <label htmlFor="next90DayReview" className="col-md-5 col-form-label">Next 90 Day Review:</label>
                                    <div className="col-md-6">
                                        <input type="date" className="form-control" id="next90DayReview" />
                                    </div>
                                </div>

                                {/* Next Treatment Plan */}
                                <div className="row mb-3">
                                    <label htmlFor="nextTreatmentPlan" className="col-md-5 col-form-label">Next Treatment Plan:</label>
                                    <div className="col-md-6">
                                        <input type="date" className="form-control" id="nextTreatmentPlan" />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="nextR3Score" className="col-md-5 col-form-label">Next R3 score :</label>
                                    <div className="col-md-6">
                                        <input type="date" className="form-control" id="nextR3Score"/>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label htmlFor="MMCExpirationDate" className="col-md-5 col-form-label">MMC Expiration Date :</label>
                                    <div className="col-md-6">
                                        <input type="date" className="form-control" id="MMCExpirationDate"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-3">
                                {/* P (Plan) */}
                                <label htmlFor="planComments" className="form-label">P (Plan):</label>
                                <textarea className="form-control" id="planComments" placeholder="Enter your comments" rows="13"></textarea>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="mt-3 d-grid d-md-flex justify-content-md-end gap-2">
                            <button type="button" className="btn btn-primary btn-lg"> Previous: Assessment </button>
                            <button type="button" className="btn btn-primary btn-lg"> Improve Note </button>
                            <button type="button" className="btn btn-primary btn-lg"> Feedback </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tabs;