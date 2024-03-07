import React, { useState } from 'react';

import '../../../css/bootstrap.css'
import '../../../css/bootstrap.min.css';
import '../../../css/custom_styles.css';

const Comments = () => {

    /*

    const [comment, setComment] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch('/api/comments'); // Replace with your API endpoint
                const data = await response.json();
                setComment(data.comment); // Adjust depending on your API response structure
            } catch (error) {
                console.error('Error fetching comments:', error);
                // Handle errors here
            }
        };

        fetchComments();
    }, []); // Empty dependency array means this effect runs once on mount

    // Handle changes in the textarea
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }; 

    */
    
    // Use useState to handle comment text
    // Start with the initial comment text; replace with dynamic data if needed
    const initialComment = `Frankie reports living in a hotel with boyfriend, and they argue often which triggers usage. "I want to look at housing assistance and resource options over the next 6 months for stable housing." Frankie has missed 4 doses due to transportation issues. "No concerns, I'm okay with missing Saturdays." Frankie reports cocaine usage through IV every day within the past month. Frankie reports also smoking marijuana every day with valid MMC. "I want to feel like I don't have to use every day to not feel sick over the next one to three months." Client has not been attending group sessions and has been working on engagement with newly assigned counselor. "No concerns." Frankie has Hep C and Asthma with an inhaler. Frankie sees a doctor for Asthma but not Hep C. "I want to find a doctor for my hepatitis within the next three months." Frankie has been diagnosed PTSD and has a psychiatrist and outside mental health counselor. Frankie reports PTSD negatively impacts recovery. "I want to learn healthy coping skills to help when I'm feeling triggered over the next three months." Frankie is currently on probation and has a warrant for a parking ticket in Ann Arbor. "I want to pay my ticket off to take care of my warrant over the next 1 or 2 months." Frankie feels she could be doing better with treatment. Frankie reports unreliable transportation and a suspended license. "I want to get my license back within the next three to six months." Frankie reports healthy relationships with family members. Frankie reports unstable relationship with boyfriend. "I want to attend more support meetings to make supportive friends within the next three months." Frankie reports unstable dosage that causes withdrawal symptoms of irritation and trouble sleeping. "I want to find a stable dose within the next one to three months."`;
    
    const [comment, setComment] = useState(initialComment);

    // Handle changes in the textarea
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    return (
        <div className="row m-2">
            <label htmlFor="commentsTextarea" className="form-label">Comments:</label>
            <textarea 
                className="form-control p-3" 
                id="commentsTextarea" 
                rows="7" 
                value={comment} 
                onChange={handleCommentChange}>
            </textarea>
        </div>
    );
};

export default Comments;
