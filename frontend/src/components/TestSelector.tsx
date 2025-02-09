import React, { useState, useEffect } from 'react';

const TestSelector = ({ subject }) => {
    const [tests, setTests] = useState([]);
    const [selectedTest, setSelectedTest] = useState('');

    useEffect(() => {
        if (subject) {
            // Fetch tests based on the selected subject
            fetch(`/api/tests?subject=${subject}`)
                .then(response => response.json())
                .then(data => setTests(data))
                .catch(error => console.error('Error fetching tests:', error));
        }
    }, [subject]);

    const handleTestChange = (event) => {
        setSelectedTest(event.target.value);
    };

    return (
        <div>
            <label htmlFor="test-selector">Select Test:</label>
            <select id="test-selector" value={selectedTest} onChange={handleTestChange}>
                <option value="">--Select a Test--</option>
                {tests.map(test => (
                    <option key={test.id} value={test.id}>
                        {test.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TestSelector;