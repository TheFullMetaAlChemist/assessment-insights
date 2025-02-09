import React from 'react';

const subjects = ['Mathematics', 'Science', 'History', 'Literature'];

const SubjectSelector: React.FC<{ onSelect: (subject: string) => void }> = ({ onSelect }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelect(event.target.value);
    };

    return (
        <div>
            <label htmlFor="subject">Select Subject:</label>
            <select id="subject" onChange={handleChange}>
                <option value="">--Select a Subject--</option>
                {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                        {subject}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SubjectSelector;