import React, { useState } from 'react';

const ScoreEntryForm = () => {
    const [studentId, setStudentId] = useState('');
    const [subject, setSubject] = useState('');
    const [test, setTest] = useState('');
    const [score, setScore] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to submit the score to the backend
        console.log({ studentId, subject, test, score });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Student ID:
                    <input 
                        type="text" 
                        value={studentId} 
                        onChange={(e) => setStudentId(e.target.value)} 
                        required 
                    />
                </label>
            </div>
            <div>
                <label>
                    Subject:
                    <input 
                        type="text" 
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)} 
                        required 
                    />
                </label>
            </div>
            <div>
                <label>
                    Test:
                    <input 
                        type="text" 
                        value={test} 
                        onChange={(e) => setTest(e.target.value)} 
                        required 
                    />
                </label>
            </div>
            <div>
                <label>
                    Score:
                    <input 
                        type="number" 
                        value={score} 
                        onChange={(e) => setScore(e.target.value)} 
                        required 
                    />
                </label>
            </div>
            <button type="submit">Submit Score</button>
        </form>
    );
};

export default ScoreEntryForm;