import React from 'react';
import styles from './List.module.css';

export const List = (props) => {

    const { id, name } = props.task;

    return (
        <li>
            <span className={styles.title}>{id} - {name}</span>
            <button onClick={() => props.deleteFunction(id)} className='delete'>Delete</button>
        </li>
    );
}

