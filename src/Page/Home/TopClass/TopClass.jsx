import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import useClasses from '../../../Hooks/useClasses';

const TopClass = () => {
    const [classes] = useClasses('');
    console.log(classes)
    const TopClass = classes.filter(cls=> cls.category === "popular")
    console.log(TopClass)

    return (
        <div>
            <SectionTitle
            Heading='Popular Classes'
            >
            </SectionTitle>
            <h1>{TopClass.length}</h1>
        </div>
    );
};

export default TopClass;