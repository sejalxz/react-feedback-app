import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 7,
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 5,
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 8,
        },

    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    //Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        console.log(newFeedback);
        setFeedback([newFeedback, ...feedback]);
    }

    //Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => {
                return item.id !== id;
            }))
        }
    } 

    // Edit feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    }

    //Update feedback
    const updateFeedback = ((id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem}:item))
    })

    return <FeedbackContext.Provider value={{
        // feedback: feedback,
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>   
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;