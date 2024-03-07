import React from 'react';

const ScoreTable = () => {
    // Static data array
    const scores = [
        { index: 'Housing Stability - Scoring Guide Input', score: 45 },
        { index: 'Dosing Consistency - Number of doses missed in the past 30 days', score: 20 },
        { index: 'Illicit Drugs - Scoring Guide Input', score: 100 },
        { index: 'Counseling Consistency - Scoring Guide Input', score: 100 },
        { index: 'Physical & mental Health - Scoring Guide Input', score: 60 },
        { index: 'Legal Issues - Scoring Guide Input', score: 40 },
        { index: 'RENEW GAP - Scoring Guide Input', score: 8 },
        { index: 'Interpersonal Relationships - Scoring Guide Input', score: 24 },
        { index: 'Medication Management - Scoring Guide input', score: 20 },
    ];
    // const ScoreTable = () => {
    //     const [scores, setScores] = useState([]);
    
    //     useEffect(() => {
    //         const fetchData = async () => {
    //             try {
    //                 const response = await fetch('/api/scores'); // Replace with your API endpoint
    //                 const data = await response.json();
    //                 setScores(data);
    //             } catch (error) {
    //                 console.error('Error fetching data:', error);
    //                 // Handle errors here
    //             }
    //         };
    
    //         fetchData();
    //     }, []); // Empty dependency array means this effect runs once on mount

        
    return (
        <div className="tablebg mt-3">
            <div className="col-md-12 d-flex flex-wrap align-items-center border-bottom bg-grid-header1">
                <div className="col-md-6 px-2 py-3">
                    <div className="row py-2">
                        <div className="fw-bold ps-4">
                            Total R3 Score - <span className="text-search-result">427</span> | R3 Scores last updated -
                            <span className="text-search-result">2024-01-02</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="py-2">
                    <table id="search" className="table table-striped table-hover border w-100">
                        <thead>
                            <tr>
                                <th>R3 Index</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scores.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.index}</td>
                                    <td>{item.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ScoreTable;
