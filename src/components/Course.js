import React from 'react'
import api from "../utils/api";

const Course = ({ course, refreshCourses }) => {
    const { fields } = course

    const markCoursePurchased = async () => {
        try {
            await api().patch('/Courses', {
                records : [
                    {
                        id: course.id,
                        fields: { ...course.fields, purchased: true }
                    }
                ]
            })
            refreshCourses();
        } catch (err) {
            console.error(err);
        }
    };

    const deleteCourse = async () => {
        try {
            await api().delete(`/Courses?records[]=${course.id}`);
            refreshCourses();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="list-group-item">
            <a href={fields.link}>
                <h4 className="list-group-item-heading">{fields.name}</h4>
            </a>
            <p>
                Tags:{' '}
                {fields.tags && fields.tags.map((tag, index) => (
                    <span className="badge badge-primary mr-2" key={index}>{tag}</span>
                ))}
            </p>
            {!fields.purchased && (
                <button className="btn btn-sm btn-primary" onClick={markCoursePurchased}>Purchased</button>
            )}
            <button className="btn btn-sm btn-danger ml-2" onClick={deleteCourse}>Delete</button>
        </div>
    )
}

export default Course
